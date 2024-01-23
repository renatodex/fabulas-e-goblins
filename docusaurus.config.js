const version = require('./version.json');
const revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim().substring(0,7)
const path = require('path')
let buildVersion = version.version.replace('{commit}', revision)

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fábulas & Goblins',
  tagline: 'Um sistema de RPG aberto, gratuíto e colaborativo.',
  url: 'https://fabulas-e-goblins.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'renatodex', // Usually your GitHub org/user name.
  projectName: 'fabulas-e-goblins', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/renatodex/fabulas-e-goblins/edit/master/',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            label: `Livro (v${buildVersion}-${version.phase})`,
            position: 'left',
          },
          {
            to: 'database/monsters/',
            activeBasePath: 'database',
            label: 'Bestiário',
            position: 'left',
          },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      'docusaurus-plugin-sass',
      './plugins/spells-to-static',
      './plugins/enemies-to-static',
      './plugins/tables-to-static',
      './plugins/md-tables-to-static',
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      [
        path.resolve(__dirname, './plugins/dynamic-routes'),
        { // this is the options object passed to the plugin
            routes: [
                { // using Route schema from react-router
                    path: '/tabelas',
                    exact: false, // this is needed for sub-routes to match!
                    component: '/src/pages/tabelas/app.js'
                }
            ]
        }
      ],
    ]
};

module.exports = config;
