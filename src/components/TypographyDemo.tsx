import React from 'react';
import { PastTypography, PresentTypography, FutureTypography } from '@/components/ui/Typography';

export function TypographyDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Past Era Typography (Windows 95) */}
      <section className="p-6 border-2 border-[#C0C0C0] bg-[#00807E] text-white">
        <h2 className="text-2xl mb-4 font-bold">Past Era Typography (Windows 95)</h2>
        
        <div className="space-y-4">
          <PastTypography variant="h1">MS Sans Serif Heading 1</PastTypography>
          <PastTypography variant="h2">MS Sans Serif Heading 2</PastTypography>
          <PastTypography variant="h3">MS Sans Serif Heading 3</PastTypography>
          <PastTypography variant="p">
            This is body text using VT323 font, which resembles the pixel fonts common in Windows 95 era applications.
            The typography system for this era uses web fonts that capture the aesthetic of that time period.
          </PastTypography>
          <PastTypography variant="code">
            {"// This is code text using Courier New font\nfunction helloWindows95() {\n  console.log(\"Hello from Windows 95!\");\n}"}
          </PastTypography>
        </div>
      </section>

      {/* Present Era Typography (Modern) */}
      <section className="p-6 border border-[#0078D7] bg-[#171C28] text-white">
        <h2 className="text-2xl mb-4 font-bold">Present Era Typography (Modern)</h2>
        
        <div className="space-y-4">          
          <div className="mb-8">
            <PresentTypography variant="h1">Modern Heading 1</PresentTypography>
            <PresentTypography variant="h2">Modern Heading 2</PresentTypography>
            <PresentTypography variant="h3">Modern Heading 3</PresentTypography>
          </div>
          
          <PresentTypography variant="p">
            This is body text using Inter font, which is modern, clean, and highly readable.
            The typography system for this era uses contemporary web fonts that work well across platforms.
          </PresentTypography>
          
          <PresentTypography variant="code">
            {"// This is code text using Cascadia Code or Fira Code\nasync function modernCode() {\n  const data = await fetchData();\n  return data.map(item => ({\n    ...item,\n    processed: true\n  }));\n}"}
          </PresentTypography>
        </div>
      </section>

      {/* Future Era Typography (AI Integration) */}
      <section className="p-6 border border-[#00F0FF] bg-[#080C24] text-white">
        <h2 className="text-2xl mb-4 font-bold">Future Era Typography (AI Integration)</h2>
        
        <div className="space-y-4">
          <FutureTypography variant="h1">Orbitron Heading 1</FutureTypography>
          <FutureTypography variant="h2">Orbitron Heading 2</FutureTypography>
          <FutureTypography variant="h3">Orbitron Heading 3</FutureTypography>
          <FutureTypography variant="p">
            This is body text using Space Grotesk font, which has a futuristic yet readable design.
            The typography system for this era uses fonts that convey a sense of advanced technology and AI integration.
          </FutureTypography>
          <FutureTypography variant="code">
            {"// This is code text using JetBrains Mono with ligatures\nasync function* aiDataStream() {\n  const model = await AI.loadModel(\"neural-v4\");\n  for await (const signal of sensors) {\n    yield model.process(signal);\n  }\n}"}
          </FutureTypography>
        </div>
      </section>
    </div>
  );
}
