export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  dates: string;
  companyLine: string;
  bullets: string[];
  tags: string[];
  objectCount: number;
  iconLabel: string;
  top: number;
  left: number;
};

const experience: ExperienceEntry[] = [
  {
    id: 'w1',
    company: 'Fortunaglobal',
    role: 'Junior iOS Developer',
    dates: 'Aug 2026 – Present',
    companyLine: 'Fortunaglobal (Pvt) Ltd · Colombo, Sri Lanka',
    bullets: [
      'Building features on Seylan, a live banking app for Seylan Bank, in Swift/SwiftUI',
      'Shipped fund-transfer history display fixes and AMEX card-masking logic',
      'Set up full iOS dev environment and onboarded onto an existing banking codebase',
    ],
    tags: ['Swift', 'SwiftUI', 'JIRA', 'Banking'],
    objectCount: 3,
    iconLabel: 'Junior iOS Dev',
    top: 60,
    left: 20,
  },
  {
    id: 'w2',
    company: 'Cloud99X',
    role: 'Full-Stack Developer (Intern)',
    dates: '2025',
    companyLine: 'Cloud99X',
    bullets: [
      'Built and maintained features across a React front end and Flask back end',
      'Worked with MongoDB for data storage across client projects',
    ],
    tags: ['React', 'Flask', 'MongoDB'],
    objectCount: 2,
    iconLabel: 'Full-Stack Intern',
    top: 60,
    left: 200,
  },
  {
    id: 'w3',
    company: 'CreativoCode',
    role: 'WordPress Developer (Contract)',
    dates: '2024',
    companyLine: 'CreativoCode',
    bullets: ['Delivered custom WordPress sites and theme work on a contract basis'],
    tags: ['WordPress', 'PHP'],
    objectCount: 1,
    iconLabel: 'Contract Dev',
    top: 60,
    left: 380,
  },
];

export default experience;
