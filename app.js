let puppyimg = document.getElementById('puppyImage');
let likeicon = document.getElementById('likeIcon');
let buttonElement = document.getElementById('likeButton');
let isliked = true

function onClickLikeButton() {
    if (isliked) {
        puppyimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeicon.style.color = "#0967d2";
        buttonElement.style.backgroundColor = "#0967d2";
        buttonElement.style.color = "#ffffff";
        buttonElement.style.outline = "none";
        isliked = false;
        
    }
    else {
       puppyimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
       likeicon.style.color = "#cbd2d9";
       buttonElement.style.backgroundColor = "#cbd2d9";
       buttonElement.style.color = "#9aa5b1";
       buttonElement.style.outline = "none";
       isliked = true;
    }
    
}