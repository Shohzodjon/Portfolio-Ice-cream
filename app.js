// const buyBtns = document.querySelectorAll(".buy--btn");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const modalBtn = document.querySelector(".modal--btn");
const gridListener = document.querySelector('.grid');


const box = document.querySelector('.section--hide');
const allImges = document.querySelectorAll(".img");
const grid = document.querySelector('.grid--animation');
const productCard = document.querySelector('.card--animation');

const productQuantities = document.querySelectorAll(".iceream--quantity");
const totalSums = document.querySelectorAll(".modal--total");
const slider = document.querySelector('.slider--container');

const rightBtn = document.querySelector('.right--btn');
const leftBtn = document.querySelector('.left--btn');
const allSlideImg = document.querySelectorAll('.slide--img');
let counter = 0;


  gridListener.addEventListener('click', function(e){
     const clickedBtn = e.target.closest('.buy--btn');

    if(!clickedBtn)return;
    overlay.classList.remove('hidden');
    document
        .querySelector(`.modal--${clickedBtn.dataset.btn}`)
        .classList.remove('hidden'); 
   
  })



// ########### LAZY--IMGES #########


function imgLoad(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("lazy--img");
  box.classList.remove('section--hide');
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(imgLoad, {
  root: null,
  threshold: 0.5,
});

allImges.forEach((img) => imgObserver.observe(img));


// ####### Text Observing ##########

const text = document.querySelector('.box--text');

function textLoading(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('animation');
  observer.unobserve(entry.target);
}

const textObserver = new IntersectionObserver(textLoading, {
  root:null,
  threshold:0.5,
});

textObserver.observe(text);


function gridObserve(entries, observer){
  
    const [entry] = entries;
    if(!entry.isIntersecting)return;
   grid.classList.remove('grid--animation');
    observer.unobserve(entry.target);

};

let gridIntresecting = new IntersectionObserver(gridObserve, {
  root:null,
  threshold:0.2,
});

gridIntresecting.observe(grid);



const productFuntion = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting)return;
    productCard.classList.remove('card--animation');
    observer.unobserve(entry.target);
};

const productCardObsever = new IntersectionObserver(productFuntion, {
  root:null,
  threshold:.2,
});
productCardObsever.observe(productCard);




// \\\\\\\ Slider \\\\########





function goToSlide(){
  if(counter > 2){
    counter=2;
  }
  else if(counter < 0){
    counter = 0;
  }
  slider.style.transform = `translateX(${-33.33*counter}%)`;

   allSlideImg.forEach((el,i)=>{
     if(counter === i){
       el.style.transform = 'scale(1.4)';
     }
     else{
      el.style.transform = 'none';
     }
   })

}


rightBtn.addEventListener('click', function(){
  counter++;
   goToSlide();
});

leftBtn.addEventListener('click', function(){
  counter--;
   goToSlide();
});






