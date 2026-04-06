/* eslint-disable */
export const categories = ['Light Mode', 'Dark Mode', '3D', 'Text', 'Mouse', 'Dither', 'Blur', 'Light', 'Retro', 'Distortion', 'Color', 'Generative'];

export interface InspirationItem {
  id: number;
  title: string;
  centerText: string;
  category: string;
  author: string;
  image: string;
  cssFilter: string;
  likes: number;
  colSpan: string;
  rowSpan: string;
}

const baseImages = [
  '/inspiration/webgl_aurora_1775326125807.png', '/inspiration/webgl_blob_1775325536778.png',
  '/inspiration/webgl_chrome_1775326062174.png', '/inspiration/webgl_crystal_1775326012130.png',
  '/inspiration/webgl_fractal_1775325992464.png', '/inspiration/webgl_geometric_1775326148216.png',
  '/inspiration/webgl_glass_1775325568815.png', '/inspiration/webgl_glitch_1775326163363.png',
  '/inspiration/webgl_gradient_1775326079485.png', '/inspiration/webgl_holographic_1775325584068.png',
  '/inspiration/webgl_neon_1775325551608.png', '/inspiration/webgl_orb_1775326180652.png',
  '/inspiration/webgl_plasma_1775326027491.png', '/inspiration/webgl_silk_1775326111101.png',
  '/inspiration/webgl_smoke_1775326093229.png', '/inspiration/webgl_wireframe_1775326045001.png'
];

const authors = ['tomjohndesign', 'kevingrajeda', 'savan_makadiya', 'Federico Luna', 'UI Lab'];

const specificItems = [
  { title: 'Beyond Horizons', centerText: 'Beyond\nHorizons', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2', rowSpan: 'row-span-1' },
  { title: 'Detect Manufacturing', centerText: 'Detect Manufacturing\nAnomalies at Scale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'WebGL Components', centerText: 'WebGL\nComponents\nwith No Code', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { title: 'Light Beam Streak', centerText: '', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'Bridge the Gap', centerText: 'Bridge\nthe Gap', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
  { title: 'Monolith Rock Render', centerText: '', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'Holographic Laptop', centerText: '', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { title: 'Speculative Perception', centerText: 'Speculative Perception', colSpan: 'col-span-1 md:col-span-2 lg:col-span-2', rowSpan: 'row-span-2' }
];

export const inspirations: InspirationItem[] = Array.from({ length: 40 }).map((_, i) => {
  const category = categories[i % categories.length];
  
  let title = `${category} ${['V1', 'Concept', 'Study', 'Experiment', 'UI', 'Shader', 'V2'][i % 7]}`;
  let centerText = '';
  let colSpan = 'col-span-1';
  let rowSpan = 'row-span-1';

  if (i < specificItems.length) {
    title = specificItems[i].title;
    centerText = specificItems[i].centerText;
    colSpan = specificItems[i].colSpan;
    rowSpan = specificItems[i].rowSpan;
  } else {
    const pattern = i % 12;
    if (pattern === 0) { colSpan = 'col-span-1 md:col-span-2'; rowSpan = 'row-span-1'; }
    else if (pattern === 3) { colSpan = 'col-span-1'; rowSpan = 'row-span-2'; }
    else if (pattern === 8) { colSpan = 'col-span-1 md:col-span-2 lg:col-span-2'; rowSpan = 'row-span-2'; }
  }

  const author = authors[i % authors.length];
  const hueShift = (i * 137) % 360;
  const saturation = 100 + (i % 4) * 25;
  const invertVal = i % 14 === 0 ? 100 : 0;
  
  return {
    id: i + 1,
    title,
    centerText,
    category,
    author,
    image: baseImages[i % baseImages.length],
    cssFilter: `hue-rotate(${hueShift}deg) saturate(${saturation}%) invert(${invertVal}%)`,
    likes: Math.floor(i * 17.3) % 800 + 12,
    colSpan,
    rowSpan
  };
});
