import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ITAnna',
  tagline: 'AI Engineering for Software Engineers — No ML Background Needed',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://itannateam.github.io',
  baseUrl: '/',
  organizationName: 'ITAnnaTeam',
  projectName: 'itannateam.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          blogTitle: 'ITAnna Blog',
          blogDescription: 'AI Engineering insights, session notes, and tutorials',
          postsPerPage: 9,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    './plugins/docusaurus-plugin-indexnow',
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ITAnna',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/',         label: 'Home',     position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/blog',     label: 'Blog',     position: 'left'},
        {
          href: 'https://www.youtube.com/@ITAnnaTeam',
          label: 'YouTube',
          position: 'right',
        },
        {
          href: 'https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB',
          label: 'WhatsApp',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {label: 'YouTube',            href: 'https://www.youtube.com/@ITAnnaTeam'},
        {label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB'},
        {label: 'Blog',               to:   '/blog'},
        {label: 'Projects',           to:   '/projects'},
      ],
      copyright: `© ${new Date().getFullYear()} ITAnna. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
