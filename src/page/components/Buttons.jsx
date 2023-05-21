import { useState } from "react"
import { useSearch } from "../../utils"

export default function Buttons() {
    const { simulatorCallApi } = useSearch()
    const [iteration, setIteration] = useState(1)

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        simulatorCallApi(iteration, setIteration)
    }

    return <div className="actions-container">
        Boton para generar la primera llamada a la api:
        <button onClick={handleClick}>Comenzar llamada</button>
        {isClicked && <span>{`The api has been called ${iteration} ${iteration === 1 ? "time" : "times"}`}</span>}
    </div>
}