module.exports = {
  title: "Kemboijs",
  description: `This is the place that hosts the 
    documentation to the tools we build.`,
  themeConfig: {
    logo: 'kemboijs.png',
    nav: [
      {
        text: 'Documentation',
        items: [
          { text: 'NodeJs Api Cli', link: 'docs/nodejs-api-cli' },
          { text: 'NodeJs Validate', link: 'docs/nodejs-validate' },
          { text: 'Kemboijs', link: '/docs/kemboijs' },
        ]
      },
      { text: 'Examples', link: '/docs' },
      { text: 'Github', link: 'https://github.com/kemboijs', target: '_blank' },
    ],
    sidebar: [
      '/docs/nodejs-api-cli',
      '/docs/nodejs-validate',
      '/docs/kemboijs'
    ],
    searchPlaceholder: 'Search...',
    smoothScroll: true
  }
}