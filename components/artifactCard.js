import Image from 'next/image';

export default function ArtifactCard({ name, rarity, onePieceBonus, twoPieceBonus, fourPieceBonus, imageSrc }) {

    const stars = Array(rarity).fill().map((_, i) => <span key={i}>⭐️</span>);

    return (
        <div className="bg-gray-600 rounded-lg shadow-md hover:overflow-auto hover:transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden" style={{ width: "300px", height: "400px", scrollbarWidth: "none" }}>
            <style>
                {`::-webkit-scrollbar { display: none; }`}
            </style>
            <div className="p-4">
                <div className="font-bold text-xl mb-2 text-white">{name}</div>
                <div className="text-white mb-4"><span className="font-bold">Rarity:</span> {stars}</div>
                {imageSrc && (
                    <div className="mb-4">
                        <Image src={imageSrc} alt={`Image of ${name}`} width={300} height={200} />
                    </div>
                )}
                {onePieceBonus && (
                    <div className="text-white mb-2">
                        <span className="font-bold">1-Piece Bonus:</span> {onePieceBonus}
                    </div>
                )}
                {twoPieceBonus && (
                    <div className="text-white mb-2">
                        <span className="font-bold">2-Piece Bonus:</span> {twoPieceBonus}
                    </div>
                )}
                {fourPieceBonus && (
                    <div className="text-white mb-2">
                        <span className="font-bold">4-Piece Bonus:</span> {fourPieceBonus}
                    </div>
                )}
            </div>
        </div>
    );
}
