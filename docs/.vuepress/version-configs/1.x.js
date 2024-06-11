let version = '1.x';

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
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([
            ['introduction/requirements', 'Requirements'],
            ['introduction/installation', 'Installation'],
        ]),
    },
    {
        title: 'Architecture concepts',
        path: setVersionPrefix('architecture'),
        collapsable: true,
        children: setVersionPrefix([
            ['architecture/packages', 'Packages'],
            ['architecture/frontend', 'Frontend'],
            ['architecture/repository-pattern', 'Repository Pattern'],
            ['architecture/modular-design', 'Modular Design']
        ]),
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/create-package', 'Getting Started'],
            ['packages/create-migrations', 'Migrations'],
            ['packages/create-models', 'Models'],
            ['packages/store-data-through-repositories', 'Repository'],
            ['packages/routes', 'Routes'],
            ['packages/controllers', 'Controllers'],
            ['packages/views', 'Views'],
            ['packages/localization', 'Localization'],
            ['packages/layouts', 'Layouts'],
            ['packages/assets', 'Assets'],
            ['packages/add-menu-in-admin', 'Admin Menu'],
            ['packages/validation', 'Validation'],
            ['packages/datagrid', 'DataGrid'],
            ['packages/create-acl', 'Access Control List'],
        ]),
    },
    {
        title: 'Digging Deeper',
        path: setVersionPrefix('advanced'),
        collapsable: true,
        children: setVersionPrefix([
            ['advanced/events', 'Events Listeners'],
            ['advanced/helpers', 'Helpers'],
            ['advanced/override-core-model', 'Override Core Models'],
            ['advanced/render-event', 'View Render Event'],
            ['advanced/security-practice', 'Best Security Practices'],
        ])
    },
    {
        title: 'Custom Attributes',
        path: setVersionPrefix('custom-attributes'),
        collapsable: true,
        children: setVersionPrefix([
            ['custom-attributes/custom-attribute', 'Make Model With Custom Attribute'],
            ['custom-attributes/uses', 'How to use custom attribute'],
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