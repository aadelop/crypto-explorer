import { useParams } from "react-router-dom"

export function Balance (){
    const params = useParams()

    return <div className="container">
        <p>Balance</p>
       <p>{params.address}</p>

    </div>
}