import Link from 'next/link'
import Contenedor from '../components/Contenedor';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function EvaluacionEstrutural() {

  const enviarDatos = (e) => {
    e.preventDefault();
    let fecha = e.target.fecha.value;
    console.log(fecha);
  }

  return (
    <Contenedor>
      <main className="entrada">
        <h1 className="title">FORMATO DE CAPTURA DE DATOS PARA EVALUACIÓN ESTRUCTURAL</h1>
        <hr />
        <Form onSubmit={enviarDatos} className="datos">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Fecha: </Form.Label>
              <Form.Control type="date" name="fecha" />
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
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Nombre del edificio/cuerpo/área:<br/><small>(usar un formato por cada edificio/cuerpo/área)</small></Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Coordenadas: </Form.Label>
              <Form.Control type="text" placeholder="N" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" placeholder="O" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" placeholder="MSNM" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Calle y Número: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Colonia/Barrio: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Código postal: </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Localidad (pueblo/ciudad): </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Delegación/Municipio: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Estado: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Referencias: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Persona contactada/propietario: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Cargo o función: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Teléfono: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fax: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Correo electrónico: </Form.Label>
              <Form.Control type="text" />
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
