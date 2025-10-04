import { useNavigate } from "react-router"
import styles from "./header.module.css"
import {ROUTES} from "../../AppRoutes"
export const Header = ({scrollToFooter}) => {
    const navigate = useNavigate()
    return (<>
        <header>
        <div class={`container ${styles['header-container']}`}>
            <div class={styles.logo}>
                <i class="fas fa-home"></i>Свободно<span>Черногорск</span>
            </div>
            <nav>
                <ul>
                    <li onClick={()=>{navigate(ROUTES.HOME)}}>Главная</li>
                    <li onClick={() => {navigate(ROUTES.DOCUMENT)}}>Документы</li>
                    <li onClick={scrollToFooter}>Контакты</li>
                </ul>
            </nav>
        </div>
    </header>
    </>)
}