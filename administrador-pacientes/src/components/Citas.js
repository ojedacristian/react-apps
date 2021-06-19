import React from 'react'
import { CitasCard } from '../components/CitasCard'

export const Citas = ({ citas, handleDelete }) => {

    const titulo = citas.length === 0 ? "NO HAY CITAS" : "ADMINISTRAR CITAS";
    return (
        <div>
            <>
                <h3 className="text-2xl text-white py-2 text-center">
                    {titulo}
                </h3>
                {
                    citas.map(cita => (
                        <CitasCard 
                            cita={cita} 
                            key={ cita.id }
                            handleDelete={handleDelete} 
                        />
                    ))
                }
            </>
        </div>
    )
}
