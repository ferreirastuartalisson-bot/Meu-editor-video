const videoInput = document.getElementById("videoInput");
const video = document.getElementById("video");

const buttons = document.querySelectorAll(".tools button");


// ==============================
// CARREGAR VÍDEO
// ==============================

videoInput.addEventListener("change", function () {

    const file = videoInput.files[0];

    if (!file) return;

    const videoURL = URL.createObjectURL(file);

    video.src = videoURL;

    video.load();

});


// ==============================
// FERRAMENTAS
// ==============================

buttons[0].addEventListener("click", function () {
    alert("Reverse será ativado com FFmpeg na próxima etapa.");
});


// ZOOM
buttons[1].addEventListener("click", function () {

    if (!video.src) {
        alert("Primeiro escolha um vídeo.");
        return;
    }

    video.style.transform = "scale(1.2)";
    video.style.transition = "transform 0.5s";

});


// TRACKING
buttons[2].addEventListener("click", function () {
    alert("Tracking será adicionado com MediaPipe.");
});


// SLOW MOTION
buttons[3].addEventListener("click", function () {

    if (!video.src) {
        alert("Primeiro escolha um vídeo.");
        return;
    }

    video.playbackRate = 0.5;

});


// MOTION BLUR
buttons[4].addEventListener("click", function () {
    alert("Motion Blur será adicionado na próxima etapa.");
});


// MOVIMENTO GELATINADO
buttons[5].addEventListener("click", function () {
    alert("Movimento gelatinado será adicionado depois.");
});


// 4K
buttons[6].addEventListener("click", function () {
    alert("Exportação em 4K será adicionada com FFmpeg.");
});


// CORTAR
buttons[7].addEventListener("click", function () {
    alert("Ferramenta de corte será adicionada depois.");
});


// ==============================
// EXPORTAR
// ==============================

document.querySelector(".export").addEventListener("click", function () {

    alert("O sistema de exportação será conectado ao FFmpeg.");

});
