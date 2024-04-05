# WORKMENT
## 포트폴리오 웹 사이트 클론 코딩
------

### 프로젝트 목표
* 시안을 기반으로 완성도 높은 html 구조문 작성
* css를 이용하여 레이아웃 구성 및 스타일링
* 미디어쿼리를 통해 반응형 디자인 구현
* 자바스크립트를 사용한 인터렉티브 요소 및 기능 추가
  

-----

🖼️ [시안 figma URL](https://www.figma.com/file/s0AGiGoGCakXrWOttoU1Wr/Agency-Portfolio-Webflow-Website-Template-(Community)?type=design&node-id=1%3A312&mode=design&t=Xf4UCeC4DcLwpGsP-1)

![디자인 시안](./img/__hompage.jpg)


-----

🖥️ [구현 deploy URL](https://ggu940.github.io/workment/)


* 전체적인 구조
    - wrap: 브라우저 사이즈. 배경 가상요소 overflow:hidden 처리
        - header : 브라우저 사이즈 (배경색 적용)
        - .mw : maxwitdth: 1400px. sideBar position 위한 position relative 적용.
            - hdWrap : sideBar 정사각형 크기에 따라 전체 높이가 결정 되도록 랩핑
                - .inner : h1 + nav 영역
                - .sideBar :  .sideBar는 position:absolute 로 배치하므로 내용적으로 중요한 inner를 먼저 배치. / max-width:100px 적용 / 브라우저 너비에 따라 .mw*1/14 크기 적용
                    - .sideWrap: .sideBar 너비에 반응하는 높이 padding-top 적용을 위한 랩핑. 항상 정사각형 유지
        - section: 브라우저 사이즈 (배경색 적용)
            - .mw 
                - .inner : 내부 컨텐츠 영역. 섹션 타이틀은 h2로 작성.
                - .sideBar : 동일
        - footer : 브라우저 사이즈 (배경색 적용)
            - .footBody.mw : 컨텐츠 영역에 따라 높이가 결정되는 영역
                - .inner:  컨텐츠영역(연락처, sns, 뉴스레터)
                - .sideBar
            - .footBottom.mw :  sideBar 정사각형 크기에 따라 높이가 결정되는 영역
                - .footBox : sideBar 정사각형 크기에 따라 footBottom 높이가 결정 되도록 랩핑.
                    - .inner : footNav,copyright 명시 영역
                    - .sideBar
            - .goTop.mw : position:fixed 적용. 버튼 위치를 sideBar와 맞추기 위해 mw 적용
