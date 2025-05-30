import data from "./data";

function Info() {
	let {info} = data;


  return (
		
		<div id="info">
		
		<div className="title"><h3>소식</h3><span>info</span></div>
	
	<div className="notice">
		<div className="title1">
			<h5>Notice</h5>
			<a href="" className="more">+</a>
		</div>
		<div className="content">
		<ul> 
			{info.map((d,i) => {
				if(!d.a || !d.p){
					return null;
				}
				return(
			<li key={i+1}><a href="">{d.a}</a>
				<p>{d.p}</p>
			</li>
				);
			})}
		</ul>
		</div>
	</div>
	<div className="wip">
		<div className="title1">
			<h5>진행중 Wip</h5>
			<a href="" className="more">+</a>
		</div>
		<div className="content">
		<ul>
			{info.map((d,i)=> 
			<li key={i}>
				<a href="">
					<img src={`images/${d.image}`} alt={d.alt} />
						<strong>{d.strong}</strong>
					<p>{d.p1}</p>
				</a>
			</li>
			)}
		</ul></div>
	</div>

	</div>

	  );
}

export default Info;