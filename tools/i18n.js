const fs = require("fs-extra");
const glob = require("fast-glob");
const path = require("path");

(async() => {
    const i18n_sources = await glob("./i18n/**.json");
    const template = await fs.readFile("./i18n/source.xlf", "utf8");
    for(const i18nFile of i18n_sources){
        let generatedCode = '';
        const fileName = path.basename(i18nFile).replace('.json','');
        const i18nJson = JSON.parse(await fs.readFile(i18nFile, "utf8"));
        for(const key in i18nJson){
            generatedCode += `
        <trans-unit id="${key}">
            <target>${i18nJson[key]}</target>
        </trans-unit>`
        }
        await fs.writeFile(`./src/locale/${fileName}.xlf`, template.replace('<$$REPLACE_BLOCK$$>', generatedCode));

    }
    // template.replace('<$$REPLACE_BLOCK$$>')
    // console.log(generatedCode);
    // await fs.remove("./src/app/tests/");
    // await fs.ensureDir("./src/app/tests/");
    // let routes = [];
    // let nav = [];
    // for(let i=1;i<=generateNum;i++){
    //     nav.push({name: `name${i}`, url: `url${i}`});
    //     routes.push(`{ path: 'url${i}', loadChildren: () => import('./tests/module${i}/loans2.module').then(m => m.BulkTestModule) }`)
    // }
    // const routesString = routes.join(",\n");
    // console.log(nav.length);
    // const routesCode = await fs.readFile("./src/app/routing-template.ts", "utf8");
    // await fs.writeFile("./src/app/nav.config.json", JSON.stringify(nav));
    // await fs.writeFile("./src/app/app-routing.module.ts", routesCode.replace("/*$REPLACE_ME$*/", routesString));
})()