import ArtifactCard from '@/components/cards/artifactCard';
import Head from 'next/head';
import artifact from '@/assets/artifacts/artifact';

export default function Artifacts() {
    const cardItems = artifact.map((card, index) => (
        <ArtifactCard
            key={index}
            name={card.name}
            rarity={card.rarity}
            onePieceBonus={card.onePieceBonus}
            twoPieceBonus={card.twoPieceBonus}
            fourPieceBonus={card.fourPieceBonus}
        />
    ));

    return (
        <><Head>
            <title>Artifact Page</title>
        </Head>

            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {cardItems}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
