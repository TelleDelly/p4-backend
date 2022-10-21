const request = require('request-promise');
const HTMLParcer = require('node-html-parser');
const stateFile = require('./states.json');
const fs = require('fs')



const URL = 'https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html'
const stateMap = new Map()


stateFile.forEach((element) =>{
    stateMap.set(element.name, element.abbreviation)
})

request(URL, (error, response, html) => {
    if(!error && response.statusCode==200){

        const root = HTMLParcer.parse(html)

        const states = root.querySelectorAll('.state')
        const status = root.querySelectorAll('.g-table-rows-td-1')
        const legalUntil = root.querySelectorAll('.g-table-rows-td-2')
        const whys = root.querySelectorAll('.g-table-rows-td-3')

        const filteredData = states.map((state, index) => {
            return {
                state: state.text,
                abbr: stateMap.get(state.text),
                status: status[index].text.trim(),
                legalUntil: legalUntil[index].text.trim(),
                why: whys[index].text.trim(),
            }
        })

        // console.log(filteredData)
        fs.writeFile('./db/svgData.json', JSON.stringify(filteredData), err =>{
            if(err){
                throw err
            }
        })
    }
})