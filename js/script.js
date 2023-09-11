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
job descriptionを表示
************************************************************************/

document.addEventListener("DOMContentLoaded", function() {
    //6秒後に変更
    setTimeout(function() {
        var element = document.querySelector(".top main > section:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(2)");
        element.style.fontSize = "1.0em"; // 新しいフォントサイズなど、必要に応じて変更
    }, 6000);
});

/************************************************************************
動画再生
************************************************************************/

const movieVideoElement = document.querySelector('.movie-video');

movieVideoElement.pause(); // 動画停止

// 11秒後に再生
setTimeout(() => {
    movieVideoElement.play(); // 動画再生
}, 11000);

/************************************************************************
フェードイン
************************************************************************/

const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                [
                    { opacity: 0, filter: 'blur(.1em)', transform: 'translateY(3em)' },
                    { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }
                ],
                {
                    duration: 3000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});