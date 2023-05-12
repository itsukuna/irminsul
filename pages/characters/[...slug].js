import characters from '@/data/characters/characterList';
import { useRouter } from 'next/router';

export default function CharacterPage() {
    const router = useRouter();
    const { slug } = router.query;
    const decodedSlug = decodeURIComponent(slug);
    const character = characters.find((c) => c.name === decodedSlug);

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Work In Progress</h1>
                        <p className="text-xl font-medium mb-4">Update Soon</p>
                        {/* Add other character details here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
