export const meta = {
  name: 'Achmad Nabil',
  callName: 'Nabil',
  role: 'Senior Backend Engineer',
  headline: 'Building Resilient Systems at Scale',
  tagline: 'Senior Backend Engineer — Building things that scale.',
  email: 'nabileldruzo@gmail.com',
  phone: '+62 821 3541 2527',
  location: 'Indonesia',
  locationDetail: 'Open to Jakarta, Bandung, Bogor, or Remote',
  linkedin: 'https://linkedin.com/in/eldruzo',
  linkedinLabel: 'linkedin.com/in/eldruzo',
  photo: '/nabil-photo.png',
  resume: '/Achmad_Nabil_Resume.docx',
  available: true,
  languages: ['Indonesian (Native)', 'English (Professional)'],
}

export const stats = [
  { value: '5', suffix: '+', label: 'Years Experience' },
  { value: '60', suffix: 'K+', label: 'Users in Production' },
  { value: '10', suffix: '+', label: 'Enterprise Tenants' },
]

export const highlights = [
  { icon: '⚡', value: '5', suffix: '+', label: 'Years Backend Engineering' },
  { icon: '👥', value: '60', suffix: 'K+', label: 'Users Served in Production' },
  { icon: '🏢', value: '10', suffix: '+', label: 'Enterprise Tenants Supported' },
  { icon: '🎯', value: '~0', suffix: '', label: 'Finance Production Incidents' },
]

export const about = [
  "I'm a Senior Backend Engineer with close to five years of hands-on experience designing, building, and maintaining large-scale ERP systems for European enterprise clients — primarily EDH and ADMTC — through Zettabyte Pte. Ltd., a Singapore-based software company.",
  "My work lives in the parts of a system that can't afford to fail. I led the development of EDH's core finance module — a Stripe and Adyen-integrated billing system that scaled from 15,000 to 60,000+ users across more than 10 enterprise tenants, reaching and holding near-zero production incidents through careful architecture, disciplined code review, and thorough incident response.",
  "I operate best as both a deep technical contributor and a calm escalation point. At Expert tier, I was one of the final gatekeepers for backend releases — triaging the hardest production issues, reviewing high-stakes pull requests, and resolving Red Alert incidents with a focus on permanent fixes rather than quick patches.",
  "I enjoy async-first international collaboration, writing backend systems that are easy to reason about under load, and mentoring engineers earlier in their journey.",
]

export const skillGroups = [
  {
    icon: '⚙️',
    name: 'Backend & Languages',
    skills: [
      { label: 'Node.js', featured: true },
      { label: 'JavaScript', featured: true },
      { label: 'TypeScript', featured: true },
      { label: 'Express.js', featured: true },
      { label: 'GraphQL (Apollo)', featured: true },
      { label: 'REST API', featured: true },
      { label: 'Go', featured: false },
      { label: 'Java', featured: false },
    ],
  },
  {
    icon: '🗄️',
    name: 'Databases & ORMs',
    skills: [
      { label: 'MongoDB', featured: true },
      { label: 'Mongoose', featured: true },
      { label: 'PostgreSQL', featured: true },
      { label: 'MySQL', featured: true },
      { label: 'Sequelize', featured: true },
    ],
  },
  {
    icon: '💳',
    name: 'Payment Integration',
    skills: [
      { label: 'Stripe', featured: true },
      { label: 'Adyen', featured: true },
      { label: 'Webhook Processing', featured: false },
      { label: 'Idempotent Design', featured: false },
      { label: 'Auto-Debit Workflows', featured: false },
      { label: 'Chargeback Handling', featured: false },
    ],
  },
  {
    icon: '🏗️',
    name: 'Architecture & Patterns',
    skills: [
      { label: 'Multi-Tenant Architecture', featured: true },
      { label: 'Microservices', featured: true },
      { label: 'Modular Monolith', featured: true },
      { label: 'Event-Driven Processing', featured: false },
      { label: 'CDC Pipelines', featured: false },
      { label: 'Scalable API Design', featured: false },
    ],
  },
  {
    icon: '☁️',
    name: 'Infrastructure & Cloud',
    skills: [
      { label: 'AWS (EC2, S3, IAM)', featured: true },
      { label: 'Nginx', featured: true },
      { label: 'SSL/TLS (Certbot)', featured: false },
      { label: 'Cloudflare DNS', featured: false },
      { label: 'DigitalOcean', featured: false },
    ],
  },
  {
    icon: '🔧',
    name: 'Testing & CI/CD',
    skills: [
      { label: 'Jest', featured: true },
      { label: 'Playwright', featured: true },
      { label: 'Jenkins', featured: true },
      { label: 'GitHub PR Workflows', featured: false },
      { label: 'Git (Trunk-Based)', featured: false },
      { label: 'CI/CD Pipelines', featured: false },
    ],
  },
  {
    icon: '🔌',
    name: 'Integrations & Reporting',
    skills: [
      { label: 'DocuSign', featured: false },
      { label: 'HubSpot', featured: false },
      { label: 'Oscar Campus', featured: false },
      { label: 'Power BI (DAX)', featured: false },
    ],
  },
  {
    icon: '🤝',
    name: 'Methods & Practices',
    skills: [
      { label: 'Agile / Scrum', featured: false },
      { label: 'Code Review', featured: false },
      { label: 'Team Leadership', featured: false },
      { label: 'Incident Management', featured: false },
      { label: 'Mentoring', featured: false },
      { label: 'Async Collaboration', featured: false },
    ],
  },
]

export const experiences = [
  {
    role: 'Senior Backend Engineer / Expert',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Dec 2024 – Mar 2026',
    location: 'Yogyakarta, Onsite',
    icon: '★',
    bullets: [
      'Promoted to Expert tier as one of the final technical gatekeepers for backend releases across EDH and ADMTC ERP platforms — reviewing pull requests, blocking risky merges, and shipping production fixes for the highest-severity incidents.',
      'Served as company-wide escalation point for the most complex backend issues, including finance edge cases and cross-service distributed failures across microservices and modular monolith architectures.',
      'Owned end-to-end resolution of Red Alert production incidents — triage, root cause analysis, and permanent fixes that prevented recurrence rather than masking symptoms.',
      'Optimized MongoDB aggregation pipelines, indexes, and GraphQL resolver patterns (including N+1 query fixes) to maintain stable response times through high-traffic billing cycles.',
      'Integrated Claude and Gemini into the team\'s development workflow as code and test-generation accelerators, while retaining final architectural oversight on all merged output.',
    ],
  },
  {
    role: 'Senior Backend Engineer',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Jan 2024 – Nov 2024',
    location: 'Yogyakarta, Onsite',
    icon: '◆',
    bullets: [
      'Returned to deep technical contribution as first line of response for senior-level production issues across EDH and ADMTC platforms following a management trial.',
      'Maintained and extended Stripe and Adyen integrations: idempotent webhook event processing, auto-debit metadata, and end-to-end coverage from payment trigger through dispute and chargeback handling.',
      'Continued pre-production code review responsibilities, maintaining architectural consistency across the engineering team.',
      'Resolved customer-reported production tickets via YouTrack — triaging, debugging, patching, and confirming resolution under SLA.',
      'Authored a complex DAX measure for a Power BI dashboard with point-in-time student status filtering, sourced from PostgreSQL CDC data mirroring MongoDB master data.',
    ],
  },
  {
    role: 'QA Division Manager (Trial)',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Nov 2023 – Dec 2023',
    location: 'Yogyakarta, Onsite',
    icon: '◇',
    bullets: [
      'Appointed to lead the QA division during an internal restructuring, overseeing testing workflows and cross-team quality coordination.',
      'Stepped down by mutual agreement after the trial period, returning to senior backend engineering — clear-eyed about where the most technical value is added.',
    ],
  },
  {
    role: 'Senior Backend Engineer',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Jun 2022 – Oct 2023',
    location: 'Yogyakarta, Onsite',
    icon: '▲',
    bullets: [
      'Led a cross-functional Agile team owning EDH\'s core finance module — student billing, auto-debit, and financial reconciliation — achieving and maintaining near-zero production incidents over the ownership period.',
      'Scaled the finance module from ~15,000 students at initial release to 60,000+ users across 10+ enterprise tenants under multi-tenant architecture.',
      'Built and maintained scalable REST API and GraphQL endpoints (Apollo + Mongoose + Express) with disciplined schema design, indexing, and multi-tenant access patterns.',
      'Maintained and extended Adyen payment integrations including webhook handling and auto-debit metadata, increasing successful transaction rates.',
      'Delivered platform features using Node.js, TypeScript, Sequelize on PostgreSQL/MySQL, and Mongoose on MongoDB.',
    ],
  },
  {
    role: 'Backend Developer / Team Lead',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Feb 2022 – Jun 2022',
    location: 'Yogyakarta, Remote',
    icon: '●',
    bullets: [
      'Led a cross-functional Agile team (backend, frontend, QA) to deliver EDH platform features, coordinating tasks via Developer/QA Checklist and mentoring teammates across disciplines.',
      'Resolved a Red Alert incident by diagnosing Nginx and SSL configuration issues, restoring service and strengthening team incident-response capability.',
      'Used standardized development checklists, code reviews, and technical check-ins to improve code quality and reduce rework.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Zettabyte Pte. Ltd.',
    period: 'Jul 2021 – Feb 2022',
    location: 'Yogyakarta, Remote',
    icon: '○',
    bullets: [
      'Built backend features for EDH in Node.js, JavaScript, and GraphQL under senior mentorship.',
      'Built third-party REST API integrations from scratch: DocuSign, HubSpot, and Oscar Campus.',
      'Mentored newer hires and participated as a facilitator in onboarding bootcamps.',
      'Assisted in Red Alert production incident resolution under senior guidance.',
    ],
  },
]

export const additionalExperiences = [
  {
    role: 'Frontend Class Facilitator',
    company: 'Dicoding',
    period: '2021',
    description: 'Facilitated frontend learning sessions for new students after completing the Frontend Expert pathway, supporting their progression through course material and submissions.',
  },
  {
    role: 'Internship — IT Analyst',
    company: 'Dinas Komunikasi dan Informatika Kota Pekalongan',
    period: 'Feb 2019 – Mar 2019',
    description: 'Conducted user-perspective analysis of Simpatikk, a web-based cover-letter management application. Documented workflow gaps and recommended UI and process improvements.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Science (S.Kom)',
    field: 'Management Information Systems',
    school: 'STMIK Widya Pratama',
    location: 'Pekalongan, Indonesia',
    period: '2016 – 2020',
  },
]
