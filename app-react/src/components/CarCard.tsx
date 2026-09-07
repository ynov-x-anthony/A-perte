import { useState } from 'react'

type CarCardProps = {
  marque: string
  modele: string
  annee: number
  prix: number
  options: string[]
  image: string
}

function CarCard({ marque, modele, annee, prix, options, image }: CarCardProps) {
  const [favori, setFavori] = useState(false)

  return (
    <div>
      <h3>
        {marque} {modele}
      </h3>
      <img src={image} width="200" alt={`${marque} ${modele}`} />
      <p>Année : {annee}</p>
      <p>{prix} €</p>
      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <button onClick={() => setFavori(!favori)}>
        {favori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
    </div>
  )
}

export default CarCard
