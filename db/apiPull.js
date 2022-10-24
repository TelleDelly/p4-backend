const fetch = require('node-fetch')
const fs = require('fs')
require('dotenv').config()

let tablepoints = [
    'gestational_limits',
    'insurance_coverage',
    'minors',
    'waiting_periods'
]

url = 'https://api.abortionpolicyapi.com/v1/'

const states = [
    'Iowa',           'New Mexico', 'Indiana',
    'South Carolina', 'Arkansas',   'District of Columbia',
    'California',     'Missouri',   'Pennsylvania',
    'Idaho',          'Alabama',    'Wisconsin',
    'Montana',        'Nevada',     'Hawaii',
    'Georgia',        'Louisiana',  'New Hampshire',
    'Tennessee',      'Arizona',    'Utah',
    'Rhode Island',   'Michigan',   'Kansas',
    'Connecticut',    'Alaska',     'North Carolina',
    'New York',       'Wyoming',    'South Dakota',
    'Florida',        'Colorado',   'North Dakota',
    'Mississippi',    'Texas',      'Massachusetts',
    'Virginia',       'Ohio',       'Oklahoma',
    'West Virginia',  'Maryland',   'Washington',
    'Nebraska',       'New Jersey', 'Minnesota',
    'Illinois',       'Maine',      'Delaware',
    'Kentucky',       'Vermont',    'Oregon'
]

const stateModel = []

states.forEach((state) => {
    stateModel.push({'state': state})
})

const sortAlpha = (a,b) => {
    if(a.state < b.state){
        return -1;
    }
    if(a.state > a.state){
        return 1;
    }
    return 0;
}



stateModel.sort(sortAlpha)
// console.log(stateModel)

const convert = (data, tablepointIndex) => {
    for(i in stateModel){
        for(j in data){
            if(stateModel[i].state === j){
                val = data[j]
                tableObj = {}
                // console.log(`state found: stateModel:${stateModel[i].state} dataJson:${j}`)
                for(k in val){
                    sub_key = k
                    sub_val = val[k]
                    // console.log(`Key: ${sub_key}|| Value: ${sub_val}`)
                    tableObj[sub_key] = sub_val
                }
                stateModel[i][tablepoints[tablepointIndex]] = tableObj
                
                
                // console.log(stateModel[i])
                // console.log(`key: ${tablepoints[tablepointIndex]}|| value: ${tableObj}`)
            }
        }
         
    }
}

const fetchOne = (index) => {
    fetch(`${url}/${tablepoints[index]}/states`,{
        method: 'GET',
        headers: {
            'token': process.env.APIKEY
        },
    })
    .then((res) => res.json())
    .then((data) => {
        convert(data,index)
    })
    .then((data) => {
        // console.log(stateModel)
        const stateModelJSON = JSON.stringify(stateModel)
        fs.writeFile('./stateSeedFile.json', stateModelJSON, 'utf8', (error) => {
            if(error)
                console.log(error)
            else{
                console.log('Successful Write')
            }
        })
    })
    .catch(err => console.log(err))
}


for(let i = 0; i < tablepoints.length; i++){
    fetchOne(i) 
}





