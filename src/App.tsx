import { useState } from 'react'
import './App.css'

function App() {
  const [menuVisivel, setMenuVisivel] = useState(false)

  return (
    <div className="app">
      {/* HERO - IMAGEM PRINCIPAL */}
      <section className="hero">
        <div className="hero-content">
          <h1>The Grill House</h1>
          <p className="tagline">Onde o fogo encontra a perfeição.</p>
          <p className="subtagline">Prepare-se para uma experiência inesquecível.</p>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section">
        <h2>O Menu</h2>
        <p className="menu-descricao">
          Pratos cuidadosamente preparados para surpreender seu paladar. 
          Do início ao fim, uma jornada de sabores.
        </p>

        <h3 className="categoria">Carnes & Churrascos</h3>

        <div className="pratos-container">
          <div className="prato-card">
            <div className="prato-header">
              <h4>Picanha na Brasa</h4>
              <span className="badge">Mais Pedido</span>
            </div>
            <p className="descricao">
              Picanha premium grelhada na brasa, servida com arroz, feijão e farofa (600g)
            </p>
            <span className="preco">12 500 Kz</span>
          </div>

          <div className="prato-card">
            <div className="prato-header">
              <h4>Filé Mignon ao Molho Madeira</h4>
              <span className="badge">Mais Pedido</span>
            </div>
            <p className="descricao">
              Filé mignon grelhado com molho madeira, purê de batata trufado (300g)
            </p>
            <span className="preco">14 500 Kz</span>
          </div>

          <div className="prato-card">
            <h4>Ribeye Angus</h4>
            <p className="descricao">
              Corte ribeye Angus grelhado, marmorizado, com legumes grelhados (400g)
            </p>
            <span className="preco">16 800 Kz</span>
          </div>

          <div className="prato-card">
            <h4>T-Bone</h4>
            <p className="descricao">
              Imponente T-Bone grelhado na brasa, com batatas rústicas (800g)
            </p>
            <span className="preco">18 900 Kz</span>
          </div>

          <div className="prato-card">
            <h4>Costela de Cordeiro</h4>
            <p className="descricao">
              Costela de cordeiro assada lentamente com ervas provençais (400g)
            </p>
            <span className="preco">13 200 Kz</span>
          </div>

          <div className="prato-card">
            <h4>Fraldinha na Mostarda</h4>
            <p className="descricao">
              Fraldinha grelhada com crosta de mostarda dijon e mel (500g)
            </p>
            <span className="preco">11 800 Kz</span>
          </div>
        </div>

        <div className="cta">
          <p>Gostou do que viu? Faça seu pedido agora mesmo!</p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos-section">
        <h2>O Que Dizem Os Clientes</h2>
        <p className="depoimentos-sub">
          Experiências reais de quem já viveu a magia do The Grill House
        </p>

        <div className="depoimentos-grid">
          <div className="depoimento-card">
            <p className="texto">
              "A picanha estava impecável! O atendimento foi silencioso, preciso e caloroso. Voltarei com certeza!"
            </p>
            <div className="autor">
              <strong>Maria Santos</strong>
              <span>15/12/2024</span>
            </div>
          </div>

          <div className="depoimento-card">
            <p className="texto">
              "Melhor lugar para um jantar romântico em Huambo. A luz do fogo muda tudo."
            </p>
            <div className="autor">
              <strong>João Pedro</strong>
              <span>28/11/2024</span>
            </div>
          </div>

          <div className="depoimento-card">
            <p className="texto">
              "Celebramos nosso aniversário aqui. Eles pensaram em cada detalhe. Experiência inesquecível!"
            </p>
            <div className="autor">
              <strong>Ana Luísa</strong>
              <span>02/12/2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTOS */}
      <section className="contactos-section">
        <h2>Encontre-nos</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Endereço</h3>
            <p>Rua Alexandre Herculano</p>
            <p>Huambo, Angola</p>
          </div>

          <div className="info-card">
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Quinta: 18h - 22h</p>
            <p>Sexta e Sábado: 18h - 23h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>

        <a 
          href="https://maps.google.com/?q=Huambo,Angola" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-maps"
        >
          Ver no Google Maps
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 The Grill House. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
            
