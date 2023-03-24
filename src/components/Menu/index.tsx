import { Link } from 'react-router-dom'

export function Menu() {
  return  <header className="p-3 text-bg-dark">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mr-4 mb-lg-0 text-white text-decoration-none">
        |M|
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 text-secondary">Inicio</Link></li>
        <li><Link to="/planos" className="nav-link px-2 text-secondary">Planos</Link></li>
        <li><Link to="/sobre" className="nav-link px-2 text-secondary">Sobre</Link></li>
      </ul>
    </div>
  </div>
</header>
}