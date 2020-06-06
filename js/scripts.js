// Page Elements//

const products = document.querySelector('.productsWrap');




// functions for producing product Card and Module Cards

function productCards(item, index){
    let HTML = `
        <div class="product" data-index=${index}>
            <h3>${item.name}</h3>
            <figure class="modImage">
                <img src=${item.image} alt=${item.name}>
            </figure>
        </div>
    `;
    products.innerHTML += HTML;
}




// Overlay Module Template

{/* 
<div class="module">
    <h3>Fish Type</h3>
    <figure class="modImage">
        <img src="img/catch-fish-fish-market-fishing-229789.jpg" alt="fish photo">
    </figure>
    <h4>Price:</h4>
    <p>$3.14/lbs</p>
    <h4>Description:</h4>
    <p>Awesome fish, great for BBQ</p>
</div> 

*/}



// product Object /// 

const productsList = [
    {
        name: "big fish",
        image: "img/skeletonFish.jpg",
        price: "$3.00/pds", 
        desc: "Great when you're having guests over for dinner"
    },
    {
        name: "awesome fish",
        image: "img/fish1.jpg",
        price: "$5.50/pds", 
        desc: "For the price you get an amazing taste which you can enjoy"
    },
    {
        name: "expensive fish",
        image: "img/fish2.jpg",
        price: "$15.00/pds", 
        desc: "For those special nights"
    },
    {
        name: "wonderful fish",
        image: "img/fish3.jpg",
        price: "$12.99/pds", 
        desc: "When you feel like treating yourself to something great"
    }
]

productsList.forEach((item,index)=>productCards(item,index));