import {createContext, useState } from "react"
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from '../../helpers'

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    
    const cotizarSeguro = () => {
        
        let resultado = 2000

        const diferenciaYears = obtenerDiferenciaYear(datos.year)

        // Hay que restar 3% por cada año
        resultado -= ((diferenciaYears * 3) * resultado) /100


        // Basico 20%
        // Completo 50%
        resultado *= calcularMarca(datos.marca);
        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcularPlan(datos.plan);
        resultado = formatearDinero(resultado);

        setCargando(true);
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 1500);
    }


    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        });
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext