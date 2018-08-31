module.exports = {
  plugins: [
    'node_modules/jsdoc-vuejs',
    'plugins/markdown',
  ],
  recurseDepth: 10,
  source: {
    includePattern: '.+\\.(js|vue)$',
    excludePattern: '(^|\\/|\\\\)_',
    include: ['src'],
    exclude: [],
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure'],
  },
  templates: {
    cleverLinks: true,
    monospaceLinks: false,
    useLongnameInNav: false,
    showInheritedInNav: true,
    logo: {
      url: 'logo.svg',
      width: '90px',
      height: '17px',
      link: 'https://example.com',
    },
    name: 'Example App',
    footerText: '© 2018 Your Company',
    useCollapsibles: true,
    default: {
      staticFiles: {
        include: ['docs/static'],
      },
    },
    css: [
      'docs.css',
    ],
    images: [
      'logo.svg',
    ],
  },
  opts: {
    template: 'node_modules/tui-jsdoc-template',
    encoding: 'utf8',
    destination: './docs/',
    recurse: true,
    private: true,
  },
};
