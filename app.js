const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

const PageTransitions = () => {
    //Manpiulating active buttons
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', (event) => {
            let currentBtn = document.querySelector('.active-btn');
            let selectedBtn = event.target;
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            selectedBtn.className += ' active-btn';
        })
    }

    //selecting the section to be displayed
    allSections.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if(id){
            //hide the other sections
            sections.forEach(section => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();