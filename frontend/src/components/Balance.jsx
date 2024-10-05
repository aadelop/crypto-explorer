import { useParams } from "react-router-dom"
import {useQuery} from 'react-query'
import { getBalance } from "./api";

export function Balance (){
    const params = useParams()
    const {isLoading, isError, data} = useQuery(['balance',params.address], getBalance)
    
    if(isLoading)
        return <h3>Cargando...</h3>
    if(isError)
        return <h3>Error</h3>

    return <div className="container">
        <h4>Address [{params.address.slice(0,5)}...{params.address.slice(-5)}]  info:</h4>
        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}