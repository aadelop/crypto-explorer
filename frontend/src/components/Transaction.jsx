import { useParams } from "react-router-dom";

export function Transaction(){
    const params = useParams()

    return <div className="container">
        <p>Transaction</p>
        <p>{params.tx}</p>

    </div>
}