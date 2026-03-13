export interface Doctor {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: number;
  cases: number;
  specialties: string[];
  isAvailable: boolean;
  bio?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  priceRange: string;
  subItems?: string[];
  sections?: {
    id: string;
    title: string;
    items: string[];
  }[];
  details?: {
    comparisons?: { label: string; valueA: string; valueB: string }[];
    process?: string[];
    materials?: { name: string; origin: string; warranty: string; price?: string; description?: string }[];
  };
}

export interface Case {
  id: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  label: string;
  testimonial: string;
}
