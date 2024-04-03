


let mainSwiper = new Swiper(".mainSwiper", {
    effect: "cards",
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


//-----------------------scrollText  시작-----------------------

const $scrollText = document.querySelector('.scrollText')
const $wideScrollText = document.querySelector('.wideScrollText');

let Scrollwidth = $wideScrollText.clientWidth;//전체 길이

let count = 0;
function marqueeText(count, element, direction) {
    if (count > element.clientWidth / 2) {    //첫번째 스크롤텍스트가 다 지나면, 위치 원상복구
        element.style.transform = 'translateX(0)';
        count = 0;
    }

    element.style.transform = `translateX( ${count * direction}px )`
    return count;

}

function animate() {
    count++;
    count = marqueeText(count, $wideScrollText, -1);

    window.requestAnimationFrame(animate)//에니메이션을 지속적으로 업데이트. 
    //재페인팅 되면서 계속 위치가 바뀌는듯


}

//스크롤하면 더 빨리 넘어감
window.addEventListener('scroll', () => {
    count += 5;
})

animate();

//-----------------------scrollText  끝-----------------------


//-----------------------testimonial  시작-----------------------
// .page01 누르면 slideCard1:first 2:middle 3:last
// .page02 누르면 slideCard2:first 3:middle 1:last
// .page03 누르면 slideCard3:first 1:middle 2:last

// 눌린 page00: first 추가 
// 눌린 것의 previousElementSibling : last 추가
// 눌린 것의 nextElementSibling : middle 추가
const slideCards = document.querySelectorAll('.slideCard');
const slideCard01 = document.querySelector('.slideCard:nth-of-type(1)');
const slideCard02 = document.querySelector('.slideCard:nth-of-type(2)');
const slideCard03 = document.querySelector('.slideCard:nth-of-type(3)');
// console.log(slideCards[0]);
// slideCards.forEach((element) => {
//     console.log(element.nextElementSibling.nextElementSibling);
// });
const pageBtn = document.querySelectorAll('.page>span')
const pageBtn01 = document.querySelector('.page01');
const pageBtn02 = document.querySelector('.page02');
const pageBtn03 = document.querySelector('.page03');

let willFirst;

pageBtn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        slideCards.forEach(card => {
            card.classList.remove('first', 'middle', 'last');
        });
        // console.log(e.target);
        if (e.target === pageBtn01) { willFirst = slideCard01 }
        else if (e.target === pageBtn02) { willFirst = slideCard02 }
        else if (e.target === pageBtn03) { willFirst = slideCard03 }
        // console.log(willFirst);
        willFirst.classList.add('first');

        if (willFirst.nextElementSibling) {
            willFirst.nextElementSibling.classList.add('middle');
        }
        else {
            willFirst.previousElementSibling.previousElementSibling.classList.add('middle');
        }

        if (willFirst.previousElementSibling) {
            willFirst.previousElementSibling.classList.add('last');
        }
        else {
            willFirst.nextElementSibling.nextElementSibling.classList.add('last');
        }
    });
});



//-----------------------testimonial  끝-----------------------
