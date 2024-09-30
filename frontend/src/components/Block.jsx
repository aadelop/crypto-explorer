import { useParams } from "react-router-dom"
import {useQuery} from 'react-query'
import {getBlock} from './api'

export function Block(){
    const params = useParams()
    const {isLoading, isError, data} = useQuery(['block',params.block], getBlock)
    
    if(isLoading)
        return <h3>Cargando...</h3>
    if(isError)
        return <h3>Error</h3>

    return <div className="container">
        <h4>Block [{params.block}]  info:</h4>
        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}