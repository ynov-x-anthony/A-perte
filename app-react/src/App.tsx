import CarList from './components/CarList'
import './App.css'

const voitures = [
  { id: 1, marque: 'Peugeot', modele: '208', annee: 2021, prix: 14900 },
  { id: 2, marque: 'Peugeot', modele: '3008', annee: 2020, prix: 22500 },
  { id: 3, marque: 'Renault', modele: 'Clio', annee: 2019, prix: 11500 },
  { id: 4, marque: 'Renault', modele: 'Captur', annee: 2022, prix: 19900 },
  { id: 5, marque: 'Tesla', modele: 'Model 3', annee: 2023, prix: 35000 },
  { id: 6, marque: 'Toyota', modele: 'Yaris', annee: 2018, prix: 9900 },
  { id: 7, marque: 'Volkswagen', modele: 'Golf', annee: 2020, prix: 17800 },
]

function App() {
  return (
    <div className="page">
      <h2>Nos voitures</h2>
      <CarList voitures={voitures} />
    </div>
  )
}

export default App
