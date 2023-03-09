import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/pokemon">Pokémon</Link>
                </li>
            </ul>
        </header>
    )
}