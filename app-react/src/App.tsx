import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header
        nom="A Perte"
        slogan="Le concessionnaire qui casse les prix"
        liens={['Voitures', 'Services', 'Contact']}
      />
      <main>
        <section id="voitures">
          <h2>Nos voitures</h2>
        </section>
        <section id="services">
          <h2>Nos services</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
      <footer>© 2026 A Perte - Lyon</footer>
    </>
  )
}

export default App
