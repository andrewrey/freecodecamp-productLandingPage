// Page Elements//

const products = document.querySelector('.productsWrap');




// functions

function productCards(item){
    let module = document.createElement('div');
    module.innerHTML = `
        <h3>${item.name}</h3>
        <figure class="modImage><img src=${itme.image} alt=${item.name}></figure>
        <h4>Price</h4>
        <p>${item.price}</p>
        <h4>Decription</h4>
        <p>${item.desc}</p>
    `;
    return module;
}



// product Object /// 

const products = [
    {
        name: "big fish",
        image: "",
        price: "$3.00/pds", 
        desc: "Great when you're having guests over for dinner"
    },
    {
        name: "awesome fish",
        image: "",
        price: "$5.50/pds", 
        desc: "For the price you get an amazing taste which you can enjoy"
    },
    {
        name: "expensive fish",
        image: "",
        price: "$15.00/pds", 
        desc: "For those special nights"
    },
    {
        name: "wonderful fish",
        image: "",
        price: "$12.99/pds", 
        desc: "When you feel like treating yourself to something great"
    }
]