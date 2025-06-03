import type { SubTitle, Title } from '@/types/common.types';

export type ContactSection = Title &
  SubTitle & {
    emailButtonTitle: string;
    linkedinButtonTitle: string;
    phoneNumberTitle: string;
    response: string;
  };
