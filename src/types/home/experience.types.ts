export type JobExperience = {
  from: string;
  to: string;
  role: string;
  responsibilities: Responsibilities;
  technologies: Technologies;
  company: Company;
};

export type ExperienceSection = {
  title: string;
  jobs: JobExperience[];
};

type Website = {
  href: string;
  title: string;
};

type Company = {
  name: string;
  logo: Logo;
  description: string;
  location: string;
  website: Website;
};

type Logo = {
  alt: string;
  href: string;
};

type Responsibilities = {
  title: string;
  tasks: string[];
};

type Technologies = {
  title: string;
  stack: string[];
};
