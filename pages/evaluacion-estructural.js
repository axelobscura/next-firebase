import Link from 'next/link'
import Contenedor from '../components/Contenedor';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function EvaluacionEstrutural() {
  return (
    <Contenedor>
      <main className="entrada">
        <h1 className="title">FORMATO DE CAPTURA DE DATOS PARA EVALUACIÓN ESTRUCTURAL</h1>
        <hr />
        <Form className="datos">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Fecha: </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Hora: </Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Duración visita: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Clave: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Nombre del evaluador: </Form.Label>
              <Form.Control placeholder="Ingrese el nombre completo" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Ingeniero o Arquitecto</option>
                <option>Estudiante Ing/Arq.</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <h2>Información general del inmueble:</h2>
          <hr/>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Nombre del inmueble: </Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Nombre del edificio/cuerpo/área:<br/><small>(usar un formato por cada edificio/cuerpo/área)</small></Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Coordenadas</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          
          <Button variant="dark" type="submit" className="float-right">
            ENVIAR DATOS
          </Button>
        </Form>
      </main>
    </Contenedor>
  )
}
