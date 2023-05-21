import { MainContextProvider } from "./context";

export default function MainPage() {

    return (<MainContextProvider>
        <div className='app-container'>
            <header className='header'>
                Cómo parar una llamada recursiva a una api
            </header>
            <div className='introduction-container'>La duda surge en la siguiente situación: Realizamos una llamada a una api para ver el estado de una búsqueda. Si aún no ha finalizado a los X segundos se tiene que volver a realizar la misma consulta pero si ya finalizó hay que pararla. aparte, si cambia de pestaña o de url, queremos parar esa llamada recursiva que por si misma no finalizaría.
            </div>
            <Buttons />
        </div>
    </MainContextProvider>)
}