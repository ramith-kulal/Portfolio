export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Bidxpert',
    repo: 'https://github.com/ramith-kulal/Bidxpert',
    url: 'https://bidxpert.vercel.app/',
    image: '/bidxpert.png', // Replace with the actual image path
    description:
      'A responsive auction platform built using Next.js, TypeScript, Prisma, and Tailwind CSS. Bidxpert allows users to list and bid on items with secure authentication via JWT and bcrypt. The app ensures seamless user interactions and database management using Prisma. Deployed on Vercel.',
    Skills: ['nextjs', 'typescript', 'prisma', 'tailwindcss', 'jwt', 'bcrypt']
  },
  {
    name: 'Linkle',
    repo: 'https://github.com/ramith-kulal/Linkle',
    url: 'linkle-one.vercel.app',
    image: '/linkle.png',
    description:
      'A real-time random chat application using Socket.IO for instant messaging between users. Built with React and Node.js (Express), featuring dynamic user pairing based on interests and responsive design with Tailwind CSS. Deployed on Render and Vercel for seamless hosting.',
    Skills: ['MERN', 'SocketIO', 'Tailwindcss']
  },

  {
    name: 'SudoSolve',
    repo: 'https://github.com/ramith-kulal/SudoSolve',
    url: 'sudosolve-six.vercel.app/',
    image: '/sudosolve.png', // Replace with the actual image path
    description:
      'A responsive Sudoku Solver web application built using Next.js, TypeScript, React, and Tailwind CSS. The app allows users to input Sudoku puzzles, validate them, and solve them using a backtracking algorithm. The project is deployed on Vercel',
    Skills: ['react', 'nextjs', 'suduko', 'typescript']
  },

  {
    name: 'Ciphersafe',
    repo: 'https://github.com/ramith-kulal/Ciphersafe',
    url: 'ciphersafe-mu.vercel.app',
    image: '/ciphervault.png', // Replace with the actual image path
    description:
      'Ciphersafe is a secure, local password manager built with React, Vite, and Tailwind CSS. Manage your passwords directly in your browser with ease and privacy.',
    Skills: ['react', 'tailwindcss']
  }
]

export const skillsData = [
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express.js'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Next.js'
  },

  {
    img: 'bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'firebase/firebase-plain.svg',
    name: 'Firebase'
  },
  {
    img: 'socketio/socketio-original.svg',
    name: 'Socket.IO'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML5'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS3'
  },
  {
    img: 'figma/figma-original.svg',
    name: 'Figma'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  }
]
