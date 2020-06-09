// Page Elements//

const products = document.querySelector('.productsWrap');
const overLay = document.querySelector('.overlay');
const moduleWrap = document.querySelector('.modulesWrap');

// functions for producing product Card and Module Cards

function productCards(item, index){
    let HTML = `
        <div class="product" data-index="${index}">
            <h3>${item.name}</h3>
            <figure class="modImage">
                <img src=${item.image} alt=${item.name}>
            </figure>
        </div>
    `;
    products.innerHTML += HTML;
}




// Overlay Module Template

/* 
<div class="module">
    <h3>Fish Type</h3>
    <figure class="overLayImage">
        <img src="img/catch-fish-fish-market-fishing-229789.jpg" alt="fish photo">
    </figure>
    <h4>Price:</h4>
    <p>$3.14/lbs</p>
    <h4>Description:</h4>
    <p>Awesome fish, great for BBQ</p>
</div> 

*/

function productModuleOverlayCreator(index){
    let {name,image,price,desc} = productsList[index];
    let html = `
        <div class="module" data-index="${index}">
            <div class="close">
                <span>&times<span>
            </div>
            <h3>${name}</h3>
            <figure class="overlayImage">
                <img src="${image}" alt="${name}">
            </figure>
            <h4>Price:</h4>
            <p>${price}</p>
            <h4>Description:</h4>
            <p>${desc}</p>
            <div class="rArrow">
                <p class="right">&#187</p>
            </div>
            <div class="lArrow">
                <p class="left">&#171</p>
            </div>
            
        </div> 
    `;
    return html;

}

// product Object /// 

const productsList = [
    {
        name: "Big Fish",
        image: "img/skeletonFish.jpg",
        price: "$3.00/pds", 
        desc: "Great when you're having guests over for dinner"
    },
    {
        name: "Awesome Fish",
        image: "img/fish1.jpg",
        price: "$5.50/pds", 
        desc: "For the price you get an amazing taste which you can enjoy"
    },
    {
        name: "Expensive Fish",
        image: "img/fish2.jpg",
        price: "$15.00/pds", 
        desc: "For those special nights"
    },
    {
        name: "Wonderful Fish",
        image: "img/fish3.jpg",
        price: "$12.99/pds", 
        desc: "When you feel like treating yourself to something great"
    }
]

productsList.forEach((item,index)=>productCards(item,index));



// Event Listeners ///

products.addEventListener('click', e =>{
    let element = e.target;
    if(element.tagName === 'IMG'){
        let parent = element.parentNode.parentNode;
        let parentIndex = parent.getAttribute('data-index');
        overLay.classList.remove('hidden');
        moduleWrap.innerHTML = productModuleOverlayCreator(parentIndex);
    }
} );


moduleWrap.addEventListener('click', e => {
    if(e.target.tagName === 'SPAN'){
        overLay.classList.add('hidden');
    }
    if(e.target.className === 'left'){
        let parentElement = e.target.parentNode.parentNode;
        let parentIndex = parseInt(parentElement.getAttribute('data-index'));
        if(parentIndex - 1 >= 0){
            moduleWrap.innerHTML = productModuleOverlayCreator(parentIndex - 1);
        }
    }
    if(e.target.className === 'right'){
        let parentElement = e.target.parentNode.parentNode;
        let parentIndex = parseInt(parentElement.getAttribute('data-index'));
        console.log(productsList.length);
        if(parentIndex + 1 < productsList.length){
            moduleWrap.innerHTML = productModuleOverlayCreator(parentIndex + 1);
        }
    }
});

