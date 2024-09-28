import {useNavigate, Outlet} from 'react-router-dom'
import {useForm} from 'react-hook-form'

export function Home (){
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const submitForm = (data) => {
        if(data.data.length == 66)  
            navigate(`tx/${data.data}`)
        if(data.data.length ==42)
            navigate(`balance/${data.data}`)
        if(/^\d+\.?\d*$/.test(data.data))
            navigate(`block/${data.data}`)
    }

    return <div className='container'>
        <h1>Crypto explorer for Ethereum blockchain</h1>
        <form action="" onSubmit={handleSubmit(submitForm)}>
            <input {...register("data")} />
            <button className='btn btn-primary'>Go</button>    
        </form> 
        <Outlet/>
    </div>
}