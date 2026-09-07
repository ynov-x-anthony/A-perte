import { useState } from 'react'

type Service = {
  id: number
  nom: string
  description: string
  prix: number
}

type ServicesProps = {
  services: Service[]
}

function Services({ services }: ServicesProps) {
  const [selection, setSelection] = useState<Service | null>(null)

  return (
    <div className="services">
      <div className="services-boutons">
        {services.map((service) => (
          <button
            key={service.id}
            className={selection?.id === service.id ? 'actif' : ''}
            onClick={() => setSelection(service)}
          >
            {service.nom}
          </button>
        ))}
      </div>
      {selection ? (
        <div className="services-detail">
          <h3>{selection.nom}</h3>
          <p>{selection.description}</p>
          <p className="prix">À partir de {selection.prix} €</p>
        </div>
      ) : (
        <p>Cliquez sur un service pour voir le détail.</p>
      )}
    </div>
  )
}

export default Services
