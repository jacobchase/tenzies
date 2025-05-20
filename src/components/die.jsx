export default function Die(props){
    return(
        <>
        <button className="tenzies" onClick={()=>props.roll(props.id)}style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}>{props.number}</button>
        </>
    )
}