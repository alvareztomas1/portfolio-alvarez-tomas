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

type Company = {
  name: string;
  logo: Logo;
  description: string;
  location: string;
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
