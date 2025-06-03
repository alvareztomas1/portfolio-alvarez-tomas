import type { Title } from '@/types/common.types';

export type HeroSection = {
  contact: Contact;
  role: string;
  description: string;
  scrollArrow: ScrollArrow;
};

type Contact = Title & {
  buttonTitle: string;
};

type ScrollArrow = Title;
