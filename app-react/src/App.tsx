import Contact from './components/Contact'

function App() {
  return (
    <div>
      <h2>Contact</h2>
      <Contact
        garage="A Perte"
        telephone="04 00 00 00 00"
        horaires={['Lundi - Vendredi : 9h - 18h', 'Samedi : 10h - 17h', 'Dimanche : fermé']}
      />
    </div>
  )
}

export default App
