import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="bg-default flex flex-col items-center justify-between rounded-md w-[250px] py-[32px] px-[16px] gap-4 m-auto min-h-[400px] max-h-[400px]">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={100}
        height={100}
        alt={pokemon.name}
        title={pokemon.name}
      />
      <span className="bg-orange p-2 rounded-md text-white">#{pokemon.id}</span>
      <h1 className="text-white font-bold text-[22px] transform capitalize">
        {pokemon.name}
      </h1>
      <Link href={`/pokemons/${pokemon.id}`}>
        <button className="btn-primary">Detalhes</button>
      </Link>
    </div>
  );
};
export default Card;
