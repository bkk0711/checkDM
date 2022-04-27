const request = require('request-promise'); 
const fs = require('fs')


request(`http://localhost:5000/check/khoidz.com`, async (error, response, html) => {
    }).then(async function(data){
        const check = JSON.parse(data).status
        if(check == 1){
            fs.appendFileSync("BiMua.txt",  "\n");
        }else if(check == -1){
            fs.appendFileSync("LOI.txt",  "\n");
        }else if(check == 0){
            fs.appendFileSync("KhaDung.txt",  "\n");
        }
        console.log('done')
    }).catch(async function(error) {
        console.log(error)
  });
