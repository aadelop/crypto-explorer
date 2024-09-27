import {Outlet} from 'react-router-dom'
import {useForm} from 'react-hook-form'

export function Home (){
    const {register, handleSubmit} = useForm()
    const submitForm = (data) => {
        console.log(data);
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