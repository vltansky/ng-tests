const fs = require("fs-extra");
const glob = require("fast-glob");
const async = require("async");
const sites = ['corporate', 'private'];

class translator{
    async init(){
        console.time('test');
        this.template = await fs.readFile("./i18n/source.xlf", "utf8");
        // await async.map(sites, this.processBankingSite);
        for(const banking_site of sites){
            this.processBankingSite(banking_site);
        }
        console.timeEnd('test');
    }
     processBankingSite = async(banking_site) => {
        const i18n_sources = await glob(`./i18n/**-${banking_site}.json`);
        let generatedCode = '';
        for(const i18nFile of i18n_sources){
            // const fileName = path.basename(i18nFile).replace('.json','');
            const i18nJson = JSON.parse(await fs.readFile(i18nFile, "utf8"));
            for(const key in i18nJson){
                generatedCode += `
        <trans-unit id="${key}">
            <target>${i18nJson[key]}</target>
        </trans-unit>`
            }
            await fs.writeFile(`./src/locale/${banking_site}.xlf`, this.template.replace('<$$REPLACE_BLOCK$$>', generatedCode));
        }
        console.log(banking_site+' done');
        // cb(null, banking_site);
    }
}
new translator().init();

// const fs = require("fs-extra");

// (async() => {
//     const sourceJSON = await fs.readFile("./jsons/original.json", "utf-8");
//     const regex = /(?:\"|\')([^"]*)(?:\"|\')(?=:)(?:\:\s*)(?:\")?(true|false|[-0-9]+[\.]*[\d]*(?=,)|[0-9a-zA-Z\(\)\@\:\,\/\!\+\-\.\$\ \\\']*)(?:\")?/gmi;
//     let res = '';
//     while ((m = regex.exec(sourceJSON)) !== null) {
//         // This is necessary to avoid infinite loops with zero-width matches
//         if (m.index === regex.lastIndex) {
//             regex.lastIndex++;
//         }
//         res += `<d>${m[1]}<d>\n<s>${m[2]}</s>\n`;
//     }
//     console.log(res);
// })();