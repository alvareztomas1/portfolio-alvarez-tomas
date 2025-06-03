import type { Image, Redirect, Title } from '@/types/common.types';

export type ProjectsSection = Title & {
  projects: Project[];
  inProgressText: string;
  repositoryText: string;
};

export type Project = Title & {
  description: string;
  image: ProjectImage;
  technologies: string[];
  website: Website;
  github: GitHub;
  inProgress: boolean;
};

export type MonoRepo = Redirect;

type MultiRepo = {
  frontend?: Redirect;
  backend?: Redirect;
};
type Website = Redirect;
type GitHub = MonoRepo | MultiRepo;

type ProjectImage = Image & Title;
