// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  base: '/cli',
  integrations: [
    starlight({
      title: 'brkpt-cli',
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
          },
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
      customCss: ['./src/styles/global.css'],
      plugins: [
        lucode({
          footerText:
            'brkpt-cli docs · [GitHub](https://github.com/brkpt-labs/brkpt-cli)',
        }),
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/brkpt-labs/brkpt-cli',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        zh: { label: '简体中文', lang: 'zh' },
      },
      sidebar: [
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
