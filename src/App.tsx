type RecipeProps = {
  drinkers: number
}
function Recipe ({drinkers}: RecipeProps) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  )
}

export default function App() {
  return (
    <section>
      <h1>Spiced chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers = {2}/>
      <h2>For a garthering</h2>
      <Recipe drinkers = {4}/>
    </section>
  )
}