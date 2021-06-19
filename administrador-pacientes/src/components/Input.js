import React from 'react'

export const Input = ({name, type="text", title, handleChange, value }) => {
    return (
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2"
            >{ title }</label>
            <input
                type={ type }
                name= { name }
                onChange= { handleChange }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={ title }
                value = { value }
            />
        </div>
    )
}
