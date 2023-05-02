import Card from "../components/Card";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 100;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className="flex items-center justify-center gap-5 my-4">
        <h1 className="text-[48px] font-bold">
          <span className="text-orange">Poke</span>Next
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="PokeBall Image"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-10 mb-4 ">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
