import { useNavigate } from "react-router"
import { Header } from "../header/Header"
import { Input } from "../ui/input/Input"
import { Button } from "../ui/button/Button"
import styles from "./home.module.css"
import {apartments} from "../../data/apartments.ts"
import { ApartmentCard } from "../apartament/card/ApartmentCard.tsx"
import { Footer } from "../footer/Footer.jsx"
export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
        
        <div className="container">
            <main>
                <div className="container">
                    <section className={styles.hero}>
                        <h1>Посуточная аренда квартир в Черногорске</h1>
                        <p>Подберите удобный для вас вариант с максимально удобными условиями - местоположение, цена и многое другое</p>
                        <div className={styles["search-box"]}>
                            <Input className={"search-input"} type = "text" placeholder = "Введите улицу или цену"/>
                            <Button className={"search-btn"} children={"найти"}/>
                        </div>
                    </section>
                </div>
                <section className={styles["featured-rooms"]}>
                    <div className={styles["section-title"]}>
                        <h2>Доступные комнаты</h2>
                    </div>
                    <div className={styles["rooms-grid"]}>
                        {apartments.map(room => (
                            <ApartmentCard apartment={room} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
        
        </>
    )
}