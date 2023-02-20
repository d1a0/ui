export interface ShellSettings {
  name: string;
  description: string;
  status?: string;
  examples: {
    title: string;
    description: string;
    code: string;
    lang?: string;
    preview?: boolean;
  }[];
};