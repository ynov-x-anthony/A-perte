import { useState } from 'react'
import CarCard from './CarCard'

type Voiture = {
  id: number
  marque: string
  modele: string
  annee: number
  prix: number
  options: string[]
  image: string
}

type CarListProps = {
  voitures: Voiture[]
}

function CarList({ voitures }: CarListProps) {
  const [marque, setMarque] = useState('Toutes')

  const marques = ['Toutes', ...new Set(voitures.map((v) => v.marque))]
  const voituresFiltrees =
    marque === 'Toutes' ? voitures : voitures.filter((v) => v.marque === marque)

  return (
    <div className="car-list">
      <label>
        Marque :
        <select value={marque} onChange={(e) => setMarque(e.target.value)}>
          {marques.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <p>{voituresFiltrees.length} voiture(s)</p>
      <div className="cartes">
        {voituresFiltrees.map((v) => (
          <CarCard
            key={v.id}
            marque={v.marque}
            modele={v.modele}
            annee={v.annee}
            prix={v.prix}
            options={v.options}
            image={v.image}
          />
        ))}
      </div>
    </div>
  )
}

export default CarList
