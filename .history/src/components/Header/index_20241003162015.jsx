import"./header.css";
const Header = () => {
  return <header className="Header">
  
    <img className="Header__img" src="components/Assets/logo.png" alt="" />;
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
			</ul>
		</nav>

  </header>;

};

export default Header;