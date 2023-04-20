import weapon from '@/assets/weapons/weapon';
import WeaponCard from '@/components/cards/weaponCard';
import Head from 'next/head';

export default function Weapons() {
    const cardItems = weapon.map((card, index) => (
        <WeaponCard
            key={index}
            name={card.name}
            weaponType={card.weaponType}
            rarity={card.rarity}
            baseAttack={card.baseAttack}
            subStat={card.subStat}
            passiveName={card.passiveName}
            passiveDesc={card.passiveDesc}
        />
    ));

    return (
        <>
            <Head>
                <title>Weapons Page</title>
            </Head>
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center align-items-center">
                            {cardItems}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
