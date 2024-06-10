module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Krayin CRM Documentation',
    description: 'Krayin CRM Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
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
        ],
        sidebar: {
            '/1.x/': require('./version-configs/1.x'),
        },
    },
    markdown: {
        lineNumbers: false,
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top'],
};
