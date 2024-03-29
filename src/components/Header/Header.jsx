import s from './Header.module.css';
import { classNames } from 'classnames';
import logo from '../../assets/img/logo.svg';

export const Header = ({ className }) => {
    return (
        <div className={s.header}>
            <div className={classNames(s.container, className)}>
                <img className={s.header__logo} src={logo} alt="Логотип YourMeal" />

                <div className={s.header__wrapper}>
                    <h1 className={s.header__title}>
                    <span>Только самые</span>
                    <span className={s.header__red}>сочные бургеры!</span>
                    </h1>

                    <p className={s.header__appeal}>Бесплатная доставка от 599₽</p>
                </div>
            </div>
        </div>
    );
};