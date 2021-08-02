
function spawn() {
    let img = "https://cdn.myanimelist.net/images/characters/15/54778.jpg";
    document.body.innerHTML = `
    <h1> You Have Been Ebisu'd </h1>
    <img src="${img}">`
    document.body.style.cssText = "text-align: center;"
}

function rickroll() {
    let audio = new Audio("rickroll.mp3")
    audio.play();
}

const button = document.querySelector("#bam");
button.addEventListener("click", spawn)
button.addEventListener("click", rickroll)

