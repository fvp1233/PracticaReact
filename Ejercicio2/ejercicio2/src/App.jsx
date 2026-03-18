import { useState } from 'react'
import Card from './components/Card.jsx'
import personas from './data/personas'
import './App.css'
import './components/Card.css'

function App() {


  return (
    <>
      <div className="app-container">
      <h1 className="app-titulo">Tarjetas utilizando .map</h1>
      
      <div className="cards-grid">
        {personas.map((persona) => (
          <Card 
            key={persona.id}
            nombre={persona.nombre}
            edad={persona.edad}
            profesion={persona.profesion}
            ciudad={persona.ciudad}
            email={persona.email}
            avatar={persona.avatar}
          />
        ))}
      </div>
      
      <footer className="app-footer">
        <p>Total de perfiles: {personas.length}</p>
      </footer>
    </div>
    </>
    //probando para que sirve el length
  )
}

export default App
