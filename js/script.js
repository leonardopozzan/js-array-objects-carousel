// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        id : '0',
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id : '1',
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id : '2',
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id : '3',
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        id : '4',
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const contaier = document.querySelector('.my-container');
createCarousel(images);

const mainImage = document.querySelectorAll('.main-image');
const carouselImage = document.querySelectorAll('.my-carousel-image');

let activeSlide = 0;
mainImage[activeSlide].classList.toggle('d-none');
carouselImage[activeSlide].classList.toggle('my-opacity');


const btnNext = document.querySelector('#next');
btnNext.addEventListener('click',next);

const btnPrev = document.querySelector('#previous');
btnPrev.addEventListener('click',prev);

const btnStopPlay = document.querySelector('#stop');
btnStopPlay.addEventListener('click',stopPlay);
const btnInverse = document.querySelector('#inverse');
btnInverse.addEventListener('click',inverseOrder);

function inverseOrder(){
    if(btnInverse.value == 'Scorri Indietro'){
        clearInterval(interval);
        intervalInverse = setInterval(prev,2000);
        btnStopPlay.value = 'Interrompi scorrimento';
        btnInverse.value = 'Scorri avanti';
    }else{
        clearInterval(intervalInverse);
        interval = setInterval(next,2000);
        btnStopPlay.value = 'Interrompi scorrimento';
        btnInverse.value = 'Scorri Indietro';
    }
}

let intervalInverse;  

let interval = setInterval(next,2000);

function next(){
    const currentId = mod5(activeSlide);
    const nextId = mod5((activeSlide+1));
    mainImage[currentId].classList.toggle('d-none');
    mainImage[nextId].classList.toggle('d-none');
    carouselImage[currentId].classList.toggle('my-opacity');
    carouselImage[nextId].classList.toggle('my-opacity');
    activeSlide++;
    
}
function prev(){
    if (activeSlide<0){
        activeSlide = 4;
    }
    const currentId = mod5(activeSlide);
    const prevId = mod5((activeSlide+4));

    mainImage[currentId].classList.toggle('d-none');
    mainImage[prevId].classList.toggle('d-none');
    carouselImage[currentId].classList.toggle('my-opacity');
    carouselImage[prevId].classList.toggle('my-opacity');
    activeSlide--;
}
function stopPlay(){
    if(btnStopPlay.value == 'Interrompi scorrimento'){
        clearInterval(interval);
        clearInterval(intervalInverse);
        btnStopPlay.value ='Scorri avanti';
        btnInverse.value = 'Scorri Indietro';
    }else{
        btnStopPlay.value ='Interrompi scorrimento';
        interval = setInterval(next,2000);
    }
}

for (let image of carouselImage){
    image.addEventListener('click',
    function(){
        clearInterval(interval);
        clearInterval(intervalInverse);
        btnStopPlay.value='Scorri avanti';
        btnInverse.value = 'Scorri Indietro';
        const currentId = mod5(activeSlide);
        mainImage[currentId].classList.toggle('d-none');
        carouselImage[currentId].classList.toggle('my-opacity');
        this.classList.toggle('my-opacity');
        activeSlide = parseInt(this.id);
        mainImage[activeSlide].classList.toggle('d-none');
    })
}