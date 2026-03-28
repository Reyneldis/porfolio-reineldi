import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Pon tu URL de Vercel (la obtendrás al desplegar) o la de GitHub Pages
  site: 'https://porfolio-reineldi.vercel.app', 
  integrations: [tailwind()],
  output: 'static',
});