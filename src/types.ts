export interface IProject extends IProjectInfo {
  works: IWork[];
}
export interface IProjectInfo {
  group: string;
  title: string;
  subtitle?: string;
  description: string;
  year: number;
}
export interface IWork {
  image: string;
  tags?: string[];
  location?: {
    x: number;
    y: number;
  };
  imageStyle?: {
    tile?: {
      x: number;
      y: number;
      scale?: number;
    },
    full?: {
      x?: number;
      y?: number;
      scale?: number;
    }
  };
}
export interface IMainWork {
  work: IWork;
  projectInfo: IProjectInfo;
}

export enum Tags {
  THOUGHT_LEADING = 'thought-leading',
  ART_DIRECTOR = 'art director',
  MEANINGFUL_EXPERIENCES = 'meaningful experiences',
  CURIOSITY = 'curiosity',
  BOLD_THINKING = 'bold thinking',
  PLAYFULNESS = 'playfulness',
  MULTIDISCIPLINARY = 'multidisciplinary',
  INDUSTRIAL_DESIGN = 'industrial design',
  BRANDING = 'branding',
  WEB_ENGINEERING = 'web engineering',
  DIGITAL_INNOVATION = 'digital innovation',
}
