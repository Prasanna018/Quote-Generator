let content = document.querySelector(".content");
let author = document.querySelector(".author");
const apiUrl = "https://api.quotable.io/random";

let genBtn = document.querySelector("#genBtn");


async function getQoute() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    content.innerText = `" Get a Qoute ${data.content} "`;
    author.innerText = `Author : ${data.author}`;


}



genBtn.addEventListener("click", getQoute);
