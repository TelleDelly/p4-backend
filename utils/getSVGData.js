const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html'
const states = []

request(URL, (error, response, html) => {
    if(!error && response.statusCode==200){
        const  $= cheerio.load(html)

        const stateNames = $('.g-table-text').text()
        console.log(stateNames)
        
    }
})