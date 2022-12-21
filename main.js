
fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})