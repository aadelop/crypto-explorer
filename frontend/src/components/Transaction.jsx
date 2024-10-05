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
                    <Link to={`/block/${data.blockNumber}`} ><td>{data.blockNumber}</td></Link>
                    
                </tr>
                <tr>
                    <th>From</th>
                    <Link to={`/balance/${data.from}`}><td>{data.from}</td></Link>
                </tr>
                <tr>
                    <th>To</th>
                    <Link to={`/balance/${data.to}`}><td>{data.to}</td></Link>
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