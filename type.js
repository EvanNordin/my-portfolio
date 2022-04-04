console.log("working")

//Typewriter object constructor
const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Setting up the object method type()
TypeWriter.prototype.type = function() {

    const index = this.wordIndex % this.words.length;

    const fullTxt = this.words[index];

    if(this.isDeleting){
        //Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
        //Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }
    
    setTimeout(() => this.type(), typeSpeed)
}

//initializing the typewriter effect
const init = () => {
    const txtElement = document.querySelector('.typewriter');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);  
}


//typewriter effect should be called after the page is loaded
document.addEventListener('DOMContentLoaded', init);
