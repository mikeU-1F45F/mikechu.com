import type { FC } from 'react';

type ColorSwatchProps = {
  colorName: string;
  colorClass: string;
  textColorClass?: string;
};

const ColorSwatch: FC<ColorSwatchProps> = ({ colorName, colorClass, textColorClass = 'text-white' }) => (
  <div className="flex flex-col">
    <div 
      className={`h-16 w-full rounded-t-md flex items-center justify-center ${colorClass} ${textColorClass}`}
    >
      <span className="font-medium">{colorName}</span>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-b-md text-xs text-center">
      {colorName}
    </div>
  </div>
);

export function ColorPaletteDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* Past Era Colors (Windows 95) */}
      <section className="p-6 border-2 border-past-secondary bg-white rounded-md">
        <h2 className="text-2xl mb-4 font-bold font-ms-sans">Past Era Colors (Windows 95)</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch colorName="Primary" colorClass="bg-past-primary" />
          <ColorSwatch colorName="Secondary" colorClass="bg-past-secondary" textColorClass="text-gray-800" />
          <ColorSwatch colorName="Accent 1" colorClass="bg-past-accent1" />
          <ColorSwatch colorName="Accent 2" colorClass="bg-past-accent2" />
          <ColorSwatch colorName="Accent 3" colorClass="bg-past-accent3" textColorClass="text-gray-800" />
        </div>
        
        <div className="mt-4 text-sm">
          <p className="font-vt323">
            These colors represent the classic Windows 95 aesthetic with its iconic teal blue, silver gray, 
            and high-contrast accent colors for system messages.
          </p>
        </div>
      </section>

      <section className="p-6 border border-present-secondary bg-white rounded-md">
        <h2 className="text-2xl mb-4 font-bold font-roboto">Present Era Colors (Modern)</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch colorName="Primary" colorClass="bg-present-primary" />
          <ColorSwatch colorName="Secondary" colorClass="bg-present-secondary" />
          <ColorSwatch colorName="Accent 1" colorClass="bg-present-accent1" textColorClass="text-gray-800" />
          <ColorSwatch colorName="Accent 2" colorClass="bg-present-accent2" />
          <ColorSwatch colorName="Accent 3" colorClass="bg-present-accent3" textColorClass="text-gray-800" />
        </div>
        
        <div className="mt-4 text-sm">
          <p className="font-inter">
            The present era color palette combines the deep blue-gray of Kali Linux with Windows 11 blue, 
            complemented by modern accent colors for terminal green, accent pink, and alert orange.
          </p>
        </div>
      </section>

      {/* Future Era Colors (AI Integration) */}
      <section className="p-6 border border-future-accent1 bg-white rounded-md">
        <h2 className="text-2xl mb-4 font-bold font-eurostile">Future Era Colors (AI Integration)</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorSwatch colorName="Primary" colorClass="bg-future-primary" />
          <ColorSwatch colorName="Secondary" colorClass="bg-future-secondary" textColorClass="text-gray-800" />
          <ColorSwatch colorName="Accent 1" colorClass="bg-future-accent1" textColorClass="text-gray-800" />
          <ColorSwatch colorName="Accent 2" colorClass="bg-future-accent2" />
          <ColorSwatch colorName="Accent 3" colorClass="bg-future-accent3" />
        </div>
        
        <div className="mt-4 text-sm">
          <p className="font-space-grotesk">
            The future era palette features a deep space primary color with high-contrast electric cyan, 
            neon magenta, and electric purple accents, creating a futuristic, AI-integrated visual experience.
          </p>
        </div>
      </section>
    </div>
  );
}
