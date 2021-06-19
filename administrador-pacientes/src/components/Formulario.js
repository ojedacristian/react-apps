import React, { useState } from 'react'
import { Input } from "./Input";
import PropTypes from 'prop-types'

export const Formulario = ({ setCitas }) => {

    const [form, setForm] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState("")

    const { mascota, dueño, fecha, hora, sintomas } = form;
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        for (let x in form) {
            console.log(x)
            if (form[x].trim() == '') {
                setError("Debe completar todos los campos");
                return
            }
        }
        form.id = Date.now()

        setError("");
        console.log(form)
        setCitas(prev => [
            ...prev,
            form
        ])
        setForm({
            mascota:'',
            dueño:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return (
        <div>
            <h2 className="text-2xl text-white py-2 text-center">CREAR CITA</h2>
            <form
                className="bg-white bg-opacity-20 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                {
                    error &&
                    <div className="bg-red-500 bg-opacity-90 rounded p-3 mb-3 text-white italic">
                        <h2>{error}</h2>
                    </div>
                }
                <Input name="mascota" value={mascota} title="Nombre de la mascota" handleChange={handleChange} />
                <Input name="dueño" value={dueño} title="Nombre del dueño" handleChange={handleChange} />
                <Input name="fecha" value={fecha} title="Fecha" handleChange={handleChange} type="date" />
                <Input name="hora" value={hora} title="Hora" handleChange={handleChange} type="time" />
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                    > Síntomas </label>
                    <textarea
                        name="sintomas"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="aca van los sintomas"
                        onChange={handleChange}
                        value={sintomas}
                    />
                </div>
                <button
                    className="w-full bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Agregar Cita
                </button>
            </form>
        </div>

    )
}

Formulario.propTypes = {
    setCitas: PropTypes.func.isRequired
}