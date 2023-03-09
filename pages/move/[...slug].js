import { useRouter } from "next/router";
import Header from "../../components/header";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Move() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr(
    query.slug ? `https://pokeapi.co/api/v2/move/${query.slug}` : null,
    fetcher
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Header />
      <h1>Move: {data.name}</h1>
      <p>Accuracy: {data.accuracy}</p>
      <p>Power: {data.power}</p>
      <p>PP: {data.pp}</p>
      <p>Priority: {data.priority}</p>
    </>
  );
}
