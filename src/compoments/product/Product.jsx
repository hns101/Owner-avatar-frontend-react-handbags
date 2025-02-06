
export default function Product({name, price, img, bestSeller, newCollection}) {
    // fill span
    let hideSpan = false
    let spanFiller = "";
    if (bestSeller === true && newCollection === true) {
       spanFiller = "Best seller";
    } else if (bestSeller === true) {
       spanFiller = "Best seller";
    } else if (newCollection === true) {
       spanFiller = "New collection";
    } else {
       hideSpan = true;
    }

    //Checking if it's an int or a Float
    let priceFiller = "";
    if (price === Math.floor(price) ) {
        priceFiller = `€${price},-`;
    }
    else {
        priceFiller = `€${price.toFixed(2)}`;
    }

    return (<>
        <article>
            <span hidden={hideSpan}>{spanFiller}</span>
            <img src={img} alt={name}/>
            <p>{name}</p>
            <h4>{priceFiller}</h4>
        </article>

    </>)
}