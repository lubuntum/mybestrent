import { useNavigate } from "react-router";
import {Apartment} from "../../../types/apartment"
import styles from "./card.module.css"
import { ROUTES } from "../../../AppRoutes";
interface ApartmentCardProps {
    apartment: Apartment;
}
//<p className={styles["multi-line-truncate"]}>{apartment.description}</p>
export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
    const navigate = useNavigate()
    return (
        <div onClick = {() => {navigate(ROUTES.APARTAMENT, {state: apartment})}} className={styles["room-card"]}>
            <div className={styles["room-image-container"]}>
                <img src = {apartment.imageTitlePath} alt = {apartment.address}/>
            </div>
            <div className={styles["room-details"]}>
                <h3>{apartment.address}</h3>
                <div className={styles["room-price"]}>₽{apartment.price.toLocaleString()}</div>

                <div className={styles["room-features"]}>
                    {apartment.features.map((feature, index) => (
                        <span key={index} className={styles["room-feature"]}>
                            {feature}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};