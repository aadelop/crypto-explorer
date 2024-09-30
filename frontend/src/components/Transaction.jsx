import { useParams } from "react-router-dom";
import {useQuery} from 'react-query'
import { getTx } from "./api";

export function Transaction(){
    const params = useParams()
    const {isLoading, isError, data} = useQuery(['tx',params.tx], getTx)
    
    if(isLoading)
        return <h3>Cargando...</h3>
    if(isError)
        return <h3>Error</h3>

    return <div className="container">
        <h4>Transaction [{params.tx}]  info:</h4>
        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}