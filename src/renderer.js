const quote = document.querySelector("h2")
const quoteNo = document.querySelector("p span")
const closeBtn = document.getElementById("close")

const fetchFromAPI = async () => {
    const res = await fetch("https://zenquotes.io/api/random")
    const data = await res.json()
    quote.innerHTML = data[0].q
    quoteNo.innerHTML = data[0].a
}
fetchFromAPI()
setInterval(() => {
    fetchFromAPI()
}, 7200000);





closeBtn.addEventListener("click", () => api.close())