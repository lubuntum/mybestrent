import styles from "./footer.module.css"
import {ReactComponent as Tg} from "../../res/icons/tg_icon.svg"
import {ReactComponent as Vk} from "../../res/icons/vk_icon.svg"
import {ReactComponent as Wh} from "../../res/icons/whats.svg"
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
                        <li><a href="https://vk.com/svobodnochernogorsk">Мы в ВК <Vk className={styles["footer-icon"]}/></a></li>
                        <li><a href={`https://wa.me/89930338350?text=У меня есть вопрос!`}>Мы в WatsApp <Wh className={styles["footer-icon"]}/></a></li>
                    </ul>
                </div>
                <div className={styles["footer-section"]}>
                    <h3>Свяжитесь с нами</h3>
                    <ul>
                        <li>Email: marinammmaa@mail.ru</li>
                        <li>По номеру: 89930338350 Марина</li>
                        <li>По номеру: 89020149600 Дмитрий</li>
                    </ul>
                </div>
            </div>

        </div>
        
    </footer>)
}