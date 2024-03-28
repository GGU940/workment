
let mainSwiper = new Swiper(".mainSwiper", {
    effect: "cards",
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});





// //스크롤 될 텍스트바 하나 더 추가
// const copyText = $wideScrollText.cloneNode(true);//요소 복사
// $scrollText.appendChild(copyText);
// // $scrollText.appendChild(copyText);

const $scrollText = document.querySelector('.scrollText')
const $wideScrollText = document.querySelector('.wideScrollText');


let Scrollwidth = $wideScrollText.clientWidth;
console.log(Scrollwidth);

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

    window.requestAnimationFrame(animate)//에니메이션을 지속적으로 업데이트. 재페인팅 되면서 계속 위치가 바뀌는듯
}

//스크롤하면 더 빨리 넘어감
window.addEventListener('scroll', () => {
    count += 10;
})

animate();

//hover중일때 멈추게 하고 시픔..

function isMouseover(element) {
    element.addEventListener('mouseover', () => {
        return true;
    });
    return false;
};

// do { animate(); }
// while (isMouseover($wideScrollText) == false)
