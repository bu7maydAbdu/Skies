const express = require("express")
const {fetch, Request, Response} = require("undici")













module.exports = {
     getMain : async (req, res) =>  {


        try {
        
        
            const nsa = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
        
            const data = await nsa.json()
        
            console.log(data)
        
          
          
          
                  
          
                  res.render("index.ejs" , {spaceData : data})
        }catch(err){
            console.log(err)
        }
            
        
        
        
          
        
        
        }
}





