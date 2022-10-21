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
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


{/* <div class="col-12 main-image">
                <img src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg" alt="">
                <div class="title-image">
                    <h1>Svezia</h1>
                    <span class="description-image">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.</span>
                </div>
            </div>
            <div class="col my-carousel-image">
                <img src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg" alt="">
            </div>
            <div class="col my-carousel-image">
                <img src="https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg" alt="">
            </div>
            <div class="col my-carousel-image">
                <img src="https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c" alt="">
            </div>
            <div class="col my-carousel-image">
                <img src="https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg" alt="">
            </div>
            <div class="col my-carousel-image">
                <img src="https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop" alt="">
            </div>
            <input type="button" id="previous" class="btn btn-dark" value="Previous">
            <input type="button" id="next" class="btn btn-dark" value="Next"></input> */}

const contaier = document.querySelector('.my-container');
createCarousel(images);

const mainImage = document.querySelectorAll('.main-image');
const carouselImage = document.querySelectorAll('.my-carousel-image')
shiftCarousel(mainImage,'d-none');
shiftCarousel(carouselImage, 'my-opacity');


function shiftCarousel(objectArray,classe){
    objectArray[0].classList.toggle(classe);
    setInterval(showImage,1500,objectArray);
    let i=0;
    let j=1;
    function showImage(objectArray){
    const x = mod5(i);
    const y = mod5(j);
    objectArray[x].classList.toggle(classe);
    objectArray[y].classList.toggle(classe);
    i++;
    j++;
    }
}


