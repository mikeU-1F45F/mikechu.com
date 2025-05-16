"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dino } from "./types";
import { TypographyDemo } from "@/components/TypographyDemo";

export default function Home() {
    const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/dinosaurs");
            const allDinosaurs = (await response.json()) as Dino[];
            setDinosaurs(allDinosaurs);
        })();
    }, []);

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Mike Chu Portfolio</h1>
            <p className="mb-8">Typography System Demo</p>
            
            {/* Typography Demo Component */}
            <TypographyDemo />
            
            <div className="mt-8 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold mb-2">Dinosaur Demo App</h2>
                <p className="mb-4">Click on a dinosaur below to learn more.</p>
                <ul className="list-disc pl-5">
                    {dinosaurs.map((dinosaur: Dino) => {
                        return (
                            <li key={dinosaur.name}>
                                <Link href={`/${dinosaur.name.toLowerCase()}`} className="text-blue-500 hover:underline">
                                    {dinosaur.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
