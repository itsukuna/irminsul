import characters from '@/data/characters/characterList';
import visions from '@/data/visions/visions';
import Head from 'next/head';
import Image from 'next/image';

export default function CharacterPage({ character }) {
    const characterVision = visions.find((vision) => vision.name === character.vision);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Head>
                <title>{character.name}</title>
            </Head>
            <div className="px-4 py-6 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Image src={character.portrait} alt={character.name} width={500} height={800} />
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 ">
                            <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
                            <Image src={characterVision.icon} width={40} height={40} alt={characterVision.name} />
                        </div>

                        <h3 className="text-4xl font-bold mb-4">Work In Progress</h3>
                        <p className="text-xl font-medium mb-4">Update Soon</p>
                        {/* Add other character details here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = characters.map((character) => ({
        params: { slug: [encodeURIComponent(character.key)] },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const decodedSlug = decodeURIComponent(params.slug);
    const character = characters.find((c) => c.key === decodedSlug);

    return {
        props: {
            character,
        },
    };
}
