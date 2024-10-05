import { useParams, Link } from "react-router-dom"
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
        <table>
            <thead>
                <tr>
                    <th>Transactions list</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.transactions.map((item,index) =>(
                        <tr key={index}>
                            <td><Link to={`/tx/${item}`}>{item}</Link></td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}