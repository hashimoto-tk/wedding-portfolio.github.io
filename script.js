document.addEventListener('DOMContentLoaded', function() {
    alert('このサイトは学習目的で制作した架空サイトです。実在の企業とは関係ありません。');
});

// ハンバーガーメニュー---------------------------------------------------------
const hmbBtn = document.querySelector('#hmb');
const header = document.querySelector('#header');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');

hmbBtn.addEventListener('click', () => {
    header.classList.toggle('active');
    menuPanel.classList.toggle('active');

    if (menuPanel.classList.contains('active')) {
        // メニューを順番に表示
        menuItems.forEach((menuItem, index) => {
            menuItem.animate(
                {
                    opacity: [0, 1],
                    translate: ['2rem', 0],
                },
                {
                    duration: 2400,
                    delay: 300 * index,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
        });
    } else {
        menuItems.forEach((menuItem) => {
            menuItem.animate(
                {
                    opacity: [1, 0],
                },
                {
                    duration: 1400,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
        });
    }
});

menuItems.forEach((menuItem)=>{
    menuItem.addEventListener('mouseover', () => {
        menuItem.animate(
            {
                scale: [1, 2],
            },
            {
                duration: 1400,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    });
    menuItem.addEventListener('mouseout', () => {
        menuItem.animate(
            {
                scale: [2, 1],
            },
            {
                duration: 1400,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    });
    menuItem.addEventListener('click', () => {
        header.classList.remove('active');
        menuPanel.classList.remove('active');
    });
});

// fadein---------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['0 30px', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            // 一度だけで終わる
            obs.unobserve(entry.target);
        }
    });
};
// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);
// .fadeinを監視するように指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});
