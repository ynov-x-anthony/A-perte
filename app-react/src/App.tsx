import Header from './components/Header'
import CarList from './components/CarList'
import Services from './components/Services'
import Contact from './components/Contact'
import peugeot208 from './assets/peugeot-208.jpg'
import renaultClio from './assets/renault-clio.jpg'
import teslaModel3 from './assets/tesla-model3.png'

const voitures = [
  { id: 1, marque: 'Peugeot', modele: '208', annee: 2021, prix: 14900, options: ['Climatisation', 'GPS', 'Bluetooth'], image: peugeot208 },
  { id: 2, marque: 'Renault', modele: 'Clio', annee: 2019, prix: 11500, options: ['Climatisation', 'Régulateur'], image: renaultClio },
  { id: 3, marque: 'Tesla', modele: 'Model 3', annee: 2023, prix: 35000, options: ['Autopilote', 'Écran tactile'], image: teslaModel3 },
]

const services = [
  { id: 1, nom: 'Révision', description: 'Contrôle complet du véhicule et vidange.', prix: 149 },
  { id: 2, nom: 'Pneus', description: 'Montage et équilibrage de vos pneus.', prix: 60 },
  { id: 3, nom: 'Carrosserie', description: 'Réparation des rayures et des bosses.', prix: 200 },
  { id: 4, nom: 'Financement', description: "Crédit auto et location avec option d'achat.", prix: 0 },
]

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
          <CarList voitures={voitures} />
        </section>
        <section id="services">
          <h2>Nos services</h2>
          <Services services={services} />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <Contact
            garage="A Perte"
            telephone="04 00 00 00 00"
            horaires={['Lundi - Vendredi : 9h - 18h', 'Samedi : 10h - 17h', 'Dimanche : fermé']}
          />
        </section>
      </main>
      <footer>2026 A Perte - Lyon</footer>
    </>
  )
}

export default App
