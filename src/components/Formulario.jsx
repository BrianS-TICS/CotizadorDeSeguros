import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constans'
import useCotizador from '../hooks/useCotizador'
import { Error } from './Error'

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError("Todos los campos son obligatorios")
            return
        }

        setError('');

        cotizarSeguro()
    }

    return (
        <>  
            {error && <Error/>}
            <form  onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label className='block mt-3 mb-3 font-bold text-gray uppercase'>
                        Marca
                    </label>
                    <select
                        className='w-full p-3 bg-white border border-gray-200' name="marca" id=""
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Selecciona marca --</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>

                    <label className='block mt-3 mb-3 font-bold text-gray uppercase' name='year'>
                        Año
                    </label>
                    <select
                        className='w-full p-3 bg-white border border-gray-200' name="year" id="year"
                        onChange={e => handleChangeDatos(e) }
                        value={datos.year}
                    >
                    <option value="">-- Selecciona año --</option>
                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>

                <label className='block mt-3 mb-3 font-bold text-gray uppercase' name="plan">
                    Elige un plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="plan">
                                {plan.nombre}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>

            </div>

            <input
                type="submit"
                className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer
                    p-3 uppercase font-bold rounded-sm    
                    '
                value="Cotizar"
            />

        </form>
        </>
    )
}

export default Formulario