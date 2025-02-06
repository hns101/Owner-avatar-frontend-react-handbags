
export default function Tile ({img, alt,title,text}) {
    let hideImage = false;
    let hideText = false;

    if (!title === false) {
        hideImage = true;
    } else if (!img === false) {
        hideText = true;
    }

    return (<>
        <section >
            <img hidden={hideImage} src={img} alt={alt} />
            <h2 hidden={hideText}>{title}</h2>
            <p hidden={hideText}>{text}</p>
        </section>
        </>)

}