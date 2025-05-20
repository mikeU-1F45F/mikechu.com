"use client";

import { useState, useEffect } from "react";
import { 
    ContainerLayout, 
    EraContainer, 
    EraSection, 
    EraNavigation, 
    ScrollIndicator,
    AccessibilityControls 
} from "@/components/layout";
import { PastTypography, PresentTypography, FutureTypography } from "@/components/ui/Typography";
import { useSearchParams } from "next/navigation";
import { useEra } from "@/components/layout/EraContext";
import type { Era } from "@/components/layout/EraContainer";

export default function Home() {
    const { currentEra, setCurrentEra } = useEra();
    const searchParams = useSearchParams();
    const [isMounted, setIsMounted] = useState(false);
    
    // Handle client-side initialization after hydration is complete
    useEffect(() => {
        setIsMounted(true);
        
        // Check URL parameters for era on initial load
        const eraParam = searchParams.get("era") as Era | null;
        if (eraParam && ["past", "present", "future"].includes(eraParam)) {
            setCurrentEra(eraParam);
        }
    }, [searchParams, setCurrentEra]);
    
    // Update URL when era changes
    useEffect(() => {
        if (isMounted) {
            // Create a new URLSearchParams object
            const params = new URLSearchParams(window.location.search);
            // Set the era parameter
            params.set("era", currentEra);
            // Update the URL without triggering a navigation
            window.history.replaceState({}, "", `?${params.toString()}`);
        }
    }, [currentEra, isMounted]);
    
    // Handle era change from UI interactions
    const handleEraChange = (era: Era) => {
        setCurrentEra(era);
    };
    
    // Create a consistent structure for both server and client rendering
    // but only make interactive elements visible after mounting
    
    return (
        <main className="relative overflow-hidden" style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
            <ContainerLayout>
                <EraContainer
                    initialEra={currentEra}
                    onEraChange={handleEraChange}
                    className="w-full min-h-screen"
                >
                    {/* Past Era Section */}
                    <EraSection 
                        era="past" 
                        isActive={currentEra === "past"}
                        className="text-white"
                        style={{ 
                            backgroundColor: '#008080',
                            minHeight: '100vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <PastTypography variant="h1" className="mb-6 text-past-secondary">Windows 95 Era</PastTypography>
                                <PastTypography variant="p" className="mb-8 max-w-2xl mx-auto">
                                    Welcome to the Windows 95 era of Mike Chu's career. This section showcases early projects and technologies from the beginning of his 25-year journey in technology.
                                </PastTypography>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-past-secondary/20 p-6 rounded border border-past-accent">
                                        <PastTypography variant="h4" className="mb-3 text-past-accent">Early Technologies</PastTypography>
                                        <PastTypography variant="p">
                                            .NET C#, PHP, Java Spring, ARC GIS, SQL, IIS, HTML+CSS+JS
                                        </PastTypography>
                                    </div>
                                    <div className="bg-past-secondary/20 p-6 rounded border border-past-accent">
                                        <PastTypography variant="h4" className="mb-3 text-past-accent">Industry Experience</PastTypography>
                                        <PastTypography variant="p">
                                            Government, Telecomm, Marketing, Document Management, Logistics, Education
                                        </PastTypography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EraSection>
                    
                    {/* Present Era Section */}
                    <EraSection 
                        era="present" 
                        isActive={currentEra === "present"}
                        className="text-white"
                        style={{ 
                            backgroundColor: '#2d3748',
                            minHeight: '100vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <PresentTypography variant="h1" className="mb-6 text-present-secondary">Modern Era</PresentTypography>
                                <PresentTypography variant="p" className="mb-8 max-w-2xl mx-auto">
                                    Explore Mike's current projects and technologies in this modern interface combining Windows and Linux environments, representing his current technical expertise and focus areas.
                                </PresentTypography>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-present-secondary/20 p-6 rounded border border-present-accent">
                                        <PresentTypography variant="h4" className="mb-3 text-present-accent">Current Technologies</PresentTypography>
                                        <PresentTypography variant="p">
                                            .NET C#, Python, TypeScript, AI Systems, Linux, Docker & Kubernetes
                                        </PresentTypography>
                                    </div>
                                    <div className="bg-present-secondary/20 p-6 rounded border border-present-accent">
                                        <PresentTypography variant="h4" className="mb-3 text-present-accent">Industry Focus</PresentTypography>
                                        <PresentTypography variant="p">
                                            Marketing Technology, AI Integration, Cloud Architecture, DevOps
                                        </PresentTypography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EraSection>
                    
                    {/* Future Era Section */}
                    <EraSection 
                        era="future" 
                        isActive={currentEra === "future"}
                        className="text-white"
                        style={{ 
                            backgroundColor: '#1a202c',
                            minHeight: '100vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <FutureTypography variant="p" className="mb-8 max-w-2xl mx-auto">
                                    Discover Mike's vision for the future of technology with AI integration and advanced interfaces, representing the next frontier of his technological journey.
                                </FutureTypography>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-future-secondary/20 p-6 rounded border border-future-accent2">
                                        <FutureTypography variant="h4" className="mb-3 text-future-accent2">Future Technologies</FutureTypography>
                                        <FutureTypography variant="p">
                                            Machine Learning, Natural Language Processing, Agent2Agent Protocol, Model Context Protocol, Systems Architecture
                                        </FutureTypography>
                                    </div>
                                    <div className="bg-future-secondary/20 p-6 rounded border border-future-accent2">
                                        <FutureTypography variant="h4" className="mb-3 text-future-accent2">Industry Vision</FutureTypography>
                                        <FutureTypography variant="p">
                                            Material Design, Climate Tech, Energy, Education, Finance, Transportation
                                        </FutureTypography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EraSection>
                </EraContainer>
            </ContainerLayout>
            
            {/* Only show interactive UI elements after client-side hydration */}
            {isMounted && (
                <>
                    {/* Global Navigation */}
                    <EraNavigation currentEra={currentEra} onEraChange={handleEraChange} />
                    
                    {/* Scroll Progress Indicator */}
                    <ScrollIndicator />
                    
                    {/* Accessibility Controls */}
                    <AccessibilityControls />
                </>
            )}
        </main>
    );
}
