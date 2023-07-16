const quote = document.querySelector("h2")
const quoteNo = document.querySelector("p span")
const closeBtn = document.getElementById("close")

const fetchFromAPI = async ()=> {
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json()
    const randomNo = Math.floor(Math.random() * 1644);
    quote.innerHTML = `"${data[randomNo].text}"`
    if(!data[randomNo].author){
        quoteNo.innerHTML = "Anonymous"
    }else{
        quoteNo.innerHTML = data[randomNo].author
    }
}
fetchFromAPI()
setInterval(() => {
    fetchFromAPI()
}, 7200000);





closeBtn.addEventListener("click", ()=> api.close())