import { useNavigate } from "react-router"
import styles from "./header.module.css"
import { Button } from "../ui/button/Button"
import {ROUTES} from "../../AppRoutes"
export const Header = () => {
    const navigate = useNavigate()
    return (<>
        <header>
        <div class={`container ${styles['header-container']}`}>
            <div class={styles.logo}>
                <i class="fas fa-home"></i> Doe<span>Rent</span>
            </div>
            <nav>
                <ul>
                    <li onClick={()=>{navigate(ROUTES.HOME)}}>Главная</li>
                    <li onClick={() => {navigate(ROUTES.ABOUT)}}>О нас</li>
                </ul>
            </nav>
        </div>
    </header>
    </>)
}