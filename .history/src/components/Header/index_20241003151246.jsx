import"./header.css";
const Header = () => {
  return <header className="Header">
    header

    <img className="Headerlogo" src="assets/logo.png" alt="logo" />;
    <nav className=" nav" title="navigation menu">
			<ul className=" nav__list">
				<li className=" nav__item">
					<a href="#" className="  nav__link">Home</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">Episodes</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">About</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">Contact</a>
				</li>
			</ul>
		</nav>
  </header>;

};

export default Header;
