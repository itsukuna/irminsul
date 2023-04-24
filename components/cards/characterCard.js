import Image from "next/image";

export default function CharacterCard({ name, icon }) {
    return (
        <div className="rounded-lg shadow-md hover:overflow-auto hover:transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden" style={{ width: "100%", maxWidth: "300px", height: "400px", scrollbarWidth: "none" }}>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-4"><Image src={icon} width="200" height="200" alt=""></Image></div>
                <div className="font-bold text-xl mb-2 text-white">{name}</div>
            </div>
        </div>
    )
}
