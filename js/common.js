


let mainSwiper = new Swiper(".mainSwiper", {
    effect: "cards",
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const allA = document.querySelectorAll('a');
allA.forEach((aaa) => {
    aaa.addEventListener('click', (event) => {
        event.preventDefault(); // 클릭 이벤트의 기본 동작을 취소
    });
})


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


//-----------------------awards  시작-----------------------
// testimonial과 같은 기능. 보완해서 작성
const awardCard = document.querySelector('.awardList>li');
const awardLists = document.querySelectorAll('.awardList>li');
const videoLists = document.querySelectorAll('.videoList>li');
// console.log(awardLists, videoLists);

let awards = [...awardLists];
let videos = [...videoLists];
// console.log(awards, videos);
let activedVideo = document.querySelector('.awards .first > video');

//*** awards[n] 누르면 ***
//모든곳 클래스 on 제거
//클릭된 awards[n] 에 클래스 on 추가
//해당 video[n] 에 클래스 first 추가
//해당 video[(n+1)%3===1]에 클래스 last추가
//해당 video[(n+2)%3===2]에 클래스 middle추가
//****


// 클릭하는 해당 영상 올라오게
awards.forEach((award, index) => {
    award.addEventListener('click', () => {
        // console.log('click~~', index);
        awards.forEach(award => {
            award.classList.remove('on');
        });
        videos.forEach(video => {
            video.classList.remove('first', 'middle', 'last');
            video.querySelector('video').pause();
            video.querySelector('video').currentTime = 0;
        });

        award.classList.add('on');

        videos[index].classList.add('first');
        videos[(index + 1) % 3].classList.add('last');
        videos[(index + 2) % 3].classList.add('middle');


        // console.log('---', activedVideo);
        return activedVideo = videos[index].querySelector('video');
    });
});



// *** 해당 영상 버튼 작동
const videoBtn = document.querySelector('.awards .videoBtn');
// console.log(activedVideo);

// 클릭하면 해당 li(.first) > video 재생 /정지
// 재생중이면 -> 정지 아이콘으로 바꿈
//정지할 때 영상 초기화

videoBtn.addEventListener('click', () => {
    // console.log('zzzz');
    if (activedVideo.paused) {
        activedVideo.play();
        videoBtn.innerHTML = `<img class='pauseBtn' src="./img/pause.svg" alt="일시정지">`
    }
    else if (!activedVideo.paused) {
        activedVideo.pause();
        videoBtn.innerHTML = ` <img class='playBtn' src="./img/PlayIcon.svg" alt="재생"> `
    }
});

videoBtn.addEventListener('mouseenter', () => {
    // console.log('zzzz');
    if (activedVideo.paused) {
        videoBtn.innerHTML = ` <img class='playBtn' src="./img/PlayIcon.svg" alt="재생"> `
        // activedVideo.play();
    }
    else if (!activedVideo.paused) {
        // activedVideo.pause();
        videoBtn.innerHTML = `<img class='pauseBtn' src="./img/pause.svg" alt="일시정지">`
    }
});



// ham 버튼
const nav = document.querySelector('nav');
const hamBtn = document.querySelector('.ham');
const liHasSub = document.querySelectorAll('.hasSub');
const gnbLi = document.querySelectorAll('.gnb>li');

/* .ham 클릭하면 nav.hamOn 보이도록*/
hamBtn.addEventListener('click', () => {
    nav.classList.toggle('hamOn');
    hamBtn.classList.toggle('hamOn');
});

/* li.hasSub 클릭하면 >.sub 보이도록 */
gnbLi.forEach((li) => {
    li.addEventListener('click', () => {
        // 모든 sub의 on 없애기
        liHasSub.forEach((li) => {
            li.querySelector('.sub').classList.remove('on');
        });
        //만약 .hasSub 인 li라면, >.sub .on추가
        if (li.classList.contains('hasSub')) {
            li.querySelector('.sub').classList.toggle('on');
            //왜 토글이 안 될까요......
        }
    });

});


// 스크롤 높이가 0이 아닐 때 goBtn 보임


// goBtn 누르면 맨 위로 이동
const gotopBtn = document.querySelector('.goBtn');
gotopBtn.addEventListener('click', (e) => {
    console.log(window.scrollY);
    console.log(e);
    window.scrollTo({
        top: '0',
    });
});