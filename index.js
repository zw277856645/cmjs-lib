window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 4,
    coverpage: true,
    auto2top: true,
    homepage: 'animation.md',
    repo: 'https://github.com/zw277856645/cmjs-lib',
    plugins: [
        DemoBoxAngular.create({
            project: {
                dependencies: {
                    '@demacia/cmjs-lib': '0.0.1'
                }
            },
            embedOptions: {
                clickToLoad: true
            }
        })
    ]
};