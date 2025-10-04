import { useLocation, useNavigate } from "react-router"
import {useEffect, useLayoutEffect, useState} from "react"
import { Apartment } from "../../../types/apartment"
import styles from "./apartament.module.css"
import {MapComponent} from "../location/MapComponent.tsx"
import {Location} from "../../../types/location"
import { Button } from "../../ui/button/Button.jsx"

export const ApartamentPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [apartment, setApartment] = useState<Apartment>()
    const [currentImg, setCurrentImg] = useState<string>()
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [roomLocation, setRoomLocation] = useState<Location | null>()
    useLayoutEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    useEffect(()=>{
        if (!location.state) navigate(-1)
        setApartment(location.state)
    }, [location.state, navigate])
    useEffect(() => {
        //TODO 
        //При начале в изображениях найти индекс imageTitlePath и уже работать с ним
        //ImageTitlePath только позволяет понять начальную точку затем уже индексы решают и юзер
        setCurrentImg(apartment?.imageTitlePath)
        setCurrentIndex(apartment?.imagesPath.indexOf(apartment.imageTitlePath) ?? 0)
        if (!apartment || !apartment.cordinates || apartment.cordinates.length < 2)
            setRoomLocation(null)
        else setRoomLocation({
            lat: apartment.cordinates[0],
            lng: apartment.cordinates[1],
            address: apartment.address,
            label: apartment.address
        })
    }, [apartment]);

    const handleCall = (number: String) => {
        const clearNumber = number.replace(/[^\d+]/g, '')
        if (clearNumber){
            window.location.href = `tel:${clearNumber}`
            return
        }
        console.error("Invalid phone number")
    }
    const goToNext = () => {
        if (!apartment?.imagesPath.length) return
        const index = currentIndex === apartment?.imagesPath.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(index)
        setCurrentImg(apartment.imagesPath[index])
    }
    const goToPrev = () => {
        if (!apartment?.imagesPath.length) return
        const index = currentIndex === 0 ? apartment?.imagesPath.length - 1 : currentIndex - 1
        setCurrentIndex(index)
        setCurrentImg(apartment.imagesPath[index])
    }
    const goToImage = (path:string, index:number) => {
        setCurrentIndex(index)
        setCurrentImg(path)
    }
    if (!apartment || !currentImg) return (<p>404 Not Found</p>)
    return(<>
        
        <div className={`container ${styles["wrapper"]}`}>
            <div className={styles["content"]}>
                <div className={styles["contact-info-header"]}>
                    <h2>{apartment?.price}₽ за сутки</h2>
                    <Button className={"btn-contact"} 
                        children={<div style={{display:"flex", flexDirection:"column"}}
                        onClick={() => handleCall("89930338350")}><p>Свяжитесь с нами  Марина</p> <p>8 (993) 033-83-50</p> </div>}/>
                    <Button className={"btn-contact"} 
                        children={<div style={{display:"flex", flexDirection:"column"}}
                        onClick={() => handleCall("89020149600")}><p>Свяжитесь с нами Дмитрий</p> <p>8 (902) 014-96-00</p> </div>}/>
                </div>
                <section>
                    <div className={styles["main-info-container"]}>
                        <div className="images-container">
                        <h2>{`${apartment?.type.charAt(0).toUpperCase() + apartment?.type.slice(1)} ${apartment?.square} м² в ${apartment?.totalRoom}-к., ${apartment?.floor} эт.`}</h2>
                            <div className={styles["images"]}>
                                <div className={styles["current-image"]}>
                                    <img src={`${currentImg}`} alt={apartment.address}/>
                                    <div className={styles["arrow-container-left"]} onClick={goToPrev}>
                                        <div className={styles.arrow}>‹</div>
                                    </div>
                                    <div className={styles["arrow-container-right"]} onClick={goToNext}>
                                        <div className={styles.arrow}>›</div>
                                    </div>
                                </div>
                                <div className={styles["images-list-conainer"]}>
                                    <ul className={styles["images-list"]}>
                                        {apartment.imagesPath.map((path, index) => (
                                            <li className={`${index === currentIndex ? styles.picked : ""}`} onClick={() => goToImage(path, index)}>
                                                <img src={path} alt="" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
                <div className={styles["room-info"]}>
                    <section>
                        <h3>О комнате</h3>
                        <div className={styles["about-room-container"]}>
                            <ul>
                                <li>Площадь комнаты: <span className={styles["highlight"]}> {apartment.square}м² </span> </li>
                                <li>Комнат в квартире: {apartment.totalRoom}</li>
                                <li>Расположение: {apartment.address}</li>
                                <li>Этаж: {apartment.floor}</li>
                            </ul>
                        </div>
                    
                    </section>
                    <section>
                        <h3>Дополнительно</h3>
                        <div className={styles["about-room-container"]}>
                            <ul>
                                {apartment.features.map(feature => (
                                    <li>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                    </section>

                </div>
            
                <section>
                    <h3>Расположение</h3>
                    <p>{apartment.address}</p>
                    {roomLocation && <MapComponent locations={[roomLocation]} center={[roomLocation.lat, roomLocation.lng]} />}
                </section>
                <section>
                    <h3>Описание</h3>
                    {apartment.description}
                </section>
            </div>
            

            <div className={styles["contact-info-container"]}>
                <div className={styles["contact-info"]}>
                    <h2>{apartment?.price}₽ за сутки</h2>
                    <Button className={"btn-contact"} 
                        children={<div style={{display:"flex", flexDirection:"column"}}
                        onClick={() => handleCall("89930338350")}>
                            <p>Свяжитесь с нами Марина</p> <p>8 (993) 033-83-50</p>
                            </div>}/>
                    <Button className={"btn-contact"} 
                        children={<div style={{display:"flex", flexDirection:"column"}}
                        onClick={() => handleCall("89020149600")}><p>Свяжитесь с нами Дмитрий</p> <p>8 (902) 014-96-00</p> </div>}/>

                </div>
                
            </div>
        </div>
    </>)
}