const NumberInput = ({ text, updateFn, val }) => {

  return (
    <p>
      <label>{text}</label><br></br>
      <input type='number' value={val} 
      onChange={(e) => updateFn(e.target.value)}></input>
    </p>
  )
}

export default NumberInput
