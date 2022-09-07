import {useCallback, useMemo, useRef} from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constans'

const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos;

    // Congela el valor
    const yearRef = useRef(year);

    // Se pospone la renderizacion hasta existir cambios en resultado
    const [nombreMarca] = useMemo( () => MARCAS.filter( nameMarca => nameMarca.id === Number(marca)), [resultado] )
    const [nombrePlan] =  useMemo( () => PLANES.filter(namePlan => namePlan.id === Number(plan)), [resultado] )

    // Detiene el return principal si el resultado  tiene valor de 0
    if (resultado === 0) return null;

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow-sm'>
            <h2 className='text-gray-600 font-black text-3xl'>
                Resumen
            </h2>

            <p className='my-2'>
                <span className='font-bold'>Marca : {nombreMarca.nombre}</span>
            </p>

            <p className='my-2'>
                <span className='font-bold'>Plan : {nombrePlan.nombre}</span>
            </p>

            <p className='my-2'>
                <span className='font-bold'>Año : {yearRef.current}</span>
            </p>

            <p className='my-2 text-4xl'>
                <span className='font-black text-gray-600 capitalize' >Costo total : {resultado}</span>
            </p>
        </div>
    )
}

export default Resultado
