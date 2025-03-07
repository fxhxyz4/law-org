import HeaderImg from "../assets/img/header.jpeg";

const Header = () => {
    return (
        <header className="header" id="headerSection">
            <nav className="header__navbar navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a className="navbar__link" href="#переваги">
                            Переваги
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#інформація">
                            Інформація
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#контакти">
                            Контакти
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__container">
                <div className="header__text">
                    <h1 className="header__title">Ваш надійний адвокат!</h1>
                    <p className="header__desc">
                        Професійний адвокат із понад 10-річним досвідом. Надаю кваліфіковану юридичну допомогу у
                        цивільних, сімейних та кримінальних справах. Гарантую індивідуальний підхід, захист прав та
                        інтересів клієнтів. Звертайтеся для консультації та правової підтримки
                    </p>
                    <div className="header__btns">
                        <a className="header__btn" href="#advantagesSection">
                            Переваги
                        </a>
                        <a className="header__btn" href="https://t.me/femboyjs">
                            Зв'язатися
                        </a>
                    </div>
                </div>
                <div className="header__image">
                    <img className="header__img" src={HeaderImg} alt="Адвокат" />
                </div>
            </div>
        </header>
    );
};

export default Header;
