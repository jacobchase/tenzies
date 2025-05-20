import { useState } from "react"
import Die from "/src/components/Die"
import { nanoid } from "nanoid"

export default function App() {
    
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {return die.isHeld===true ? die : {...die,value:Math.ceil(Math.random() * 6)}}))
    }

    function holdDice(id){
      setDice(prevDice => (prevDice.map(
        item => {return item.id === id ? {...item, isHeld: !item.isHeld}: item}
      )))
    }

    const diceElements = dice.map(dieObj => <Die key={dieObj.id} number={dieObj.value} isHeld={dieObj.isHeld} roll={holdDice} id={dieObj.id}/>)

    return (
        <main>
          <h1 className="title">Tenzies</h1>
          <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="container">
                {diceElements}
            </div>
            <button className="Submit" onClick={rollDice}>Roll</button>
        </main>
    )
}