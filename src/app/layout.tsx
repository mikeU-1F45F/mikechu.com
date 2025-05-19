import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EraProvider } from "@/components/layout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mike Chu | Bridging Technology and Human Connection",
    description: "Portfolio website showcasing 25 years of technology innovation and leadership",
    keywords: ["Mike Chu", "Technology", "Portfolio", "Software Engineering", "AI", "Leadership"],
    authors: [{ name: "Mike Chu" }],
    creator: "Mike Chu",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html data-theme="cerberus" lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <EraProvider>
                    {children}
                </EraProvider>
            </body>
        </html>
    );
}
