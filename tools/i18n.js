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