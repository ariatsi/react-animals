// src/App.jsx
import data from './data'
import AnimalCard from './components/AnimalCard/AnimalCard'
import './App.css'

function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    alert(alertInformation);
}
function App() {
  return (
      <div className="wrapper">
          <h1>Animaux</h1>
          {data.map(animal => (
              <AnimalCard
                  key={animal.nom}
                  nom={animal.nom}
                  nomScientifique={animal.nomScientifique}
                  taille={animal.taille}
                  alimentation={animal.alimentation}
                  additional={animal.additional}
                  showAdditional={showAdditional}
              />
          ))}
      </div>
  )
}

export default App





