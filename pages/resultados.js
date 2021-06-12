import Link from 'next/link'
import Contenedor from '../components/Contenedor';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function Resultados() {
  return(
    <Contenedor>
      <main className="entrada">
        <div align="center">
          <img src="/logo_imcyc.png" alt="instituto mexicano del cemento y del concreto - evaluación estructural" title="instituto mexicano del cemento y del concreto - evaluación estructural" style={{ width: '190px', marginBottom: '20px' }} />
        </div>
        <h1 className="title">GRACIAS TOTALES!!</h1>
        <h3>Sus datos han sido enviados con éxito...</h3>
        <h5>En breve uno de nuestros representantes se pondrá en contacto con usted...</h5>
      </main>
    </Contenedor>
  )
}
