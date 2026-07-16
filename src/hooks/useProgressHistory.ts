import {useEffect,useState} from "react";
import type {TaskCompletion} from "../components/ProgressGlass/types";
import {getProgressHistory} from "../services/progressService";


export function useProgressHistory(){

    const [history,setHistory] =
        useState<TaskCompletion[]>([]);


    useEffect(()=>{

        getProgressHistory()
            .then(setHistory);

    },[]);


    return {
        history,
        setHistory
    };
}