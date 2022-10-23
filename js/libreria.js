//funzione che crea un tag html a scelta con una classe lo ritorna e lo appende ad un elemento
function addElementClassHTML(tagElement, className, fatherElement){
    const tag = document.createElement(tagElement);
    tag.className = className;
    fatherElement.append(tag);
    return tag;
}

//funzione che crea le immagini grandi del carosello
function createMainImage(object){
    const mainImage = document.createElement('div');
    mainImage.className = 'col-12 main-image d-none';
    mainImage.innerHTML = 
    `
    <img src="${object.url}" alt="${object.title}" class="big-dimension">
    <div class="title-image">
        <h1>${object.title}&#128205;</h1>
        <span class="description-image">${object.description}</span>
    </div>
    `
    return mainImage;
}

//funzione che crea l'immagine piccola
function createCarouselImage(object){
    const carouselImage = document.createElement('div');
    carouselImage.id = object.id;
    carouselImage.className = 'col my-carousel-image my-opacity';
    carouselImage.innerHTML = `<img src="${object.url}" alt="${object.title}" class="small-dimension">`
    return carouselImage;
}

//funzione che crea l'intero carosello
function createCarousel(objectArray){
    const myFlex = document.createElement('div');
    myFlex.className = 'my-flex';
    contaier.appendChild(myFlex);

    for (let object of objectArray){
        const mainImage = createMainImage(object);
        myFlex.appendChild(mainImage);
    }
    for (let object of objectArray){
        const carouselImage = createCarouselImage(object);
        myFlex.appendChild(carouselImage);
    }

    myFlex.innerHTML += 
    `
    <input type="button" id="previous" class="btn btn-dark" value="Previous">
    <input type="button" id="next" class="btn btn-dark" value="Next"></input>
    `
}

function mod5(numb){
    return Math.abs(numb%5);
}