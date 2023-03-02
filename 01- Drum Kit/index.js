function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //finding the audio file
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //finding the keys coresponding to it.
    // if a key is pressed which don't have sound so it will return. That means end the function execution.
    if(!audio){
        return; 
    }
    // setting the current time to zero so to repeatedley play the sound
    audio.currentTime = 0;
    audio.play();   //playing the sound
    key.classList.add('playing');   //adding the animated class

};

// finding all the key in the arraylist(not an array but called as NodeList)
const allKey = document.querySelectorAll('.key');
// iterating the array to remove the each key when pressed, that is removing transition
allKey.forEach(key => key.addEventListener('transitionend', removeTransition));

// this removes the playing class from the classlist that is added
function removeTransition(e){
    //removing the playing class when transform is present
    if(e.propertyName !== 'transform'){ 
        return;
    }
    e.target.classList.remove('playing');   
}

// main
window.addEventListener('keydown', playSound);  //calling the eventlistener function.

