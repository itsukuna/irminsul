import CharacterCard from '@/components/cards/characterCard';
import characters from '@/assets/data/characters/character';
import Head from 'next/head';
import Link from 'next/link';

export default function Characters() {
    const characterList = characters.map((character) => (
        <Link href={`/characters/${character.slug}`}>
            <CharacterCard
                key={character.name}
                name={character.name}
                icon={character.icon}
                rarity={character.rarity}
            />
        </Link>
    ));

    return (
        <>
            <Head>
                <title>Characters Page</title>
            </Head>
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center align-items-center">
                            {characterList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
