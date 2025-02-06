import './App.css'
import ButtonCompoment from "./compoments/button/ButtonCompoment.jsx";

function App() {
  return (<>
      <h1>Handbags & Purses</h1>
      <nav>
        <ButtonCompoment title="to the collection" disableButton={false}  />
        <ButtonCompoment title="shop all bags" disableButton={false}  />
        <ButtonCompoment title="pre-orders" disableButton={true}  />
      </nav>
    <main>

    </main>
  </>)
}

export default App
