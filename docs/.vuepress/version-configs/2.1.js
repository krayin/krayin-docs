let version = '2.1';

function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;

            return child;
        });
    }

    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    {
        title: 'Prologue',
        path: setVersionPrefix('prologue'),
        collapsable: true,
        children: setVersionPrefix([
            ['prologue/upgrade-guide', 'Upgrade Guide'],
            ['prologue/contribution-guide', ' Contribution Guide']
        ])
    },
    {
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([
            ['introduction/requirements', 'Requirements'],
            ['introduction/installation', 'Installation'],
            ['introduction/docker', 'Docker'],
        ]),
    },
    {
        title: 'Architecture concepts',
        path: setVersionPrefix('architecture'),
        collapsable: true,
        children: setVersionPrefix([
            ['architecture/packages', 'Packages'],
            ['architecture/repository-pattern', 'Repository Pattern'],
            ['architecture/modular-design', 'Modular Design']
        ]),
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/add-menu-in-admin', 'Admin Menu'],
            ['packages/assets', 'Assets'],
            ['packages/blade-components', 'Blade Components'],
            ['packages/create-acl', 'Access Control List'],
            ['packages/create-models', 'Models'],
            ['packages/create-migrations', 'Migrations'],
            ['packages/create-package', 'Getting Started'],
            ['packages/controllers', 'Controllers'],
            ['packages/datagrid', 'DataGrid'],
            ['packages/layouts', 'Layouts'],
            ['packages/localization', 'Localization'],
            ['packages/routes', 'Routes'],
            ['packages/store-data-through-repositories', 'Repository'],
            ['packages/validation', 'Validation'],
            ['packages/views', 'Views']
        ]),
    },
    {
        title: 'Digging Deeper',
        path: setVersionPrefix('advanced'),
        collapsable: true,
        children: setVersionPrefix([
            ['advanced/ai-powered-lead-generation', 'AI-Powered Lead Generation'],
            ['advanced/security-practice', 'Best Security Practices'],
            ['advanced/data-transfer', 'Data Transfer'],
            ['advanced/email-inbound-parse', 'Email Inbound Parse'],
            ['advanced/events', 'Events Listeners'],
            ['advanced/events-and-campaigns', 'Events and Campaigns'],
            ['advanced/helpers', 'Helpers'],
            ['advanced/override-a-layout', 'Override a Layout'],
            ['advanced/render-event', 'View Render Event'],
        ])
    },
    {
        title: 'Custom Attributes',
        path: setVersionPrefix('custom-attributes'),
        collapsable: true,
        children: setVersionPrefix([
            ['custom-attributes/uses', 'How to use custom attribute'],
            ['custom-attributes/custom-attribute', 'Make Model With Custom Attribute'],
        ]),
    },
    {
        title: 'Krayin APIs',
        path: setVersionPrefix('api'),
        collapsable: true,
        children: setVersionPrefix([
            ['api/getting-started-with-the-api', 'Rest API'],
        ]),
    },
];