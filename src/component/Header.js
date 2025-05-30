import Logo from "./Logo";
import Gnb from "./Gnb";

function Header() {

  return (
<header id="header">
			<div className="inner">
				< Logo />
				< Gnb />
				<div className="tab">
					<a href=""><span className="circle"><i className="hide"></i></span></a>
				</div>
			</div>
		</header>
	  );
}

export default Header;