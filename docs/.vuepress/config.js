module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Krayin CRM Developer Portal',
    description: 'Krayin CRM Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],
        ['meta', { name: 'title', content: 'Krayin CRM Developer Portal' }],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'krayin/laravel-crm',
        repoLabel: 'Contribute to Krayin CRM',
        docsRepo: 'krayin/krayin-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'User Guide', link: 'https://docs.krayincrm.com/' },
            { text: 'Community Forum', link: 'https://forums.krayincrm.com/' },
        ],

        contactUs: { text: 'Contact Us', link: 'https://krayincrm.com/contacts/' },
        
        sidebar: {
            '/1.x/': require('./version-configs/1.x'),
            '/2.0/': require('./version-configs/2.0'),
            '/master/': require('./version-configs/master'),
        },
    },
    markdown: {
        lineNumbers: false,
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top'],
};
