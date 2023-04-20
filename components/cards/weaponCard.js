export default function WeaponCard({ name, weaponType, rarity, baseAttack, subStat, passiveName, passiveDesc }) {
    const stars = "⭐️".repeat(rarity);

    return (
        <div className="bg-gray-600 rounded-lg shadow-md hover:overflow-auto hover:transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden" style={{ width: "100%", maxWidth: "300px", height: "400px", scrollbarWidth: "none" }}>
            <style>
                {`::-webkit-scrollbar { display: none; }`}
            </style>

            <div className="p-4">
                <div className="font-bold text-xl mb-2 text-white">{name}</div>
                <div className="text-white mb-4"><span className="font-bold">{weaponType}</span> {stars}</div>
                <div className="text-white mb-4"><span className="font-bold">Base Attack:</span> {baseAttack}</div>
                <div className="text-white mb-4"><span className="font-bold">Sub Stat:</span> {subStat}</div>
                <div className="text-white mb-4"><span className="font-bold">{passiveName}</span></div>
                <div className="text-white mb-4">{passiveDesc}</div>
            </div>
        </div>
    );
}
