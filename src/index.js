const puppeteer = require("puppeteer");
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();



async function initializeDataBase(){
    const db = new sqlite3.Database('Produtos.db')
    db.serialize(() =>{
        db.run(`
            CREATE TABLE IF NOT EXISTS Produtos(
                id INTEGER PRIMARY KEY,
                name TEXT,
                preco TEXT
            );    
        `)
    });
    return db;
}

function saveToDataBase(db, nome, preco) {
    db.run(`INSERT INTO Produtos (name, preco) VALUES (?, ?)`, [nome, preco], function(err){
        if(err){
            console.log('Erro ao salvar no banco de dados:', err)
        } else {
            console.log(`preço salvo: ${preco} - name ${nome} `)
        }
    });
}

async function getPricesFromHomePage() {
    const db = await initializeDataBase();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const url = 'https://www.amazon.com.br/gp/bestsellers/'

    await page.goto(url, { waitUntil: "load" });

    // - pega todos os preços, coloca em um vetor e retorna ele
    const prices = await page.evaluate(() => {
      const priceElements = Array.from(
        document.querySelectorAll('._cDEzb_p13n-sc-price_3mJ9Z')
      );
      return priceElements.map((element) => element.innerText.trim());
    });

    // - pega todos os nomes, coloca em um vetor e retorna ele
    const names = await page.evaluate(() => {
      const priceElements = Array.from(
        document.querySelectorAll('.p13n-sc-truncate-desktop-type2.p13n-sc-truncated')
      );
      return priceElements.map((element) => element.innerText.trim());
    });

    names.forEach((nome, index) =>{
        console.log(nome, prices[index])
        saveToDataBase(db, nome, prices[index])
    })

    
}
getPricesFromHomePage();


