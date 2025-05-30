import data from "./data";

function Gnb() {

	const { gnb }=data;

  return (
	<nav id="gnb">
		<ul>
			{gnb.map((d,i) => (
			<li key={i+1}>
				<a href="">{d.depth1}</a>
				<ul className="sub">
					{d.depth2.map((d1,j) => (
						<li key={j+1}>
							<a href="">{d1}</a>
						</li>
					))}
				</ul>
			</li>
			))}
		</ul>
	</nav>
	);
}

export default Gnb;