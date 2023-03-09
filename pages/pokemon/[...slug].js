import { useRouter } from "next/router";
import Header from "../../components/header";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Pokemon() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr(
    query.slug ? `https://pokeapi.co/api/v2/pokemon/${query.slug}` : null,
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Header />
      <h1>Pokémon: {data.name}</h1>
      <ul>
        {data.types.map((type) => (
          <li>
            <a href={`/type/${type.type.name}`}>{type.type.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <img src={data.sprites.front_default} />
        <img src={data.sprites.back_default} />
        <img src={data.sprites.front_shiny} />
        <img src={data.sprites.back_shiny} />
      </div>
      <ul>
        {data.moves.map((move) => (
          <li>
            <a href={`/move/${move.move.name}`}>{move.move.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
