const EngravingInput = ({ text, typeUpdateFn1, valUpdateFn2, val2, engrs }) => {

  return (
    <p>
      <label>{text}</label><br></br>
      <select onChange={(e) => typeUpdateFn1(e.target.value)}>
        {
          Object.values(engrs).map((keyName, i) => (
            <option key={keyName} value={keyName}>{keyName}</option>
          ))
        }

      </select>
      <input type='number' value={val2}
        onChange={(e) => valUpdateFn2(e.target.value)}></input>
    </p>
  )
}

export default EngravingInput
