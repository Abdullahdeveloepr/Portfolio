
// ON SCROLL CHANGE COLOR OF HEADER

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    }
    else {
        header.classList.remove('scrolled')

    }
}


)

// ONSCROLL CHANGE ACTIVE FROM ONE TO OTHER IN NAVBAR

let sections = document.querySelectorAll('section') ;
let navlinks = document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}