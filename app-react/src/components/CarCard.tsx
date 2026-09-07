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
    <div className={favori ? 'car-card favori' : 'car-card'}>
      <h3>
        {marque} {modele}
      </h3>
      <img className="car-image" src={image} alt={`${marque} ${modele}`} />
      <p>Année : {annee}</p>
      <p className="prix">{prix} €</p>
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
