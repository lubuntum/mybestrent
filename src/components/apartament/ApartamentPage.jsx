import { useNavigate } from "react-router"

export const ApartamentPage = () => {
    const navigate = useNavigate()
    return(<>
        <p>Apartament</p>
        <button onClick={() => navigate("/")}>Go Home</button>
    </>)
}