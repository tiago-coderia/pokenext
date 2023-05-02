import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const maxPokemons = 250;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  //PARAMS

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center font-bold">
        Carregando Pokemon...
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 gap-8 text-center">
        <h1 className="text-3xl transform uppercase bg-default p-4 text-white font-bold rounded-md">
          {pokemon.name}
        </h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width="250"
          height="250"
          alt={pokemon.name}
        />
        <div>
          <h3 className="font-bold uppercase">Número:</h3>
          <p className="p-4 bg-orange text-white font-bold rounded-md text-xl">
            #{pokemon.id}
          </p>
        </div>
        <div>
          <h3 className="font-bold uppercase">Tipo:</h3>
          <div className="flex gap-2 uppercase">
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className="p-2 bg-default text-white rounded-md"
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="mr-4 border-r-2 pr-10">
            <h4 className="font-bold uppercase">Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className="">
            <h4 className="font-bold uppercase">Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </>
  );
}
