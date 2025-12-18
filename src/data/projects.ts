// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  // La propiedad image ahora es solo un string
  image: string;
  tech: string[];
  github: string;
  link: string;
  slug: string;
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    title:
      'Delivery Express una tienda Online para la venta de productos del hogar',
    slug: 'delivery-express', // <-- SLUG AMIGABLE PARA URL
    description:
      'Tienda Delivery Express, tu sitio favorito de compras para el hogar',
    link: 'https://delivery-express-rust.vercel.app/',
    github: 'https://github.com/Reyneldis/dd',
    image: 'ecomerce.webp', // <-- SOLO EL NOMBRE DEL ARCHIVO
    tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'React'],
    highlights: [
      'Tienda Online para ventas de productos esenciales para tu casa',
      'Diseñada para integrarse en apps y design systems',
      'Infraestructura desplegada en Vercel',
    ],
  },
  {
    title: 'Porfolio',
    slug: 'umpi-portfolio', // <-- SLUG AMIGABLE PARA URL
    description: 'Plataforma estable de mi portafolio personal.',
    link: 'https://adventjs.dev',
    github: 'https://github.com/Reyneldis/porfolio-reineldi',
    image: 'porfolio.webp', // <-- SOLO EL NOMBRE DEL ARCHIVO
    tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Sitio web con un espléndido diseño.', 'Más de 1M de visitas'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(project => project.slug === slug);
}
