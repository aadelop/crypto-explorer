import { useParams, Link } from "react-router-dom";
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

        <h4>Transaction[ 0x{params.tx.slice(-3)}....{params.tx.slice(-5)}]  info:</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Block</th>
                    <td><Link to={`/block/${data.blockNumber}`} >{data.blockNumber}</Link></td>
                    
                </tr>
                <tr>
                    <th>From</th>
                    <td><Link to={`/balance/${data.from}`}>{data.from}</Link></td>
                </tr>
                <tr>
                    <th>To</th>
                    <td><Link to={`/balance/${data.to}`}>{data.to}</Link></td>
                </tr>
                <tr>
                    <th>Value</th>
                    <td>{data.value}</td>
                </tr>
            </thead>
        </table>
        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}