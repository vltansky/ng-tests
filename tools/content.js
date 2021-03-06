const fs = require("fs-extra");
// const glob = require("fast-glob");
// const path = require("path");
const generateNum = Number(process.argv[2]) || 30;
(async() => {
    await fs.remove("./src/app/tests/");
    await fs.ensureDir("./src/app/tests/");
    for(let i=1; i<=generateNum; i++){
        await fs.copy("./src/app/source/ex", `./src/app/tests/module${i}`);
    }
    let routes = [];
    let nav = [];
    for(let i=1;i<=generateNum;i++){
        nav.push({name: `name${i}`, url: `url${i}`});
        routes.push(`{ path: 'url${i}', loadChildren: () => import('./tests/module${i}/loans2.module').then(m => m.BulkTestModule) }`)
    }
    const routesString = routes.join(",\n");
    console.log(nav.length);
    const routesCode = await fs.readFile("./src/app/routing-template.ts", "utf8");
    await fs.writeFile("./src/app/nav.config.json", JSON.stringify(nav));
    await fs.writeFile("./src/app/app-routing.module.ts", routesCode.replace("/*$REPLACE_ME$*/", routesString));
})()