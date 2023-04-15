import fs from 'fs';
import path from 'path';
import WeaponCard from '@/components/weaponCard';
import Head from 'next/head';

export async function getStaticProps() {
    const dataDirectory = path.join(process.cwd(), 'assets', 'weapons');

    const getFilesRecursively = function (directory) {
        const files = fs.readdirSync(directory);
        let fileList = [];
        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(directory, files[i]);
            const fileStat = fs.statSync(filePath);
            if (fileStat.isDirectory()) {
                const subdirectoryFiles = getFilesRecursively(filePath);
                fileList = fileList.concat(subdirectoryFiles);
            } else {
                fileList.push(filePath);
            }
        }
        return fileList;
    };

    const fileNames = getFilesRecursively(dataDirectory);

    const cards = fileNames.map(fileName => {
        const fileContents = fs.readFileSync(fileName, 'utf8');
        const data = JSON.parse(fileContents);
        return {
            fileName: fileName,
            name: data.name,
            weaponType: data.weaponType,
            rarity: data.rarity,
            baseAttack: data.baseAttack,
            subStat: data.subStat,
            passiveName: data.passiveName,
            passiveDesc: data.passiveDesc,
        };
    });

    return { props: { cards } };
}

export default function Weapons({ cards }) {
    const cardItems = cards.map(card => (
        <WeaponCard
            key={card.fileName}
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
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {cardItems}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
