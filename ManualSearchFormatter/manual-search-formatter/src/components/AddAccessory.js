import { useState } from 'react'
import NumberInput from './AccInputBoxes/NumberInput'
import EngravingInput from './AccInputBoxes/EngravingInput'

const AddAccessory = ({ onAddAcc, engr }) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Radiant Destroyer Ring")
  const [type, setType] = useState('ring')
  const [grade, setGrade] = useState("5")
  const [tradesLeft, setTradesLeft] = useState(2)
  const [engr1, setEngr1] = useState("Adrenaline")
  const [engr1Val, setEngr1Val] = useState(0)
  const [engr2, setEngr2] = useState("Adrenaline")
  const [engr2Val, setEngr2Val] = useState(0)
  const [statType1, setStatType1] = useState("swiftness")
  const [statVal1, setStatVal1] = useState(0)
  const [statType2, setStatType2] = useState("swiftness")
  const [statVal2, setStatVal2] = useState(0)
  const [malusType, setMalusType] = useState("atk-spd-red")
  const [malusVal, setMalusVal] = useState(0)
  const [quality, setQuality] = useState(0)
  const [price, setPrice] = useState(0)
  const [buyPrice, setBuyPrice] = useState(0)
  const [auctionPrice, setAuctionPrice] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()

    // Prevent invalid code input here? &&&&&&&&&&&&&&
    if (false) {
      console.log("Input is empty")
      return
    }

    setCount(count + 1)
    onAddAcc(
      {
        "type": type,
        "isFixed": false,
        "name": name,
        "id": count.toString(),
        "grade": Number(grade),
        "tradeLeft": Number(tradesLeft),
        "effects": [
          [engr1, Number(engr1Val)],
          [engr2, Number(engr2Val)],
          [malusType, Number(malusVal)],
          [statType1, Number(statVal1)],
          [statType2, Number(statVal2)]
        ],
        "quality": Number(quality),
        "price": Number(buyPrice),
        "buyPrice": Number(buyPrice),
        "auctionPrice": Number(auctionPrice)
      }
    )
  }

  return (
    <div>
      <p>Add Accessory</p>

      <form onSubmit={onSubmit}>

        <p>
          <label>Name</label><br></br>
          <select onChange={(e) => setName(e.target.value)}>
            <option value="Radiant Destroyer Ring">Radiant Destroyer Ring</option>
            <option value="Radiant Inquirer Ring">Radiant Inquirer Ring</option>
            <option value="Radiant Destroyer Earring">Radiant Destroyer Earring</option>
            <option value="Radiant Inquirer Earring">Radiant Inquirer Earring</option>
            <option value="Radiant Inquirer Necklace">Radiant Inquirer Necklace</option>

            <option value="Wailing Chaos Ring">Wailing Chaos Ring</option>
            <option value="Wailing Aeon Ring">Wailing Aeon Ring</option>
            <option value="Wailing Chaos Earring">Wailing Chaos Earring</option>
            <option value="Wailing Aeon Earring">Wailing Aeon Earring</option>
            <option value="Wailing Chaos Necklace">Wailing Chaos Necklace</option>

            <option value="Corrupted Time Ring">Corrupted Time Ring</option>
            <option value="Corrupted Space Ring">Corrupted Space Ring</option>
            <option value="Corrupted Time Earring">Corrupted Time Earring</option>
            <option value="Corrupted Space Earring">Corrupted Space Earring</option>            
            <option value="Corrupted Time Necklace">Corrupted Time Necklace</option>
          </select>
        </p>

        <p>
          <label>Accessory Type</label><br></br>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="ring">Ring</option>
            <option value="earring">Earring</option>
            <option value="necklace">Necklace</option>
          </select>
        </p>

        <p>
          <label>Grade</label><br></br>
          <select onChange={(e) => setGrade(e.target.value)}>
            <option value="5">Relic</option>
            <option value="4">Legendary</option>
          </select>
        </p>

        <NumberInput text="Trades Left"
          updateFn={setTradesLeft} val={tradesLeft} />

        <EngravingInput text="Engraving 1" typeUpdateFn1={setEngr1}
          valUpdateFn2={setEngr1Val} val2={engr1Val} engrs={engr} />

        <EngravingInput text="Engraving 2" typeUpdateFn1={setEngr2}
          valUpdateFn2={setEngr2Val} val2={engr2Val} engrs={engr} />

        <p>
          <label>Malus 1</label><br></br>
          <select onChange={(e) => setMalusType(e.target.value)}>
            <option value="atk-spd-red">Attack Speed Reduction</option>
            <option value="move-spd-red">Move Speed Reduction</option>
            <option value="atk-pow-red">Attack Power Reduction</option>
            <option value="def-red">Defense Reduction</option>
          </select>
          <input type='number' value={malusVal}
            onChange={(e) => setMalusVal(e.target.value)}></input>
        </p>

        <p>
          <label>Stat 1</label><br></br>
          <select onChange={(e) => setStatType1(e.target.value)}>
            <option value="swiftness">Swiftness</option>
            <option value="specialization">Specialization</option>
            <option value="crit">Crit</option>
            <option value="domination">Domination</option>
            <option value="endurance">Endurance</option>
            <option value="expertise">Expertise</option>
          </select>
          <input type='number' value={statVal1} onChange={(e) => setStatVal1(e.target.value)}></input>
        </p>

        <p>
          <label>Stat 2</label><br></br>
          <select onChange={(e) => setStatType2(e.target.value)}>
            <option value="swiftness">Swiftness</option>
            <option value="specialization">Specialization</option>
            <option value="crit">Crit</option>
            <option value="domination">Domination</option>
            <option value="endurance">Endurance</option>
            <option value="expertise">Expertise</option>
          </select>
          <input type='number' value={statVal2} onChange={(e) => setStatVal2(e.target.value)}></input>
        </p>

        <NumberInput text="Quality"
          updateFn={setQuality} val={quality} />

        <NumberInput text="Bid Price"
          updateFn={setAuctionPrice} val={auctionPrice} />

        <NumberInput text="Buy Price"
          updateFn={setBuyPrice} val={buyPrice} />

        <p>
          <input type='submit' value='Add Accessory' />
        </p>

      </form>
    </div>
  )
}

export default AddAccessory   