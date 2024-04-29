export interface ProjectType {
  name: string;
  description: string;
  img?: { [key: string]: string };
  skills: string[];
  init: string;
  end: string;
}
