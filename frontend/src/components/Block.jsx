import { useParams } from "react-router-dom"
import {useQuery} from 'react-query'

async function getBlock(block){
   const response = fetch(`http://localhost:3333/block/${block.queryKey[1]}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data
    });

    return response;
    //.then(response => response.body)
   /*  const data = await response
    const reader = data.body.getReader()
    console.log("Reader:", reader) */
   /*  return data */
}

export function Block(){
    const params = useParams()
    const {isLoading, isError, data} = useQuery(['block',params.block], getBlock)
    
    if(isLoading)
        return <h3>Cargando...</h3>
    if(isError)
        return <h3>Error</h3>

    return <div className="container">
        <p>Blocks</p>
        <pre> {JSON.stringify(data,null,4)}</pre>
    </div>
}