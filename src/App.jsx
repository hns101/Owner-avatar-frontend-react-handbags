import './App.css'
import ButtonCompoment from "./compoments/button/ButtonCompoment.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Product from "./compoments/product/Product.jsx";
import brandphoto from "./assets/brand.png"
import ourstortyphoto from "./assets/our_story.png"
import Tile from "./compoments/Tile/Tile.jsx";

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
      <footer>
          <Tile title={"THE BRAND"}
                text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci animi\n" +
                    "                  assumenda beatae debitis deserunt eaque earum eligendi, eos esse fuga magnam mollitia nam,\n" +
                    "                  officiis pariatur porro possimus quae quis quisquam quod recusandae temporibus vel voluptas\n" +
                    "                  voluptatibus!\n" +
                    "                  Adipisci aut distinctio dolore error ex id reprehenderit sed sequi ullam voluptates."} />
          <Tile img={brandphoto} alt={"THE BRAND"} />
          <Tile img={ourstortyphoto} alt={"Our Story"} />
          <Tile title={"OUR STORY"}
                text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci animi\n" +
                    "                  assumenda beatae debitis deserunt eaque earum eligendi, eos esse fuga magnam mollitia nam,\n" +
                    "                  officiis pariatur porro possimus quae quis quisquam quod recusandae temporibus vel voluptas\n" +
                    "                  voluptatibus!\n" +
                    "                  Adipisci aut distinctio dolore error ex id reprehenderit sed sequi ullam voluptates."} />

      </footer>
  </>)
}

export default App
