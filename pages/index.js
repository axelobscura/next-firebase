import Link from 'next/link'
import Contenedor from '../components/Contenedor';
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <Contenedor>
      <main className="entrada">
        <div align="center">
          <img src="/logo_imcyc.png" alt="instituto mexicano del cemento y del concreto - evaluación estructural" title="instituto mexicano del cemento y del concreto - evaluación estructural" style={{ width: '190px', marginBottom: '20px' }} />
        </div>
        <h1 className="title mb-4">EVALUACIÓN ESTRUCTURAL</h1>
        <Link href="evaluacion-estructural">
          <Button variant="dark">REALIZAR EVALUACIÓN</Button>
        </Link>
      </main>
    </Contenedor>
  )
}
