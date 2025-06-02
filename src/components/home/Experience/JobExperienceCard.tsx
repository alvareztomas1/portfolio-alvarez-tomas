import { CiCalendar, CiLocationOn } from 'react-icons/ci';

import { Card } from '@components/common/Card';
import { LinkWrapper } from '@components/common/LinkWrapper';
import { Span } from '@components/common/Span';

import type { JobExperience } from '@/types/home/experience.types';

type JobExperienceProps = {
  from: string;
  to: string;
  role: string;
  responsibilities: JobExperience['responsibilities'];
  technologies: JobExperience['technologies'];
  company: JobExperience['company'];
};
export const JobExperienceCard = ({
  company,
  from,
  responsibilities,
  role,
  technologies,
  to,
}: JobExperienceProps) => {
  return (
    <Card hoverEffect={false} className="w-7/8 p-2 md:p-10 lg:w-3/4 xl:w-3/5">
      <div className="flex w-full flex-col-reverse items-center justify-between md:flex-row">
        <h3 className="text-primary font-title text-xl font-extrabold tracking-tight uppercase md:text-2xl">
          {role}
        </h3>

        <LinkWrapper
          title={company.website.title}
          href={company.website.href}
          target="_blank"
        >
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden transition-all hover:scale-125 hover:brightness-110">
            <img
              className="h-full w-full object-contain transition-all"
              src={company.logo.href}
              alt={company.logo.alt}
            />
          </div>
        </LinkWrapper>
      </div>

      <div className="font-body flex w-full flex-col items-center gap-2 font-bold md:flex-row md:justify-between">
        <p className="flex items-center gap-1 text-sm md:text-base">
          <CiCalendar className="h-4 w-4 md:h-6 md:w-6" />
          {from} - {to}
        </p>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <CiLocationOn className="h-4 w-4 md:h-6 md:w-6" />
          {company.location}
        </p>
      </div>

      <p className="font-body text-card-text/80 text-center text-sm leading-relaxed md:text-base">
        {company.description}
      </p>

      <div className="flex flex-col gap-2">
        <h4 className="text-secondary/80 font-title text-center text-base font-bold md:text-start md:text-lg">
          {responsibilities.title} 🚀
        </h4>
        <ul className="list-disc space-y-2 pl-5">
          {responsibilities.tasks.map((task, i) => (
            <li
              key={i}
              className="font-body text-card-text/80 text-sm md:text-base"
            >
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-secondary/80 font-title text-center text-base font-bold md:text-start md:text-lg">
          {technologies.title} 🧑‍💻
        </h4>
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {technologies.stack.map((tech, i) => (
            <Span
              key={i}
              text={tech}
              bgColor="bg-card-span"
              textColor="text-card-span-text/80"
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
