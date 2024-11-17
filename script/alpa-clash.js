function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    console.log(homeSection);

    hideElementById('final-score');

    
    setTextElementValueById('currant-life', 5);
    setTextElementValueById('currant-score', 0);

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    const currantAlphabet = document.getElementById('currant-alphabet');
    currantAlphabet.innerText = alphabet;

    setBackGroundColorById(alphabet);
}

//--------------//
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    
    //key player expected to press
    
    const currantAlphabetElement = document.getElementById('currant-alphabet');
    const currantAlphabet = currantAlphabetElement.innerText;
    const expectedAlphabet = currantAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

//checked match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        //score update

        /*const currantScore = getTextElementValueById('currant-score');
        const updatedScore = currantScore + 1;
        setTextElementValueById('currant-score', updatedScore);*/
        
        
        //1- get the currant score
        const currantScoreElement = document.getElementById('currant-score');
        const currantScoreText = currantScoreElement.innerText;
        const currantScore = parseInt(currantScoreText);
        console.log(currantScore);

        //2-  new score
        const newScore = currantScore  + 1;

        //3- show the updated score
        currantScoreElement.innerText = newScore;
        
        //continue game
        removeBackgroundColorById(expectedAlphabet);
        play();
    }
    else {
        console.log('you lost a life');
        //life
        const currantLifeElement = document.getElementById('currant-life');
        const currantLifeText = currantLifeElement.innerText;
        const currantLife = parseInt(currantLifeText);
        console.log(currantLife);

          //2-  new score
          const newLife = currantLife - 1;

          //3- show the updated score
        currantLifeElement.innerText = newLife;

        if (newLife === 0) {
            console.log('game over');
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);


function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score')
    //updated final score
    const lastScore = getTextElementValueById('currant-score');
    console.log(lastScore);
    setTextElementValueById('final-score-last', lastScore);

    //clear last selected key
    

}