import styles from "./home.module.css"
import {apartments} from "../../data/apartments.ts"
import { ApartmentCard } from "../apartament/card/ApartmentCard.tsx"
import { AmenitiestCard } from "./amenitiest/AmenitiestCard.jsx"
export const HomePage = () => {
    return (
        <>
        
        <div className="container">
            <main>
                
                <AmenitiestCard/>
                 
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