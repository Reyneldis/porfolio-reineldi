// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Hemos quitado la configuración de imágenes para evitar errores
  // Usaremos el componente <Image /> con rutas directas desde public/
  integrations: [tailwind()],
  output: 'hybrid',
});
