
for (let x =0; x< document.querySelectorAll('.drum').length; x++) {
    document.querySelectorAll('.drum')[x].addEventListener('click', function () { 
        sound(this.innerHTML);
        addingAnimation(this.innerHTML);
        });
};

document.addEventListener('keydown', (event) => {
    sound(event.key);
    addingAnimation(event.key)
});

 function sound(letter) {
    switch (letter) {
        case 'w':
            let audioW = new Audio('sounds/crash.mp3');
            audioW.play();
        break;

        case 'a':
            let audioA = new Audio('sounds/kick-bass.mp3');
         audioA.play();
        break;

        case 's':
            let audioS = new Audio('sounds/snare.mp3');
            audioS.play();
        break;

        case 'd':
            let audioD = new Audio('sounds/tom-1.mp3');
            audioD.play();
        break;

        case 'j':
            let audioJ = new Audio('sounds/tom-2.mp3');
            audioJ.play();
        break;

        case 'k':
            let audioK = new Audio('sounds/tom-3.mp3');
            audioK.play();
        break;

        case 'l':
            let audioL = new Audio('sounds/tom-4.mp3');
            audioL.play();
        break;
    };
};

function addingAnimation(key) {
    document.querySelector('.'+key).classList.add('pressed');

    window.setTimeout( ()=> {document.querySelector('.'+key).classList.remove('pressed');}, 100)
}



