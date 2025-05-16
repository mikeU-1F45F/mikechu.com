"use client";

import { TypographyDemo } from "@/components/TypographyDemo";
import { ColorPaletteDemo } from "@/components/ColorPaletteDemo";

export default function Home() {


    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Mike Chu Portfolio</h1>
            <TypographyDemo />
            <ColorPaletteDemo />
        </main>
    );
}
