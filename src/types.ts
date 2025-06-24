export interface IWork {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  group: string;
  year: number;
  location?: {
    x: number;
    y: number;
  };
}
