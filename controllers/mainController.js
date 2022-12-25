const express = require("express")








module.exports =  {

getMain : async (req, res) =>  {

    try{



        res.render("index.ejs")


    }catch(err){

        console.log(err)
    }


}



}