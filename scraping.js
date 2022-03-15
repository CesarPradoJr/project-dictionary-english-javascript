const puppeteer = require ('puppeteer');
const fs = require('fs');
const api = require('./AxiosApi/api');

console.log(api.getUser);


(async () => {
    const browser = await puppeteer.launch();
    const pageGrammar = await browser.newPage();
    const dictionaryEnglish = (`https://dictionary.cambridge.org/pt/dicionario/ingles/${api.getUser}`);
    await pageGrammar.goto(dictionaryEnglish);

    const resultGrammar = await pageGrammar.evaluate(() => {
        return Array.from(document.querySelectorAll('.pos-header.dpos-h .posgram.dpos-g.hdib.lmr-5 > span.pos.dpos')).map( x=> x.textContent);
    });
    console.log(resultGrammar[0]);

    fs.writeFile('grammar.json', JSON.stringify(resultGrammar, null, 2), err => {
        if(err) throw new Error ('something went wrong')

        console.log('Well done')
    });

    await browser.close();

})();