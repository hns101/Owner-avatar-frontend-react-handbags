

export default function ButtonCompoment ({disableButton,title}) {
    return (
        <>
        <button type="button" disabled={disableButton} onClick={() => console.log(title)}>{title}</button>
        </>
    )
}