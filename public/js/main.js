// require('dotenv').config({path: '../config/.env'})



// fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
//     const img = document.querySelector("img")
//     img
// })
// .catch(err => {
//     console.log(err)
// })

const infoBtn = document.querySelector(".info-btn")

infoBtn.addEventListener("click", showScreen)


function showScreen (){
    
    const explanationScreen = document.querySelector(".explanation-screen")
    if(explanationScreen.classList.contains("none")){
        explanationScreen.classList.remove("none")
    }else {
        explanationScreen.classList.add("none")

    }
    
}