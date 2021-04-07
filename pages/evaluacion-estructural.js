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
        <div align="center">
          <img src="/logo_imcyc.png" alt="instituto mexicano del cemento y del concreto - evaluación estructural" title="instituto mexicano del cemento y del concreto - evaluación estructural" style={{ width: '190px', marginBottom: '20px' }} />
        </div>
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

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Información general del inmueble:</h2>
          <hr />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Nombre del inmueble: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Nombre del edificio/cuerpo/área:<br /><small>(usar un formato por cada edificio/cuerpo/área)</small></Form.Label>
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

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Uso:</h2>
          <p><small>(Anotar % de área para cada uso, debo sumar 100%)</small></p>
          <hr />

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">1.Habitacional</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Vivienda</option>
                <option>Multifamiliar</option>
                <option>Hotel</option>
                <option>Dormitorio</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">2.Oficinas/Comercio</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Oficinas</option>
                <option>Tienda</option>
                <option>Mercado</option>
                <option>Restaurante</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">3.Educativo</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Preescolar</option>
                <option>Primaria</option>
                <option>Secundaria</option>
                <option>Superior</option>
                <option>Biblioteca</option>
                <option>Museo</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">4.Salud/Social</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Hospital</option>
                <option>Clínica</option>
                <option>Asilo</option>
                <option>Estancia infantil</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">5.Reunión</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Centro social</option>
                <option>Templo religioso</option>
                <option>Gimnasio</option>
                <option>Salón baile/juego</option>
                <option>Cine/Teatro/Auditorio</option>
                <option>Estadio</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">6.Industrial</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Fábrica</option>
                <option>Taller</option>
                <option>Bodega</option>
                <option>Generac. eléctrica</option>
                <option>Combustibles</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">7.Comunicaciones y transportes</h3>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Terminal de pasajeros</option>
                <option>Terminal de carga</option>
                <option>Estacionamiento</option>
                <option>Aeropuerto/Puerto</option>
                <option>Correo/Telégrafo/Teléfono</option>
                <option>Radio/Televisión</option>
                <option>Antena y transmisora</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Procentaje: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Otro: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={2}>
              <h3 className="w-100">Ocupación</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Habitada/en uso</option>
                <option>Abandonada/desocupada</option>
                <option>Desalojada por daños</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Número de ocupantes: </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Terreno y cimentación:</h2>
          <hr />

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Topografía</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Planicie</option>
                <option>Ladera de cerro</option>
                <option>Rivera río/lago</option>
                <option>Fondo de valle</option>
                <option>Depósitos lacustres</option>
                <option>Costa</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Tipo de suelo</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Arcilla muy blanda</option>
                <option>Limos o arcillas</option>
                <option>Granular suelto</option>
                <option>Granular compacto</option>
                <option>Roca</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Suelo</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Blando</option>
                <option>Transición</option>
                <option>Firma</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Cimentación superficial</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Zapatas aisladas</option>
                <option>Zapatas corridas</option>
                <option>Cimiento de piedra</option>
                <option>Losa</option>
                <option>Cajón</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Cimentación profunda</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pilotes/pilas</option>
                <option>Otro</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Nivel freático: </Form.Label>
              <Form.Control type="text" placeholder="m" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Pendiente del terreno: </Form.Label>
              <Form.Control type="text" placeholder="%" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Distancia a río/lago/mar: </Form.Label>
              <Form.Control type="text" placeholder="m" />
            </Form.Group>
          </Form.Row>

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Características de la estructura:</h2>
          <hr />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. de niveles: </Form.Label>
              <Form.Control type="text" placeholder="n" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Año de construcción: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Área del terreno: </Form.Label>
              <Form.Control type="text" placeholder="m2" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. de sotanos: </Form.Label>
              <Form.Control type="text" placeholder="n" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Año rehabilitación: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Recarga acuíferos: </Form.Label>
              <Form.Control type="text" placeholder="m2" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="apendices"
                label="Apéndices en azotea (escaleras/elevador/cuarto azotea)"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="mezanine"
                label="Mezanine (losa intermedia que no cubre toda la planta)"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="piso"
                label="Piso a media altura (de los entrepisos tipo)"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="escalera"
                label="Escalera externa"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="semisotano"
                label="Semisótano (primer sótano a medio nivel de calle)"
              />
            </Form.Group>
          </Form.Row>

          <hr />
          <h5>Instalaciones:</h5>
          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="elevador"
                label="Elevador"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="agua"
                label="Agua potable"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="gas"
                label="Gas"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="electrica"
                label="Eléctrica"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="alcantarillado"
                label="Alcantarillado"
              />
            </Form.Group>
          </Form.Row>

          <hr />
          <h5>Dimensiones Generales:</h5>
          <hr />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>X = Frente: </Form.Label>
              <Form.Control type="text" placeholder="n" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Y = Fondo: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Altura Planta Baja: </Form.Label>
              <Form.Control type="text" placeholder="m2" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Altura entrepisos: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. de cajones de estacionamiento: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. de elevadores: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Vulnerabilidad:</h2>
          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="esquina"
                label="Esquina"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="medio"
                label="Medio"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="aislado"
                label="Aislado"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Irregularidad en planta</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Asimétrico (efectos de torsión)</option>
                <option>Aberturas en planta + 20% (área o longitud)</option>
                <option>Longitud entrantes/salientes + 20%</option>
                <option>En "L" u otra geometría irregular</option>
                <option>Cajón</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Irregularidad en elevación</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Planta baja flexible</option>
                <option>Marcos o muros no llegan a la cimentación</option>
                <option>Columnas cortas</option>
                <option>Reducción de la planta en pisos superiores</option>
                <option>Apoyos a diferente nivel</option>
                <option value="">Sistemas de entrepiso inclinados</option>
                <option value="">Grandes masas en pisos superiores</option>
                <option value="">Arreglo irregular de ventanas en fachada</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={3}>
              <h3 className="w-100">Otras fuentes de vulnerabilidad</h3>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Conexión excéntrica trabe-columna</option>
                <option>Péndulo invertido/una sola hilera de columnas</option>
                <option>Un elemento resiste más del 35% del sismo</option>
                <option>Columna débil-viga fuerte</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Edificio vecino crítico:</h2>
          <hr />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>No. de pisos: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Separación: </Form.Label>
              <Form.Control type="text" placeholder="cm" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Uso no: </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Marcos</option>
                <option>Muros</option>
                <option>Otro</option>
                <option>Sin daño</option>
                <option>Daño medio</option>
                <option>Daño severo</option>
                <option>Pisos a diferente altura</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <hr />
          <h2><span className="lnr lnr-plus-circle"></span> Sistema estructural:</h2>
          <hr />

          <h3>Material en muros</h3>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoreforzado"
                label="Concreto reforzado"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoprefabricado"
                label="Concreto prefabricado"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="tabicon"
                label="Tabicón de concreto (macizo)"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="bloque"
                label="Bloque de concreto (20x40 cm)"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoreforzado"
                label="Ladrillo de barro macizo"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoprefabricado"
                label="Tabique de arcilla hueco"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="tabicon"
                label="Paneles con capa de mortero"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="bloque"
                label="Madera"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoreforzado"
                label="Piedra"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="concretoprefabricado"
                label="Adobe"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="tabicon"
                label="Bahareque"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="bloque"
                label="Material precario"
              />
            </Form.Group>
          </Form.Row>

          <hr />
          <h3>Resfuerzo en la mampostería</h3>
          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="sinrefuerzo"
                label="Sin refuerzo"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="mamposteriaconfinada"
                label="Mampostería confinada"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="mamposteriamal"
                label="Mampostería mal confinada"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                type="switch"
                id="conrefuerzo"
                label="Con refuerzo interior"
              />
            </Form.Group>
          </Form.Row>

          <hr />
          <h3>Sección de elementos predominantes</h3>
          <hr />

          <hr />
          <Button variant="dark" type="submit" className="float-right">
            ENVIAR DATOS
          </Button>
        </Form>
      </main>
    </Contenedor>
  )
}
