import {useRouter} from 'next/router'
import Header from '../components/header'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Pokemon() {
    const {query} = useRouter()

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${query.limit ? query.limit : 10}`

    const {
        data,
        error,
        isLoading
    } = useSwr(url, fetcher)

    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    if (data.results) {
        return (
            <>
                <Header/>
                <ul>
                    {data.results.map(poke => (
                        <li><a href={`/pokemon/${encodeURIComponent(poke.name)}`}>{poke.name}</a></li>
                    ))}
                </ul>
            </>
        )
    } else {
        return (
            <div>No data</div>
        )
    }
}