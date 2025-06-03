import type { Text, Title } from '@/types/common.types';

export type NavBarSectionButtons = {
  projects: ProjectsSection;
  contact: ContactSection;
  experience: ExperienceSection;
};
export type ProjectsSection = Title & Text;
export type ContactSection = Title & Text;
export type ExperienceSection = Title & Text;
