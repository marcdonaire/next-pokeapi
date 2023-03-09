import { useRouter } from "next/router";
import Header from "../../components/header";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Type() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr(
    query.slug ? `https://pokeapi.co/api/v2/type/${query.slug}` : null,
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Header />
      <h1>Type: {data.name}</h1>
      <h2>Double damage from</h2>
      <ul>
        {data.damage_relations.double_damage_from.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
      <h2>Double damage to</h2>
      <ul>
        {data.damage_relations.double_damage_from.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
      <h2>Half damage from</h2>
      <ul>
        {data.damage_relations.half_damage_from.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
      <h2>Half damage to</h2>
      <ul>
        {data.damage_relations.half_damage_to.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
      <h2>No damage from</h2>
      <ul>
        {data.damage_relations.no_damage_from.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
      <h2>No damage to</h2>
      <ul>
        {data.damage_relations.no_damage_to.map((move) => (
          <li>{move.name}</li>
        ))}
      </ul>
    </>
  );
}
