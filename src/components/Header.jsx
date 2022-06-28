import { faBed, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/header.scss";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list ">
          <div className="header__list__item ">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="header__list__item active">
            <FontAwesomeIcon icon={faPlane} />
            <span>flight</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>car rentals</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>attractions</span>
          </div>
        </div>
        <h2 className="header__title">A lifetime of discount? It's Genius</h2>
        <p className="header__desc">
          Get rewarded for your travels - unlock instan saving of 1-% or more
          with a free Booking App Account
        </p>
        <button className="header__btn">Signin / Register</button>
      </div>
    </div>
  );
};
