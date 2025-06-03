import type { Image, Redirect, Title } from '@/types/common.types';

export type JobExperience = {
  from: string;
  to: string;
  role: string;
  responsibilities: Responsibilities;
  technologies: Technologies;
  company: Company;
};

export type ExperienceSection = Title & {
  jobs: JobExperience[];
};

type Website = Redirect;

type Company = {
  name: string;
  logo: Logo;
  description: string;
  location: string;
  website: Website;
};

type Responsibilities = Title & {
  tasks: string[];
};

type Technologies = Title & {
  stack: string[];
};

type Logo = Image;
