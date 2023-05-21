

export default function useSearch() {

    const simulatorCallApi = (iteration, setIteration) => {
        if (iteration <= 10) { setTimeout(() => { console.log(`Respuesta de la api simulada nº ${iteration}`); setIteration(iteration++); simulatorCallApi(iteration++, setIteration) }, 3000) } else {
            console.log("Finalizada la iteración de llamadas")
        }
    }
    return { simulatorCallApi }
}