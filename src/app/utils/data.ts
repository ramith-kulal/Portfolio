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
    name: 'Stride',
    repo: 'https://github.com/ramith-kulal/Stride',
    url: 'https://stride-cyan.vercel.app/',
    image: '/stride.png', // Replace with the actual image path
    description:
      'Stride is a personal task management app built with Next.js, TypeScript, and Tailwind CSS. Organize tasks, track progress, and manage projects efficiently with a sleek and responsive UI.',
    Skills: ['nextjs', 'typescript', 'tailwindcss', 'zustand', 'drizzle-orm', 'react-query']
  },
  {
    name: 'Bidxpert',
    repo: 'https://github.com/ramith-kulal/Bidxpert',
    url: 'https://bidxpert.vercel.app/',
    image: '/bidxpert.png',
    description:
      'A responsive auction platform built using Next.js, TypeScript, Prisma, and Tailwind CSS. Bidxpert allows users to list and bid on items with secure authentication via JWT and bcrypt.',
    Skills: ['nextjs', 'typescript', 'prisma', 'tailwindcss', 'jwt', 'bcrypt']
  },
  {
    name: 'Linkle',
    repo: 'https://github.com/ramith-kulal/Linkle',
    url: 'https://linkle-one.vercel.app',
    image: '/linkle.png',
    description:
      'A real-time random chat application using Socket.IO for instant messaging between users. Built with React and Node.js (Express), featuring dynamic user pairing based on interests.',
    Skills: ['MERN', 'SocketIO', 'Tailwindcss']
  },
  {
    name: 'SudoSolve',
    repo: 'https://github.com/ramith-kulal/SudoSolve',
    url: 'https://sudosolve-six.vercel.app/',
    image: '/sudosolve.png',
    description:
      'A responsive Sudoku Solver web application built using Next.js, TypeScript, React, and Tailwind CSS. The app allows users to input Sudoku puzzles, validate them, and solve them.',
    Skills: ['react', 'nextjs', 'sudoku', 'typescript']
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
