import"./header.css";
const Header = () => {
  return <header className="Header">
  
    {/* <img className="Headerlogo" src="assets/logo.png" alt="logo" />; */}
    <a className=" header__logo" href="#">
			React Sneakers
		</a>
    <nav className=" nav" title="navigation menu">
			<ul className=" nav__list">
				<li className=" nav__item">
					<a href="#" className="  nav__link">1205 руб.</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">Закладки</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">Профиль</a>
				</li>
				<li className=" nav__item">
					<a href="#" className=" nav__link">Contact</a>
				</li>
			</ul>
		</nav>
  </header>;

};

export default Header;
