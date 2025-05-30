import Header from './component/Header';
import Slider from './component/Slider';
import Office from './component/Office';
import Info from './component/Info';
import Interior from './component/Interior';
import Residential from './component/Residential';
import Footer from './component/Footer';
import './css/style.css';
import UIscript from './component/UIscript';



function App() {

  return (
	<>
	<div className="container">
		<div className="start">
			<UIscript />
			< Header />
			< Slider />
		</div>
			< Office />
			< Info />
			< Interior />
			< Residential />
	</div>
			< Footer />
	</>
  );
}

export default App;
