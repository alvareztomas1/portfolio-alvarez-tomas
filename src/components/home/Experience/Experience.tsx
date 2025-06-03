import { JobExperienceCard } from '@components/home/Experience/JobExperienceCard';

import type { JobExperience } from '@/types/home/experience.types';

type ExperienceSectionProps = {
  title: string;
  jobs: JobExperience[];
};
export const Experience = ({ title, jobs }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col items-center justify-center gap-3"
    >
      <h2 className="font-title text-secondary text-2xl leading-tight font-bold md:text-3xl">
        {title}
      </h2>
      {jobs.map((job, index) => (
        <JobExperienceCard key={index} {...job} />
      ))}
    </section>
  );
};
