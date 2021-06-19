import './App.css';
import { Formulario } from './components/Formulario';
import { Citas } from './components/Citas'
import { useEffect, useState } from 'react';

const App = () => {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(data);
  }, [])

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas))
  }, [citas])

  const handleDelete = (id)=>{
    const newlist = citas.filter( cita => cita.id !== id);
    console.log("newlist", newlist)
    setCitas(newlist);
  }
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-start justify-center">
      <div className="grid grid-cols-2 gap-10">
        <h1 className="col-span-2 text-3xl text-white p-6 text-center">ADMINISTRADOR DE PACIENTES</h1>
        <Formulario setCitas={ setCitas }/>
        <Citas citas={ citas } handleDelete={ handleDelete } />
      </div>
    </div>
  );
}

export default App;

{/* <div className="grid gap-3 grid-cols-3
  md:grid-cols-2 lg:grid-cols-3
  ">
  <div className="bg-white p-3 rounded col-span-2">1</div>
  <div className="bg-white p-3 rounded">2</div>
  <div className="bg-white p-3 rounded">3</div>
  <div className="bg-white p-3 rounded col-span-2">4</div>
  <div className="bg-white p-3 rounded col-span-2">5</div>
  <div className="bg-white p-3 rounded">6</div>
  <div className="bg-white p-3 rounded col-span-3">7</div>
  <div className="bg-white p-3 rounded">8</div>
  <div className="bg-white p-3 rounded col-span-2">9</div>
</div> */}