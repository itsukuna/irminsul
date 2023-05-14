import characters from '@/data/characters/characterList';
import visions from '@/data/visions/visions';
import Image from 'next/image';

export default function CharacterPage({ character }) {
    const characterVision = visions.find((vision) => vision.name === character.vision);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Image src={character.portrait} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
                        <Image src={characterVision.icon} width={50} height={50} />

                        <h3 className="text-4xl font-bold mb-4">Work In Progress</h3>
                        <p className="text-xl font-medium mb-4">Update Soon</p>

                        {/* Add other character details here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    const decodedSlug = decodeURIComponent(slug);
    const character = characters.find((c) => c.name === decodedSlug);

    if (!character) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            character,
        },
    };
}
