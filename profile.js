// All portfolio content lives here. Replace the placeholder values (marked TODO).
export const profile = {
  name: 'Wajahat Hussain',
  email: 'wajahathsaqqi@gmail.com',
  location: 'Pakistan',
  github: 'https://github.com/your-username',          // TODO
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  resume: '/resume.pdf', // TODO: put your resume at client/public/resume.pdf
};

export const roles = ['Full Stack Developer', 'React.js Developer', 'Node.js Developer'];

export const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
  'MongoDB', 'Mongoose', 'REST APIs', 'JWT Authentication',
  'Git & GitHub', 'Tailwind CSS', 'Bootstrap',
];

// Leave live/github empty to show a disabled button. Add `image: '/projects/name.png'` to show a screenshot.
export const projects = [
  {
    title: 'E-commerce Full Stack Application',
    description: 'TODO: Describe what you built, your role, and the problems it solved.',
    tech: [], live: '', github: '',
  },
  {
    title: 'University Management System (EduConnect+)',
    description: 'A MERN stack university management system built as my Computer Science Final Year Project. It has Admin, Teacher and Student dashboards backed by MongoDB, a React, Material UI and Redux frontend, a Node.js and Express backend, and an AI chat assistant.',
    tech: ['React', 'Material UI', 'Redux', 'Node.js', 'Express', 'MongoDB'], live: '', github: '',
  },
  {
    title: 'Student Management System',
    description: 'TODO: Describe what you built, your role, and the problems it solved.',
    tech: [], live: '', github: '',
  },
];

// TODO: replace with your real details and add internships or training as extra entries.
export const timeline = [
  { type: 'Experience', title: 'MERN Stack Developer', place: 'Alpha IT Industry', period: '1 year of experience' },
  { type: 'Education', title: 'Computer Science', place: 'Lahore Leads University', period: '2023 – 2027' },
];

export const services = [
  { icon: 'Layers', title: 'Full Stack Web Development', text: 'End-to-end web applications with the MERN stack.' },
  { icon: 'Smartphone', title: 'Responsive Website Development', text: 'Sites that work on phones, tablets and desktops.' },
  { icon: 'Server', title: 'REST API Development', text: 'Clean, documented APIs with Node.js and Express.' },
  { icon: 'Database', title: 'Database Design', text: 'MongoDB schemas and Mongoose models for your data.' },
  { icon: 'ShieldCheck', title: 'Authentication and Authorization', text: 'Secure login and role-based access with JWT.' },
  { icon: 'LayoutDashboard', title: 'Admin Dashboard Development', text: 'Dashboards to manage users, content and data.' },
];
