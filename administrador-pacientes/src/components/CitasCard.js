import React from 'react'

export const CitasCard = ({ cita, handleDelete }) => {
    const { mascota, dueño, fecha, hora, sintomas, id } = cita;

    return (
        <div className="bg-white rounded-xl p-4 mb-5">
            <p>
                <span className="font-bold">Mascota: </span>
                {mascota}
            </p>
            <p>
                <span className="font-bold">Dueño: </span>
                {dueño}
            </p>
            <p>
                <span className="font-bold">Fecha: </span>
                {fecha}
            </p>
            <p>
                <span className="font-bold">Hora: </span>
                {hora}
            </p>
            <p>
                <span className="font-bold">Sintomas: </span>
                {sintomas}
            </p>
            <button 
                className="bg-red-500 text-white w-full rounded p-2 shadow"
                onClick={ () => handleDelete(id) }
                >
                ELIMINAR
            </button>
        </div>
    )
}
