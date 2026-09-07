import { useState } from 'react'

type Voiture = {
  id: number
  marque: string
  modele: string
  annee: number
  prix: number
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
    <div>
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
      <ul>
        {voituresFiltrees.map((v) => (
          <li key={v.id}>
            <strong>
              {v.marque} {v.modele}
            </strong>
            <span>{v.annee}</span>
            <span>{v.prix} €</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CarList
