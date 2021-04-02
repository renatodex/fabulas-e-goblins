module.exports = {
  title: 'Fábulas & Goblins',
  tagline: 'Um sistema de RPG aberto, gratuíto e colaborativo.',
  url: 'https://fabulas-e-goblins.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'renatodex', // Usually your GitHub org/user name.
  projectName: 'fabulas-e-goblins', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fábulas & Goblins',
      logo: {
        alt: 'Fábulas & Goblins',
        src: 'img/logo-mini.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Livro - v1.6',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {href: 'https://rolador.fabulasegoblins.com.br', label: 'Rolador de Dados', position: 'left'},
        {
          href: 'https://github.com/renatodex/fabulas-e-goblins',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Livro',
          items: [
            {
              label: 'Começando a jogar',
              to: '/docs/1-starting-the-game',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/tendadogoblin',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/renatodex/fabulas-e-goblins',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="https://www.fabulasegoblins.com.br">Fábulas & Goblins</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.instagram.com/tendadogoblin">Tenda do Goblin</a> is licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/renatodex/fabulas-e-goblins/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/renatodex/fabulas-e-goblins/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ]
};
