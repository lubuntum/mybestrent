import styles from "./footer.module.css"
import {ReactComponent as Tg} from "../../res/icons/tg_icon.svg"
import {ReactComponent as Vk} from "../../res/icons/vk_icon.svg"
export const Footer = ({footerRef}) => {

    return (<footer>
        <div className="container" ref={footerRef}>
            <div className={styles["footer-container"]}>
                <div className={styles["footer-section"]}>
                    <h3>Аренда квартир</h3>
                    <p>Сайт помогающий вам найти лучшее</p>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Другие источники</h3>
                    <ul>
                        <li><a href="https://t.me/posutochnohakasiya">Мы в телеграмм <Tg className={styles["footer-icon"]}/> </a></li>
                        <li><a href="">Мы в ВК <Vk className={styles["footer-icon"]}/></a></li>
                        <li><a href="">Мы в WatsApp <Vk className={styles["footer-icon"]}/></a></li>
                    </ul>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Свяжитесь с нами</h3>
                    <ul>
                        <li>Email: Почта</li>
                        <li>По номеру: 8 (993) 033-83-50 Марина</li>
                        <li>По номеру: 8 (902) 014-96-00 Дмитрий</li>
                    </ul>
                </div>
            </div>

        </div>
        
    </footer>)
}