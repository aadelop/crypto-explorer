import {Outlet} from 'react-router-dom'


export function Home (){
    return <div>
        <h1>Crypto explorer application</h1>
        <Outlet/>
    </div>
}