/************************************************************************
ハンバーガーメニュー
************************************************************************/

window.addEventListener('load', changeBurger);
window.addEventListener('resize', changeBurger);

function changeBurger() {
    const winW = window.innerWidth;
    let deviceW = 600;

    if (winW <= deviceW) {
        // 600px以下なら
        document.querySelector('nav > div').setAttribute('id', 'burger');
        document.querySelector('nav > div > div:nth-of-type(1)').setAttribute('id', 'burger-btn');
        document.querySelector('nav > div > div:nth-of-type(2)').setAttribute('id', 'burger-menu');
    } else {
        // 600pxより大きいなら
        document.querySelector('nav > div').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(1)').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(2)').removeAttribute('id');
    }
}

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
    console.log(scroll_y);
    const inner_width = window.innerWidth;

    if (inner_width <= 1025) {
        stickyList.style.position = 'absolute';
        stickyList.style.inlineSize = '100%';
        stickyList.style.top = '480px';
    } else if (inner_width >= 1025 && scroll_y >= 310) {
        stickyList.style.position = 'absolute';
        stickyList.style.top = '790px';
    } else if (inner_width >= 1025 && scroll_y < 310) {
        stickyList.style.position = 'fixed';
        stickyList.style.top = '480px';
    }
});

// typewriterの表示が終わった後に表示を切り替える
setTimeout(() => {
    stickyList.style.display = 'block';
    stickyList.style.opacity = '1';
}, 7700);


/************************************************************************
タイプライターエフェクト
************************************************************************/

const typewriterWithDelay = (param) => {
    setTimeout(() => {
        const el = document.querySelector(param.el);
        const speed = param.speed;
        const string = param.string.split("");
        let index = 0;

        const typeNextChar = () => {
            if (index < string.length) {
                el.textContent += string[index];
                index++;
                setTimeout(typeNextChar, speed);
            }
        };

        typeNextChar();
    }, 500); // 0.5秒の遅延
};

typewriterWithDelay({
    el: "#typewriter",
    string: "Where creative vision and digital innovation unite.",
    speed: 120
});

/************************************************************************
動画再生
************************************************************************/

const movieElement = document.querySelector('.movie');
const movieVideoElement = document.querySelector('.movie-video');

// 10秒後に.movie-videoを表示して再生する
setTimeout(() => {
    // PNG画像を非表示にする
    movieElement.style.background = 'none';
    
    // .movie-videoを表示して再生
    movieVideoElement.style.display = 'block';
    movieVideoElement.play();
}, 10000); // 10秒後 (10000ミリ秒)

