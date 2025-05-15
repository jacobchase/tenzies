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
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map(dieObj => <Die key={dieObj.id} number={dieObj.value} isHeld={dieObj.isHeld}/>)

    return (
        <main>
            <div className="container">
                {diceElements}
            </div>
            <button className="Submit" onClick={rollDice}>Roll</button>
        </main>
    )
}