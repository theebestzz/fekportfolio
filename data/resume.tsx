import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Fatih Emin',
   initials: 'DV',
   url: 'https://nyxb.nexus',
   location: 'Miami, FL',
   locationLink: 'https://www.google.com/maps/place/miami',
   description:
    'Full-Stack Web & Mobile Developer',
   summary:
    + 'Dreaming up ideas and nurturing them to reality, especially in the realm of education, is where my passion lies.\n\n'
    + 'Outside of programming, I have a diverse set of hobbies that include:\n'
    + '- I play football matches\n'
    + '- I play story-based computer games\n'
    + '- I watch series and movies\n\n'
    + 'If you happen to be in the same city I reside in (currently Kayseri / Turkey), perhaps we could meet up. We could:\n'
    + '- Share a coffee\n'
    + '- Discuss coding\n\n'
    + 'It\'s always great to connect with like-minded individuals and share our passions.',
   avatarUrl: '/me.jpeg',
   skills: [
      'Javascript',
      'Typescript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Django',
      'MongoDB',
      'Postgres',
      'Git',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'f.eminn18@gmail.com',
      social: {
         Instagram: {
            name: 'Instagram',
            url: 'https://www.instagram.com/fatiheminkucukk/',
            icon: Icons.instagram,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fatih-emin-k%C3%BC%C3%A7%C3%BCk-a7a7a9320/',
            icon: Icons.linkedin,

            navbar: true,
         },
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/theebestzz',
            icon: Icons.github,

            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://nyxb.link/x',
            icon: Icons.x,

            navbar: false,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://nyxb.link/yt',
            icon: Icons.youtube,
            navbar: false,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'Rn Medya',
         href: 'https://rnmedya.com/',
         badges: ['Currently Working'],
         location: 'at Work',
         title: 'Full Stack Web Developer',
         logoUrl: '/rn-media.png',
         start: 'Sep 2024',
         end: null,
         description: '',
      },
      {
         company: 'Medyatör İnteraktif',
         href: 'https://www.medyator.net/',
         badges: [],
         location: 'at Work',
         title: 'Front-End Developer',
         logoUrl: '#',
         start: 'October 2019',
         end: 'July 2022',
         description:
        'I used html, css and javascript to advance in the front end field. Then I developed interfaces and designs. I also used React to write beautiful and fluid websites.',
      },
   ],
   education: [
      {
         school: 'High School - Web Design & Coding',
         href: '#',
         degree: '',
         logoUrl: '#',
         start: '2019',
         end: '2022',
      },
      {
         school: 'Kırşehir Ahi Evran University - Web Design & Coding',
         href: 'https://www.ahievran.edu.tr/',
         degree: 'Associates degree',
         logoUrl: '/ahievran.svg',
         start: '2022',
         end: '2024',
      },
   ],
   projects: [
      {
         title: 'E-Commerce Plus',
         href: 'https://ecommerce-plus.vercel.app',
         dates: 'Dec 2023 - Present',
         active: true,
         description:
        'E-commerce example with admin panel, stylish and user-friendly interface, payment method and cart operations.',
         technologies: [
            'Next.js',
            'Typescript',
            'Mongodb',
            'Mongoose',
            'TailwindCSS',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://ecommerce-plus.vercel.app',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '/ecommerce-plus.png',
         video:
        '',
      },
      {
         title: 'X Note',
         href: 'https://fek0-notion.vercel.app',
         dates: 'Sep 2024 - Present',
         active: true,
         description:
        'Notion-like functional note application with membership system and details.',
         technologies: [
            'Next.js',
            'Typescript',
            'Postgresql',
            'Prisma',
            'TailwindCSS',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://fek0-notion.vercel.app/',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '/x-note.png',
         video: '',
      },
      {
         title: 'An unfinished project :(',
         href: 'https://bbqking.vercel.app',
         dates: '',
         active: true,
         description:
        'A project I did by watching videos during my early education',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://bbqking.vercel.app',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '/pizza.png',
         video: '',
      },
      {
         title: 'I18n Boilerplate',
         href: 'https://fek.vercel.app',
         dates: '',
         active: true,
         description:
        'The (static) multilingual website starter code I prepared with next.js and next-intl',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://fek.vercel.app',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Github',
               href: 'https://github.com/theebestzz/nextjs-full-starter',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '/nextjs-template.png',
         video: '',
      },
   ],
   hackingEvents: [
   ],
} as const
