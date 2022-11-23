const colors = ["green", "red", "yellow", "blue", "orange", "purple", "gray", "pink", "greenyellow" ];

const btns = document.getElementById('btn');
const color = document.querySelector('.color')

btns.addEventListener('click', function(){

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}