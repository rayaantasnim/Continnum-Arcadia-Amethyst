export interface MediaItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'environment' | 'engineering' | 'horology';
  src: string;
  description: string;
  highlight?: string;
  details?: string[];
}

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  subtitle: string;
  specs: string[];
  description: string;
  relatedImage?: string;
}

export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  colorCode?: string;
  previewImage: string;
  badge?: string;
}

export interface ConfigState {
  exteriorColor: string;
  spiritOfEcstasy: string;
  interiorLayout: string;
  luggageOption: string;
  wheels: string;
  horologyIncluded: boolean;
  engravedPlaqueName: string;
}
