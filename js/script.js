// $(window).on('load resize', function(){
//     const winW = $(window).width();
//     let devW = 600;
//     if (winW <= devW) {
//         $('nav > div').attr('id','burger');
//         $('nav > div > div:nth-of-type(1)').attr('id','burger-btn');
//         $('nav > div > div:nth-of-type(2)').attr('id','burger-menu');
//     } else {
//         $('nav > div').removeAttr('id');
//         $('nav > div > div').removeAttr('id');
//     }
// });

function changeBurger(){

    const winW = window.innerWidth;
    let deviceW = 600;

    if (winW <= deviceW) { //600px以下なら
        document.querySelector('nav > div').setAttribute('id', 'burger');
        document.querySelector('nav > div > div:nth-of-type(1)').setAttribute('id', 'burger-btn');
        document.querySelector('nav > div > div:nth-of-type(2)').setAttribute('id', 'burger-menu');
    } else { //600pxより大きいなら
        document.querySelector('nav > div').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(1)').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(2)').removeAttribute('id');
    }

}

window.addEventListener('resize', changeBurger);   
window.addEventListener('load', changeBurger);

// $(document).on('click','#burger',function() {
//     $(this).toggleClass('is-open');
//     $('main').toggleClass('burger-blur');
// });
const burger = document.getElementById('burger');

burger.addEventListener('click', function() {
    this.classList.toggle('is-open');
    querySelectorAll('main').classList.toggle('burger-blur');
});

// $(document).on('click','.burger-blur', function() {
//     $('#burger').removeClass('is-open');
//     $('main').removeClass('burger-blur');
// });
const burgerBlur = document.getElementsByClassName('burger-blur');
console.log(burger);

burgerBlur.addEventListener('click', function() {
    getElementById('burger').classList.remove('is-open');
    querySelectorAll('main').classList.remove('burger-blur');
});