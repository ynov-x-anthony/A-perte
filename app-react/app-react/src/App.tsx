import Services from './components/Services'
import './App.css'

const services = [
  { id: 1, nom: 'Révision', description: 'Contrôle complet du véhicule et vidange.', prix: 149 },
  { id: 2, nom: 'Pneus', description: 'Montage et équilibrage de vos pneus.', prix: 60 },
  { id: 3, nom: 'Carrosserie', description: 'Réparation des rayures et des bosses.', prix: 200 },
  { id: 4, nom: 'Financement', description: "Crédit auto et location avec option d'achat.", prix: 0 },
]

function App() {
  return (
    <div className="page">
      <h2>Nos services</h2>
      <Services services={services} />
    </div>
  )
}

export default App
