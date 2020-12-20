const body = document.querySelector("body");

const IMG_NUMBER =4;

// function handleImgLoad(){ 
//     console.log("finished loading");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `background_img/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    // body.appendChild(image); 이걸 사용하면, z-index 에서 값이 밀릴 수 있다. 
    body.append(image);
    // body.prepend(image);
    // image.addEventListener("loadend",handleImgLoad);
    //api에서 이미지를 받아오면하면 반드시 필요한 기능 

}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}
init();