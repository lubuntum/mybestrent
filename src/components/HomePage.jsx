import { useNavigate } from "react-router"

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>Hello Home</p>
            <button onClick={() => navigate("/apartament")}>Go to apartament</button>
        </>
    )
}