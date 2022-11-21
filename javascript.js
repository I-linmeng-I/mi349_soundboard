function ImgOnClick(name)
{
    var rain = document.getElementById("rain");
    var keyboard =document.getElementById("keyboard");
    var danger = document.getElementById("danger");
    switch(name){
        case "rain":
            rain.play();
            keyboard.pause();
            danger.pause();
            break;
        case "keyboard":
            keyboard.play();
            rain.pause();
            danger.pause();
            break;
        case "danger":
            danger.play();
            keyboard.pause();
            rain.pause();
            break;
    }
}