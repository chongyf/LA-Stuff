import { useState } from "react"

const EngravingInput = ({ text, typeUpdateFn1, engrs }) => {

  const [translated, setTranslated] = useState('')

  const updateValue = (val) => {
    setTranslated(engrs[val]);
    typeUpdateFn1(val);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            {text}
          </th>
          <th>
            Translated
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select onChange={(e) => updateValue(e.target.value)}>
              {
                Object.keys(engrs).map((keyName, i) => (
                  <option key={keyName} value={keyName}>{keyName}</option>
                ))
              }
            </select>
          </td>
          <td>
            {translated}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EngravingInput
