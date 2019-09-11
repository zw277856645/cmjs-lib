window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 3,
    coverpage: true,
    auto2top: true,
    homepage: 'animation.md',
    repo: 'https://gitlab.com/zw277856645/cmjs-lib',
    plugins: [
        DemoBoxAngular.create({
            project: {
                dependencies: {
                    'cmjs-lib': '0.4.6'
                }
            },
            embedOptions: {
                clickToLoad: true
            }
        })
    ]
};