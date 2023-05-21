import { useCallback, useContext } from "react";
import { mainContext } from "../context";

export default function useMainPage() {
    const { state, setState } = useContext(mainContext)
    const updateState = (newState) => setState({ ...state, ...newState })
    const setIteration = useCallback((newState) => updateState({ iteration: newState }), [updateState])
    const setHasFocus = useCallback((newState) => updateState({ hasFocus: newState }), [updateState])
    return {
        iteration: state.iteration,
        hasFocus: state.hasFocus,

        setIteration,
        setHasFocus
    }
}