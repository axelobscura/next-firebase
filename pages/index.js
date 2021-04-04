import Link from 'next/link'
import Contenedor from '../components/Contenedor';
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <Contenedor>
      <main className="entrada">
        <h1 className="title">EVALUACIÓN ESTRUCTURAL</h1>
        <Link href="evaluacion-estructural">
          <Button variant="dark">REALIZAR EVALUACIÓN</Button>
        </Link>
      </main>
    </Contenedor>
  )
}
