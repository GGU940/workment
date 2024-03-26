
let mainSwiper = new Swiper(".mainSwiper", {
    effect: "cards",
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// const view = document.querySelector


// let mainSwiper;

// const initSwiper = () => {
//     //화면 크기 800 이하
//     if (window.innerWidth <= 880) {
//         mainSwiper = new Swiper(".mainSwiper"), {
//             effect: "fade", // 다른 이펙트를 적용
//             loop: true,
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false,
//             },
//         };
//     } else {
//         mainSwiper = new Swiper(".mainSwiper", {
//             effect: "cards",
//             loop: true,
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false,
//             },
//         });
//     }
// };

// // 초기화 함수 호출
// initSwiper();

// // 화면 크기 변경 시 Swiper 객체 재설정
// window.addEventListener('resize', () => {
//     if (mainSwiper) {
//         mainSwiper.destroy(); // 기존 Swiper 객체 파괴
//     }
//     initSwiper(); // Swiper 객체 다시 초기화
// });