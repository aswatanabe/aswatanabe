/************************************************************************
ハンバーガーメニュー
************************************************************************/

/*--nav：テキストとハンバーガーメニューの切り替え------------------------ */

window.addEventListener('load', changeBurger);
window.addEventListener('resize', changeBurger);

function changeBurger() {
    const winW = window.innerWidth;
    let deviceW = 600;

    if (winW <= deviceW) {
        //600px以下なら
        document.querySelector('nav > div').setAttribute('id', 'burger');
        document.querySelector('nav > div > div:nth-of-type(1)').setAttribute('id', 'burger-btn');
        document.querySelector('nav > div > div:nth-of-type(2)').setAttribute('id', 'burger-menu');
    } else {
        //600pxより大きいなら
        document.querySelector('nav > div').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(1)').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(2)').removeAttribute('id');
    }
}

/*--ハンバーガーメニューを開いたときの動き------------------------ */

const burger = document.getElementById('burger');
const burgerBlur = document.querySelectorAll('.burger-blur');
const mainElements = document.querySelectorAll('main');

burger.addEventListener('click', function () {
    this.classList.toggle('is-open');
    mainElements.forEach(main => main.classList.toggle('burger-blur'));
});

burgerBlur.forEach(blurElement => {
    blurElement.addEventListener('click', function () {
        burger.classList.remove('is-open');
        mainElements.forEach(main => main.classList.remove('burger-blur'));
    });
});

/************************************************************************
メインビジュアルのリストを追随・解除
************************************************************************/

const stickyList = document.getElementById('sticky-list-wrapper');

window.addEventListener('scroll', () => {
    const scroll_y = window.scrollY;
    const inner_width = window.innerWidth;

    if (inner_width <= 1025) {
        stickyList.style.position = 'absolute';
        stickyList.style.inlineSize = '100%';
        stickyList.style.top = '450px';
    } else if (inner_width >= 1025 && scroll_y >= 400) {
        stickyList.style.position = 'absolute';
        stickyList.style.top = '850px';
    } else if (inner_width >= 1025 && scroll_y < 400) {
        stickyList.style.position = 'fixed';
        stickyList.style.top = '450px';
    }
});