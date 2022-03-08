const json = require('./data.json')

json.forEach(data => {
    let gender
    data.gender ? gender="r Herr " : gender=" Frau "
    console.log('Sehr geehrte'+ gender + data.lastname + data.hobbys ? data.hobbys.join(' ,'): 'Hat keine Hobbys')
});