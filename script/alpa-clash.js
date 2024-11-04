function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    console.log(homeSection);

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    const currantAlphabet = document.getElementById('currant-alphabet');
    currantAlphabet.innerText = alphabet;


    const keyboard = document.getElementById('keyboard');
    keyboard.classList.add('bg-[#FFA500]');
    
}