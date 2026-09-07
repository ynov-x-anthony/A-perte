import CarCard from './components/CarCard'
import peugeot208 from './assets/peugeot-208.jpg'
import renaultClio from './assets/renault-clio.jpg'
import teslaModel3 from './assets/tesla-model3.png'
import './App.css'

function App() {
  return (
    <div className="cartes">
      <CarCard marque="Peugeot" modele="208" annee={2021} prix={14900} options={['Climatisation', 'GPS', 'Bluetooth']} image={peugeot208} />
      <CarCard marque="Renault" modele="Clio" annee={2019} prix={11500} options={['Climatisation', 'Régulateur']} image={renaultClio} />
      <CarCard marque="Tesla" modele="Model 3" annee={2023} prix={35000} options={['Autopilote', 'Écran tactile']} image={teslaModel3} />
    </div>
  )
}

export default App
