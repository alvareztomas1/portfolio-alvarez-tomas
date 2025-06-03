import { FaLinkedinIn } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

import { Card } from '@components/common/Card';
import { Icon } from '@components/common/Icon';
import { LinkWrapper } from '@components/common/LinkWrapper';

import { Contact as ContactEnum } from '@/constants/contact.constant';
import { SocialMedia } from '@/constants/social-media.constant';

type ContactProps = {
  title: string;
  subtitle: string;
  emailButtonTitle: string;
  linkedinButtonTitle: string;
  phoneNumberTitle: string;
  response: string;
};
export const Contact = ({
  title,
  subtitle,
  emailButtonTitle,
  linkedinButtonTitle,
  phoneNumberTitle,
  response,
}: ContactProps) => {
  return (
    <section
      id="contact"
      className="bg-background/20 flex min-h-screen flex-col items-center justify-center gap-4 px-6"
    >
      <h2 className="font-title text-secondary text-2xl leading-tight font-bold md:text-3xl">
        {title}
      </h2>

      <h3 className="text-primary text-center text-lg font-bold md:text-xl">
        {subtitle}
      </h3>

      <Card hoverEffect={false} className="w-3/4 p-2 md:p-3 lg:w-2/4">
        <LinkWrapper
          title={emailButtonTitle}
          target="_blank"
          href={`mailto:${ContactEnum.EMAIL}`}
        >
          <Icon
            gap={2}
            row
            textSize="text-base md:text-lg"
            icon={<MdOutlineEmail />}
            description={ContactEnum.EMAIL}
          />
        </LinkWrapper>
        <LinkWrapper
          title={linkedinButtonTitle}
          target="_blank"
          href={`mailto:${ContactEnum.EMAIL}`}
        >
          <Icon
            gap={2}
            row
            textSize="text-base md:text-lg"
            icon={<FaLinkedinIn />}
            description={SocialMedia.LinkedIn}
          />
        </LinkWrapper>
        <Icon
          title={phoneNumberTitle}
          gap={2}
          row
          textSize="text-base md:text-lg"
          hoverEffect={false}
          icon={<IoCallOutline />}
          description={ContactEnum.PHONE}
        />
      </Card>

      <p className="text-body text-card-text/60 text-justify text-sm md:text-base">
        {response}
      </p>
    </section>
  );
};
