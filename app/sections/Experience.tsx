'use client';

import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import experience from '@/data/experience';
import ExperienceWindow from '@/components/ExperienceWindow';

export default function Experience() {
  return (
    <div className="pt-28">
      <h2 className="pb-6 text-3xl font-bold lg:text-5xl text-center">Experience</h2>
      <div className="px-4 py-2">
        <div className="flex flex-wrap justify-center gap-8 py-2">
          {experience.map((exp) => (
            <Dialog.Root key={exp.id}>
              <Dialog.Trigger asChild>
                <div className="w-32 cursor-pointer select-none p-1 text-center border border-dotted border-transparent hover:border-black focus:border-black focus:outline-none">
                  <Image
                    src="/folder-icon.png"
                    width={168}
                    height={136}
                    alt="folder"
                    className="mx-auto block"
                  />
                  <div className="mt-1 break-words text-sm leading-snug">{exp.company}</div>
                  <div className="text-[10px] text-gray-600">{exp.iconLabel}</div>
                </div>
              </Dialog.Trigger>

              <ExperienceWindow
                company={exp.company}
                role={exp.role}
                dates={exp.dates}
                companyLine={exp.companyLine}
                bullets={exp.bullets}
                tags={exp.tags}
                objectCount={exp.objectCount}
              />
            </Dialog.Root>
          ))}
        </div>
      </div>
    </div>
  );
}
