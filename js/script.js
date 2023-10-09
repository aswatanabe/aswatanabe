/************************************************************************
ハンバーガーメニュー
************************************************************************/

window.addEventListener('load', changeBurger);
window.addEventListener('resize', changeBurger);

const burger = document.getElementById('burger');
const burgerBlur = document.querySelectorAll('.burger-blur');
const mainElements = document.querySelectorAll('main');

function changeBurger() {
    const winW = window.innerWidth;
    let deviceW = 600;

    if (winW <= deviceW) {
        // 600px以下なら
        document.querySelector('nav > div').setAttribute('id', 'burger');
        document.querySelector('nav > div > div:nth-of-type(1)').setAttribute('id', 'burger-btn');
        document.querySelector('nav > div > div:nth-of-type(2)').setAttribute('id', 'burger-menu');

        // バーガーメニューをクリック時のイベントを追加
        burger.addEventListener('click', burgerClickHandler);

        // バーガーメニューの背景をクリック時のイベントを追加
        burgerBlur.forEach(blurElement => {
            blurElement.addEventListener('click', blurClickHandler);
        });
    } else {
        // 600pxより大きいなら
        document.querySelector('nav > div').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(1)').removeAttribute('id');
        document.querySelector('nav > div > div:nth-of-type(2)').removeAttribute('id');

        // イベントリスナーを削除
        burger.removeEventListener('click', burgerClickHandler);

        burgerBlur.forEach(blurElement => {
            blurElement.removeEventListener('click', blurClickHandler);
        });
    }
}

function burgerClickHandler() {
    burger.classList.toggle('is-open');
    mainElements.forEach(main => main.classList.toggle('burger-blur'));
}

function blurClickHandler() {
    burger.classList.remove('is-open');
    mainElements.forEach(main => main.classList.remove('burger-blur'));
}

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
    string: "English. Engineering. Editing.",
    speed: 130
});

/************************************************************************
job descriptionを表示
************************************************************************/

document.addEventListener("DOMContentLoaded", function() {
    //4.5秒後に変更
    setTimeout(function() {
        var element = document.querySelector(".top main > section:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(2)");
        element.style.fontSize = "1.0em"; // 新しいフォントサイズなど、必要に応じて変更
    }, 4500);
});

/************************************************************************
動画再生
************************************************************************/

const movieVideoElement = document.querySelector('.movie-video');

movieVideoElement.pause(); // 動画停止

// 8秒後に再生
setTimeout(() => {
    movieVideoElement.play(); // 動画再生
}, 8000);

/************************************************************************
フェードイン
************************************************************************/

const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('observed:', entry.target); // 要素が監視されていることをログに出力
            entry.target.animate(
                [
                    { opacity: 0, transform: 'translateY(10em)' },
                    { opacity: 1, transform: 'translateY(0)' }
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

/************************************************************************
メールフォーム
************************************************************************/

function checkEmail(event) {
    // フォーム内のemail01とemail02の要素を取得
    const email01 = document.getElementById("email01").value;
    const email02 = document.getElementById("email02").value;

    // email01とemail02の内容を比較
    if (email01 !== email02) {
        alert("メールアドレスが一致しません。再度入力してください。");
        // フォームの送信をキャンセル
        event.preventDefault();
    }
}