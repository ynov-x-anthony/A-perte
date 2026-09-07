import { useState, type FormEvent } from 'react'

type ContactProps = {
  garage: string
  telephone: string
  horaires: string[]
}

function Contact({ garage, telephone, horaires }: ContactProps) {
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')
  const [envoye, setEnvoye] = useState(false)

  function envoyer(e: FormEvent) {
    e.preventDefault()
    setEnvoye(true)
  }

  return (
    <div>
      <div>
        <p>Téléphone : {telephone}</p>
        <ul>
          {horaires.map((horaire) => (
            <li key={horaire}>{horaire}</li>
          ))}
        </ul>
      </div>
      {envoye ? (
        <p>
          Merci {nom}, l'équipe de {garage} vous répond très vite.
        </p>
      ) : (
        <form onSubmit={envoyer}>
          <input
            type="text"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  )
}

export default Contact
