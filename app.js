const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Neo",
        price: 24999,
        colors:
            [{
                code : "rgb(0, 28, 48)",
                img : "./images/Titan Neo X.png"
            },
                
            
                {
                    code: "blue",
                    img: "./images/Titan Neo blue.png"
                },
                {
                    code: "black",
                    img: "./images/Titan Neo Black.png"
                }
            ]
    },
    {
        id: 2,
        title: "Quartz",
        price: 49999,
        colors: [{
            code : "olive",
            img :"./images/Titan q.png",
        },
            {
                code: "darkblue",
                img: "./images/Titan q2.png",
            },
            {
                code: "silver",
                img: "./images/Titan q3.png",
            },
        ],
    },
    {
        id: 3,
        title: "Gold",
        price: 9999,
        colors: [{
            code : "rgb(231, 206, 166)",
            img : "./images/Titan Royal.png"
        },
            {
                code: "yellow",
                img: "./images/Titan Gold q.png",
            },
            {
                code: "bisque",
                img: "./images/Titan gold w.png",
            },
        ],
    },
    {
        id: 4,
        title: "Classic",
        price: 4999,
        colors: [{
            code : "silver",
            img : "./images/Titan classic.png"
        },
            {
                code: "black",
                img: "./images/Titan classic 2.png",
            },
            {
                code: "seagreen",
                img: "./images/Titan classic 3.png",
            },
        ],
    },
    {
        id: 5,
        title: "Mech",
        price: 39999,
        colors: [{
            cpde :"brown",
            img : "./images/Titan Grand Mech.png"
        },
            {
                code: "gold",
                img: "./images/Titan mech 2.png",
            },
            {
                code: "black",
                img: "./images/Titan mech 1.png",
            },
        ],
    },
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color1");
const currentProductBackground = document.querySelector(".Product");
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current product
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change to chosen product
        choosenProduct = products[index];
        // change product title
        currentProductTitle.textContent = choosenProduct.title;
        //chamge product Price
        currentProductPrice.textContent = "Starting @" + " ₹ " + choosenProduct.price;
        // change product image
        currentProductImg.src = choosenProduct.colors[0].img;
        // change option colors
        currentProductColors.forEach((color1, index) => {
            color1.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
    currentProductColors.forEach((color, index) => {
        color.addEventListener("click", () => {
          currentProductImg.src = choosenProduct.colors[index].img;
        })
        
    })
   
})
