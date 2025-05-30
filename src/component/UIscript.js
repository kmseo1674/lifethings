import gsap from 'gsap/all';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Swiper from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function UIscript(){

window.addEventListener("load", function(){

	

	let header=document.querySelectorAll("#header");
	let tab=document.querySelector(".tab");
	let gnb=document.querySelector("#gnb");
	
	let fm=document.querySelector(".fm_site");
	let body=document.querySelector("body");

	let menuList=gnb.querySelectorAll("li");

	let isMobile="";

	function deviceCheck(){
		if(window.innerWidth > 920){
			isMobile="desktop";
		}
		else{
			isMobile="mobile";
		}
	}
	
	deviceCheck();

	window.addEventListener("resize", deviceCheck);

	let resizeTimeout;
	window.addEventListener("resize", function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(deviceCheck, 200);
	});

	header.forEach(function(item, i){
		// console.log(item)
		item.addEventListener("mouseenter", function(){
			if(isMobile === "desktop"){
				item.classList.add("active");
				
			}
		});

		item.addEventListener("mouseleave", function(){
			if(isMobile === "desktop"){
				item.classList.remove("active");
				}
			});
		});


		

	menuList.forEach(function(item, i){
		let sub=item.lastElementChild;
	
		item.addEventListener("click", function(e){
			if(isMobile === "mobile"){
				e.preventDefault();

     		menuList.forEach(function(item1, j) {
                if (item1 !== item && item1.classList.contains("active")) {
                    let sub1 = item1.lastElementChild;
                    gsap.to(sub1, { height: 0, duration: 0.3, onComplete: function() {
                        sub1.removeAttribute("style");
                    }});
                    item1.classList.remove("active");
                }
            });


			item.classList.toggle("active");
			if(item.classList.contains("active")){
				gsap.fromTo(sub, {display: "block", height: 0}, {height: "auto", duration: 0.3});
			}
			else{
				gsap.to(sub, { height:0, duration: 0.3, onComplete: function(){
					sub.removeAttribute("style");

				}});
			}
			}
		});
	});

		tab.addEventListener("click", function(e){
		e.preventDefault();

		tab.classList.toggle("close");
		gnb.classList.toggle("active");
		body.classList.toggle("fixed");
	});

	fm.addEventListener("click", function(e){
		fm.classList.toggle("active");
	});

	const upbtn=document.querySelector(".arrow");
	const handleClick = (e) => {
		e.preventDefault();
			gsap.to(window, {scrollTo:0, duration: 0.4});
	}
	
	upbtn.addEventListener("click", handleClick);

	// return() => {
	// 	upbtn.removeEventListener("click", handleClick);
	// };

	

// main
	const startTl=gsap.timeline();

	startTl.from(".textbox strong", { y: 60, opacity: 0, duration: 0.6 },"a");

	startTl.from(".textbox p", { y: 60, opacity: 0, duration: 0.6, stagger: 0.2},"a+=0.4");

	startTl.from(".textbox p span", { x: 60, opacity: 0, duration: 0.6 },"a+=0.6");

	startTl.from(".textbox .link", { y: 60, opacity: 0, duration: 0.6 },"a+=0.6");

// office

	const ofTl=gsap.timeline({
			scrollTrigger: {
			trigger: "#office",
			scrub: 1,
			start: "top 20%",
			end: "bottom 100%"
		}
	});

	ofTl.from(".textbox1 ", { x: -100, opacity: 0, duration: 1 });


  

// info


	let inList=document.querySelectorAll(".wip li");

	gsap.from(inList, { y: 100, opacity: 0, duration: 1, stagger: 0.2,
		scrollTrigger: {
			trigger: ".wip",
			scrub: 1,
			start: "top center",
			end: "bottom 100%"
			
		}
	});

// interior

const inTl=gsap.timeline({
			scrollTrigger: {
			trigger: "#interior",
			scrub: 1,
			start: "top center",
			end: "bottom 100%"
		}
	});

	inTl.from(".textbox2 strong ", { y: 100, opacity: 0, duration: 1 },);
	inTl.from(".textbox2 p ", { y: 100, opacity: 0, duration: 1 }, );
	inTl.from(".textbox2 li ", { y: 100, opacity: 0, duration: 1 }, );
	inTl.from(".textbox2 a.link", { y: 100, opacity: 0, duration: 1 }, );


//residential


	// let relist=document.querySelectorAll("#residential .swiper-slide");
	// const reTl=gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: "#residential",
	// 		scrub: 1,
	// 		// markers: true,
	// 		start: "top center",
	// 		end: "bottom 90%"
			
	// 	}
	// });

	// relist.forEach(function(item, i){
	// 	// console.log(i);
	// 	if(i%2 === 1){
	// 		reTl.from(item, { y: 100, opacity:0, duration: 1 },"a");
	// 	}
	// 	else{
	// 		reTl.from(item, { y: -100, opacity:0, duration: 1 },"a+=0.2");
	// 	}
	// });

// 리사이즈 및 스와이퍼



// let listSwiper = null;

// function initSwiper() {
//     if (window.innerWidth < 920) {
		
//         if (listSwiper === null) {
	
//             listSwiper = new Swiper(".mainSwiper", {
// 				loop:true,
//                 slidesPerView: 1,
//                 spaceBetween: 15,
// 				autoplay: {
//                     delay: 3000,
//                 },
// 				pagination: {
// 					el: ".mainSwiper .swiper-pagination",
// 					clickable: true,
// 				},
// 				modules:[Autoplay,Pagination],
//             });
			
//         }
	
//     } else {
//         if (listSwiper !== null) {
//             listSwiper.destroy();
//             listSwiper = null;
//         }
//     }
// }

// // 초기화
// initSwiper();

// // 리사이즈 이벤트 리스너 추가
// window.addEventListener('resize', initSwiper);


});

return(
	<></>
);
}

export default UIscript;