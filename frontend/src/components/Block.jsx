import { useParams } from "react-router-dom"

export function Block(){
    const params = useParams()

    return <div className="container">
        <p>Blocks</p>
        <p> {params.block}</p>
    </div>
}