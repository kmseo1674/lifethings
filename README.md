## React를 활용한 GSAP 인터랙티브 스크롤 애니메이션

React, Swiper, GSAP를 기반으로 제작한 반응형 랜딩 페이지입니다.
PC 및 모바일에서 자연스럽고 부드러운 사용자 경험을 제공합니다.

<br/>

### 주요 기능
- React를 활용한 컴포넌트 기반 UI 구성
- 반응형 메뉴 (모바일/데스크탑 구분)
- 반응형 슬라이더 (Swiper 적용)
- 부드러운 스크롤 애니메이션 (GSAP)
- 커스텀 마우스 커서 및 호버 효과
- Top 버튼 기능

<br/>


### 사용 기술

| 태그 | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square) | ![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square) | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=white&style=flat-square) | ![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white&style=flat-square) |
|---|---|---|---|---|---|
| 설명 | 컴포넌트 기반 UI | 반응형 스타일 처리 | DOM 제어, Swiper & GSAP 연동 | 이미지 슬라이더 기능 | 애니메이션 및 스크롤 효과 구현 | 


<br/>

### 기능 상세 설명

### 1. 
- 데스크탑에서는 마우스 오버 시 메뉴 항목이 활성화되며, 모바일에서는 클릭 시 서브 메뉴가 토글됩니다.
- 사용자가 메뉴를 쉽게 탐색할 수 있도록 돕습니다.

 ``` JavaScript
header.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        if (isMobile === "desktop") {
            item.classList.add("active");
        }
    });

    item.addEventListener("mouseleave", function() {
        if (isMobile === "desktop") {
            item.classList.remove("active");
        }
    });
});

// 모바일 메뉴 토글
menuList.forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (isMobile === "mobile") {
            e.preventDefault();
            item.classList.toggle("active");
        }
    });
});


```

---
### 2. 부드러운 스크롤 애니메이션
- 사용자가 스크롤 버튼을 클릭하면 페이지가 부드럽게 최상단으로 스크롤됩니다.
- 사용자 경험을 향상시키기 위해 GSAP 애니메이션을 사용합니다.

 ``` JavaScript
  const upbtn = document.querySelector(".arrow");
upbtn.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: 0, duration: 0.4 });
});


```

---
### 3. 섹션별 스크롤 트리거
- 특정 섹션이 뷰포트에 들어올 때 애니메이션이 실행되어 사용자가 내용을 자연스럽게 인식할 수 있도록 돕습니다.
- ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션을 트리거합니다.

 ``` JavaScript
  const ofTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#office",
        scrub: 1,
        start: "top 20%",
        end: "bottom 100%"
    }
});
ofTl.from(".textbox1", { x: -100, opacity: 0, duration: 1 });


```

---
### 4. 탭 전환 기능 
- 탭을 클릭하면 메뉴의 상태가 변경되어 현재 어떤 메뉴에 있는지 쉽게 파악할 수 있습니다.
- 사용자가 메뉴를 쉽게 관리할 수 있도록 돕습니다.

 ``` JavaScript
tab.addEventListener("click", function(e) {
    e.preventDefault();
    tab.classList.toggle("close");
    gnb.classList.toggle("active");
});


```

---
### 5. 반응형 슬라이더
- 화면 크기에 따라 슬라이드 수를 조정하여 데스크탑(3개)과 모바일(1개)에서 최적의 사용자 경험을 제공합니다.

 ``` JavaScript
  const [slidesPerView, setslidesPerView] = useState(3);

useEffect(() => {
    const updateSlidesPerView = () => {
        const isMobile = window.innerWidth <= 920;
        setslidesPerView(isMobile ? 1 : 3);
    }
    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
        window.removeEventListener("resize", updateSlidesPerView);
    };
}, []);


```

---
### 6. Swiper 슬라이더 
- Swiper 라이브러리를 사용하여 부드러운 슬라이드 전환과 자동 재생 기능을 제공합니다.

 ``` JavaScript
  <Swiper 
    loop={true}
    slidesPerView={slidesPerView}
    spaceBetween={15}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="mainSwiper"
>
    {[...resid, ...resid].map((d, i) => {
        return (
            <SwiperSlide key={i + 1}>
                <img src={`/images/${d.image}`} alt={d.alt} />
                <div className="photo_text">
                    <strong>{d.strong}</strong>
                </div>
            </SwiperSlide>
        )
    })}
    <div className="swiper-pagination"></div>
</Swiper>


```

---

