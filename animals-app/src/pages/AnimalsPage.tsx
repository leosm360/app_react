import { useState } from "react"
import { animals as initialAnimals } from "../services/animals"
import { AnimalCard } from "../components/AnimalCard"
import type { Animal } from "../types/animal"

export function AnimalsPage() {
  const [animals, setAnimals] = useState<Animal[]>(initialAnimals)
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [age, setAge] = useState("")

  function addAnimal() {
    const newAnimal: Animal = {
      id: Date.now(),
      nome: name,
      especie: species,
      idade: Number(age),
    }

    setAnimals([...animals, newAnimal])

    setName("")
    setSpecies("")
    setAge("")
  }
  <h1>Lista de Animais (Feature Branch)</h1>

  return (
    <div>
      <h1>Lista de Animais</h1>

      <h2>Cadastrar Animal</h2>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Espécie"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />

      <input
        placeholder="Idade"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={addAnimal}>Adicionar</button>

      <hr />

      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  )
}