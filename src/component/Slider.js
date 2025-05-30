function Slider() {
  return (
		<div className="main">
			<div className="slider">
				<ul>
					<li><img src="/images/slider3.jpg" alt="main1" /></li>
				</ul>
			</div>
			<div className="textbox">
				<div className="inner">
					<strong>LIFETHINGS</strong>
					<p>살다죽다 할 때 <span>삶</span></p><p>이것저것 할 때 <span>것</span></p>
					<span className="link">
						삶것은 건축에 기반을 둔 디자인회사입니다.<br />의뢰인의 삶에 대한 이해를 바탕으로 건물은 물론,
						광고 캠페인, 상징 조형물, 유아용 한글 놀이블록, 청각장애인용 통역장치까지 다양한 것들을 만듭니다.
					</span>
				</div>
			</div>
		</div>

	  );
}

export default Slider;