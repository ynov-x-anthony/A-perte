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
    <div>
      <div>
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelection(service)}
          >
            {service.nom}
          </button>
        ))}
      </div>
      {selection ? (
        <div>
          <h3>{selection.nom}</h3>
          <p>{selection.description}</p>
          <p>À partir de {selection.prix} €</p>
        </div>
      ) : (
        <p>Cliquez sur un service pour voir le détail.</p>
      )}
    </div>
  )
}

export default Services
