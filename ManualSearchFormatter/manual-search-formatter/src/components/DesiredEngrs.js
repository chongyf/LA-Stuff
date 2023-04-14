import { useState } from "react"
import EngravingInput from "./AccInputBoxes/EngravingInput"

const DesiredEngrs = ({ engrMapping, getEngr, setEngr }) => {

  const updateEngr = (val, i) => {
    const arr = getEngr;
    arr[i] = val;
    setEngr(arr);
  }

  return (
    <div>
      Select your desired engravings
      {
        getEngr.map((engr, i) => {
          return <EngravingInput
            key={i}
            text={"Engraving " + (i+1)}
            engrs={engrMapping}
            typeUpdateFn1={(val) => updateEngr(val, i)} />
        })
      }
    </div>
  )
}
export default DesiredEngrs