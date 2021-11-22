export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619bfeca45a7827d39464964',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t24en78j',
                  apiId: '9bda975d-f2b9-44a9-ba1d-1320dfe17717'
                },
                {
                  buildHookId: '619bfeca15ce27806ab108eb',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9edwimto',
                  apiId: '9422817c-dc55-40ad-a76a-b37308796c9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mkoarodrig/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9edwimto.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
