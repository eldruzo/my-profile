const base = import.meta.env.BASE_URL

export const meta = {
  name: 'Achmad Nabil',
  role: 'Backend Engineer',
  company: 'Brick',
  location: 'Jakarta, Indonesia',
  email: 'nabileldruzo@gmail.com',
  phone: '+62 821 3541 2527',
  linkedin: 'https://linkedin.com/in/eldruzo',
  linkedinLabel: 'linkedin.com/in/eldruzo',
  photo: `${base}nabil-photo.png`,
  cv: `${base}Achmad_Nabil_CV.pdf`,
}

export const caseStudy = {
  title: 'EDH finance module',
  context: 'ZettaByte · 2022 – 2026',
  problem:
    'EDH is an education ERP run by institutions across Europe. Its finance module bills students, runs auto-debit and reconciles payments coming back from Stripe and Adyen. Webhooks arrive late, twice, or out of order, and every mistake lands on someone’s tuition.',
  approach: [
    'Led the cross-functional team (backend, frontend, QA) that owned billing, auto-debit and reconciliation.',
    'Made webhook processing idempotent, so a replayed or duplicated event can never charge or credit twice.',
    'Carried auto-debit metadata end to end, from payment trigger through dispute and chargeback.',
    'Tuned MongoDB aggregation pipelines, indexes and GraphQL resolvers (N+1 fixes) so billing-cycle peaks didn’t move response times.',
  ],
  outcome:
    'The module grew from about 15,000 students at release to more than 60,000 users across 10+ institutions, with near-zero finance incidents while I owned it.',
  ledger: [
    { label: 'Students at first release', value: '~15,000' },
    { label: 'Users at handover', value: '60,000+' },
    { label: 'Institutions on the platform', value: '10+' },
    { label: 'Payment providers', value: 'Stripe, Adyen' },
  ],
  total: { label: 'Finance incidents while I owned it', value: 'near zero' },
}

export const experience = [
  {
    company: 'Brick',
    place: 'Jakarta',
    span: 'Jul 2026 – now',
    about: 'Southeast Asia’s financial API platform, giving fintech developers access to financial services.',
    roles: [
      {
        title: 'Backend Engineer',
        period: 'Jul 2026 – Present',
        bullets: [
          'Build features and fixes across Brick’s products and services, and own their technical delivery.',
          'Analyse traffic between apps and third-party endpoints, then build proofs of concept that reproduce that behaviour elsewhere.',
          'Write SQL queries, stored procedures and functions for cross-division data work; watch database health and fix what it shows.',
          'Run stand-ups, reviews, retros, sprint and release planning, and stakeholder demos.',
        ],
      },
    ],
  },
  {
    company: 'ZettaByte Pte Ltd',
    place: 'Yogyakarta',
    span: 'Jul 2021 – Mar 2026 · 4 yrs 9 mos',
    about: 'Education ERP platforms (EDH, ADMTC) for European clients. Joined as a fresher, left at Expert tier.',
    roles: [
      {
        title: 'Senior Back-End Developer / Expert',
        period: 'Dec 2024 – Mar 2026',
        bullets: [
          'One of the final technical gatekeepers for backend releases on EDH and ADMTC.',
          'Company-wide escalation point for the hardest backend issues: finance edge cases and cross-service distributed failures.',
          'Owned Red Alert production incidents end to end: triage, root cause, and a permanent fix.',
          'Brought Claude and Gemini into the team’s workflow for code and test generation, keeping final architectural say on what merged.',
        ],
      },
      {
        title: 'Senior Back-End Developer',
        period: 'Jan 2024 – Nov 2024',
        bullets: [
          'Extended the Stripe and Adyen integrations: webhook processing, auto-debit metadata, disputes and chargebacks.',
          'Trusted pre-production reviewer, keeping the architecture consistent across the team.',
          'Closed customer production tickets in YouTrack under SLA.',
          'Wrote a point-in-time DAX measure for a Power BI dashboard, fed by PostgreSQL CDC data mirroring MongoDB.',
        ],
      },
      {
        title: 'Quality Assurance Division Manager',
        period: 'Nov 2023 – Dec 2023',
        bullets: [
          'Led QA and engineering quality processes through an internal restructuring, then went back to senior backend work by mutual agreement after the trial.',
        ],
      },
      {
        title: 'Senior Back-End Developer',
        period: 'Jun 2022 – Oct 2023',
        bullets: [
          'Led the team that owned EDH’s finance module (the case study above).',
          'Built GraphQL and REST APIs with Apollo, Mongoose and Express; shipped on Node.js, TypeScript, Sequelize, PostgreSQL, MySQL and MongoDB.',
          'Coordinated Red Alert incidents in a distributed monolith, keeping downtime short.',
        ],
      },
      {
        title: 'Junior Back End Developer / Team Lead',
        period: 'Feb 2022 – Jun 2022',
        bullets: [
          'Promoted to team lead seven months after joining; ran Developer/QA checklists and mentored across backend, frontend and QA.',
          'Fixed a Red Alert outage by tracing it to Nginx and SSL configuration.',
        ],
      },
      {
        title: 'Fresher Back End Engineer',
        period: 'Jul 2021 – Feb 2022',
        bullets: [
          'Built DocuSign, HubSpot and Oscar Campus integrations from scratch.',
          'Mentored newer hires and facilitated onboarding bootcamps.',
        ],
      },
    ],
  },
  {
    company: 'Diskominfo Kota Pekalongan',
    place: 'Pekalongan',
    span: 'Feb 2019 – Mar 2019',
    roles: [
      {
        title: 'College Intern',
        period: 'Feb 2019 – Mar 2019',
        bullets: ['Audited Simpatikk, a cover-letter management web app, and recommended fixes for what it got wrong.'],
      },
    ],
  },
]

export const skills = [
  { group: 'Backend', items: 'Node.js, TypeScript, JavaScript, Express, GraphQL (Apollo), REST API design. Learning Go.' },
  { group: 'Databases', items: 'MongoDB (schema design, aggregation pipelines, indexing). PostgreSQL and MySQL with Sequelize (schema design, joins, query optimisation).' },
  { group: 'Payments', items: 'Stripe and Adyen, webhook handling, idempotent event processing, auto-debit, disputes and chargebacks.' },
  { group: 'Reliability', items: 'Red Alert incident management, root cause analysis, microservices, modular monolith, event-driven and webhook-based design.' },
  { group: 'Testing', items: 'Jest (unit, integration), Playwright (E2E).' },
  { group: 'Leadership', items: 'Cross-functional Agile team lead, code review, mentoring and onboarding.' },
  { group: 'Languages', items: 'Indonesian (native), English (professional working).' },
]

export const education = [
  {
    title: 'S.Kom, Management Information Systems',
    where: 'STMIK Widya Pratama, Pekalongan',
    period: '2016 – 2020',
    note: 'Best Graduate Student, Information Systems',
  },
  {
    title: 'Dicoding Developer Conference',
    where: 'Certification',
    period: '2026',
  },
]

export const sideWork = {
  title: 'Eldruzo Web',
  text: 'A subscription website service for Indonesian merchants that I run on the side.',
}
