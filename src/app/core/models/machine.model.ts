export type MachineCategory = 'coffee' | 'snacks';

export interface MachineSpec {
  label: string;
  value: string;
}

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  subCategory?: string;
  tagline?: string;
  shortDescription: string;
  fullDescription?: string;
  images: string[];
  specs: MachineSpec[];
  featured?: boolean;
  badge?: string;
  dimensions?: string;
  weight?: string;
  powerSupply?: string;
  canSelection?: string;
}

export interface CategoryInfo {
  id: MachineCategory;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bgImage: string;
  machineCount: number;
}
