const btn = document.getElementById("coolBtn");

btn.addEventListener("click", () => {

  btn.innerHTML = "WELCOME 🔥";

  btn.style.background = "white";
  btn.style.color = "black";

});

const video = document.getElementById("bgVideo");


document.body.addEventListener("click", () => {
    video.muted = false;
    video.volume = 1;
}, { once: true });

function openMemories(){

    document.querySelector(".card").style.display = "none";

    document.getElementById("memoriesPage").style.display = "block";

}

function goBack(){

    document.querySelector(".card").style.display = "block";

    document.getElementById("memoriesPage").style.display = "none";

}
