const express = require('express')
const whois = require('node-whois')

require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json());

const domainCheck = ( async(domain)=>{
    
    // console.log(domain)
})

app.get('/check/:domain', async (req, res) =>{
    const domain = req.params.domain
    const whoisOptions = []
    await whois.lookup(domain, whoisOptions, async function(err, data) {
        try {
                let check = data.indexOf("No match")
                let check1 = data.indexOf("No matching")
                let check2 = data.indexOf("NOT FOUND")
                let check3 = data.indexOf("Available")
                let check4 = data.indexOf("AVAILABLE")
                 // let check3 = data1[0].indexOf("No match for")
                if (check != -1 || check1 != -1 || check2 != -1 || check3 != -1 || check4 != -1) {
                    // GET
                    return res.json({status: 0})
                } else if (data == "undefined" || data == '' || data.indexOf("Queried interval") != -1 || data.indexOf("WHOIS LIMIT EXCEEDED") != -1 || data.indexOf("Please try") != -1) {
                    return res.json({status: -1})
                }
                    return res.json({status: 1})
                
        } catch (error) {
            console.log(error)
        }
    })

});


app.get('/ping/:domain', async (req, res) =>{
    const domain = req.params.domain
   

});


app.listen(PORT, function(req,res){
    console.log('Using Port ' + PORT)
})

