// variables

//let cours =  'jhrjrh';
//console.log(cours)
//const prenom = 'guillaume'

// functions

// 1ere méthode (ancienne)
//function FaireQQChose () {
//    console.log('je fais un truc'); 
//}
//FaireQQChose()

// 2ème méthode (récente)
//const FaireUneTache = () => {
//   console.log('je fais une tache');
//}
//FaireUneTache()

// Avec paramètre
//const FaireUneAutreTache = (Type) => {
//    console.log('je fais : ' + Type);
//}
//FaireUneAutreTache('la vaisselle')
//FaireUneAutreTache('les courses')

const btn = document.querySelector('#btn')
const img = document.getElementById('img')


btn.addEventListener('click', () => {
    console.log ('Yes !')
    img.classList.toggle('show')
    alert('Ca a changé')
})

/* suite */

const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / innerWidth *100 + '%'; 

    if (e.x > 500) {
    document.body.style.filter = "blur(3px)";}
    else {
    document.body.style.filter = "none";}
    })

/////////////////////////////////////////////////////

document.getElementById('input').addEventListener('input', (e) => {
vertical.innerHTML = e.target.value
})

//////////////////////////////////////////////////////

const theme = document.querySelectorAll('.theme')

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log (e.target.id);
        document.body.classList.remove("darkTheme","salmonTheme","yellowTheme")
        switch(e.target.id) {
            case "dark" :
                document.body.classList.add("darkTheme");
                break;
            case "salmon" :
                document.body.classList.add("salmonTheme");
                break;
            case "yellow" :
                document.body.classList.add("yellowTheme");
                break;
            default :
            null;
        }
    })
})

////////////////////////////////////////////////////
// htmlcheatsheet.com/js/ Toutes les instructions //
////////////////////////////////////////////////////

