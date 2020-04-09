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
          /**
           * TODO -> 
           * check on how to solve /nodejs-api-cli
           * && /nodejs-api-cli/ serve from .md
           */
          { text: 'NodeJs Api Cli', link: '/documentation/nodejs-api-cli/' },
          { text: 'NodeJs Validate', link: '/documentation/nodejs-validate/' },
          { text: 'Kemboijs', link: '/documentation/kemboijs/' },
        ]
      },
      { text: 'Example', link: 'https://github.com/kemboijs', target: '_blank' },
    ],
    sidebar: {
      '/documentation/nodejs-api-cli/': [
        ''
      ],
      '/documentation/nodejs-validate/': [
        ''
      ],
      '/documentation/kemboijs/': [
        ''
      ],
      '/': [
        ''
      ]
    },
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    // Github and contribute
    repo: 'kemboijs',
    repoLabel: 'Contribute!',
    // Editing documentation in Github
    docsRepo: 'kemboijs/kemboijs.org',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}