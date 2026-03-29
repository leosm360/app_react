import type { Animal } from "../types/animal"

type Props = {
  animal: Animal
}

export function AnimalCard({ animal }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "8px" }}>
      <strong>{animal.nome}</strong>
      <div>Espécie: {animal.especie}</div>
      <div>Idade: {animal.idade} anos</div>
    </div>
  )
}