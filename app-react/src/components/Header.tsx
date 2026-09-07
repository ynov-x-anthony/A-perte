import { useState } from 'react'

type HeaderProps = {
  nom: string
  slogan: string
  liens: string[]
}

function Header({ nom, slogan, liens }: HeaderProps) {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <header>
      <div>
        <h1>{nom}</h1>
        <p>{slogan}</p>
      </div>
      <button onClick={() => setMenuOuvert(!menuOuvert)}>
        {menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
      </button>
      {menuOuvert && (
        <nav>
          {liens.map((lien) => (
            <a key={lien} href={'#' + lien.toLowerCase()}>
              {lien}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
