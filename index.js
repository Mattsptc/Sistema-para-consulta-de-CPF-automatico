// consultar o site https://www.situacao-cadastral.com/

const puppeteer = require('puppeteer')

let cpfConsultado = '085.008.529-25'

const consultaCPF = async (cpf) => {
    const browser = await puppeteer.launch({ 
        headless: false
    })
    const page = await browser.newPage();
    await page.goto('https://www.situacao-cadastral.com/');
    await page.waitForSelector('input[name="doc"]');
    await page.type('input[name="doc"]', cpfConsultado, {delay: 185});
    await page.keyboard.press('Enter');
    await page.waitForSelector('#atencao');
    await page.screenshot({path:`consultaCPF-${cpf}.png`})
    await browser.close();
}

consultaCPF(cpfConsultado)
