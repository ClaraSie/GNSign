var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: 'image/GNsign_loading.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "loading", // Name for future reference. Optional.
})
var animation_downloadOK = bodymovin.loadAnimation({
    container: document.getElementById('downloadOk'), // Required
    path: 'image/ok.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "downloadOk", // Name for future reference. Optional.
})

function loadingPen(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".loading").style.display = "block";
    setTimeout(function () {
            $(document).ready(function () {
                document.querySelector(".loading").style.display = "none";
                document.querySelector(".container").style.display = "block";
            });
    }, 2500);
}

loadingPen();