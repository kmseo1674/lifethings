
import data from "./data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from "react";

function Residential() {
	let {resid}=data;
	const [slidesPerView, setslidesPerView] = useState(3);


	useEffect(() => {
		const updateSlidesPerView = () => {
			const isMobile = window.innerWidth <= 920;
			setslidesPerView(isMobile ? 1: 3);
		}
		updateSlidesPerView();

		window.addEventListener("resize", updateSlidesPerView);

		return () => {
			window.removeEventListener("resize", updateSlidesPerView);
		};

	}, []);

	
  return (
	<div id="residential">
	
		<div className="title"><h3>주거</h3><span>residential</span></div>
	
	<div className="bottom">
		<div className="wrapper">
			<div className="main_slider">
				<Swiper 
				loop={true}
                slidesPerView= {slidesPerView}
                spaceBetween= {15}
				autoplay={{	delay: 3000}}
				pagination= {{clickable: true}}
				modules={[Autoplay, Pagination]}
				className="mainSwiper"
				>
					{[...resid, ...resid].map((d, i) => {
					return(
					<SwiperSlide key={i+1}>
						<img src={`/images/${d.image}`} alt={d.alt} />
						<div className="photo_text">
							<strong>{d.strong}</strong>
						</div>
					</SwiperSlide>
						)
					})}
					<div className="swiper-pagination"></div>
				</Swiper>
			</div>
		</div>
	</div>
</div>

	  );
}

export default Residential;