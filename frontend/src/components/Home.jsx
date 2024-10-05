import {useNavigate, Outlet, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react'


export function Home (){
    const {...param} = useParams()
    const [urlParam, setUrlParam] = useState();

    useEffect(() => {
        // Solo actualizamos el estado si existe el valor de la URL
        if (param) {
            setUrlParam( Object.values(param)[0]);
        }
      }, [param]);

    console.log("SHWOING PARAMS", Object.values(param)[0]);
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
        <h1 className='text-center'>Crypto explorer for Ethereum blockchain</h1>
        <form className='d-flex justify-content-center gap-1' action="" onSubmit={handleSubmit(submitForm)}>
            <input {...register("data")} size={70} defaultValue = { urlParam ? urlParam : "" } />
            <button className='btn btn-primary'>Go</button>    
        </form> 
        <div className='border my-3 p-2'>
            <Outlet/>
        </div>
        
    </div>
}