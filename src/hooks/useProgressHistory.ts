import {useEffect,useState} from "react";
import type {TaskCompletion} from "../shared/components/ProgressGlass/types";
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