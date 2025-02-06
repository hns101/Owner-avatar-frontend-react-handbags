import './App.css'
import ButtonCompoment from "./compoments/button/ButtonCompoment.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Product from "./compoments/product/Product.jsx";

function App() {
  return (<>
      <h1>Handbags & Purses</h1>
      <nav>
        <ButtonCompoment title="to the collection" disableButton={false}  />
        <ButtonCompoment title="shop all bags" disableButton={false}  />
        <ButtonCompoment title="pre-orders" disableButton={true}  />
      </nav>
      <main>
          <Product name="The Handy bag" price={400} img={bag1}
                   bestSeller={true} newCollection={false}/>
          <Product name="The stylish bag" price={250} img={bag2}
                   bestSeller={false} newCollection={false}/>
          <Product name="The simple bag" price={300} img={bag3}
                   bestSeller={false} newCollection={true}/>
          <Product name="The trendy bag" price={150} img={bag4}
                   bestSeller={false} newCollection={false}/>
      </main>
  </>)
}

export default App
