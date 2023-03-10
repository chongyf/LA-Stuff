import { useState } from 'react'

const InitialObject = ({ onSetObject }) => {
  const [code, setCode] = useState("{}")

  const onSubmit = (e) => {
    e.preventDefault()

    // Prevent invalid code input here?
    if(!code)
    {
      console.log("Input is empty")
      return
    }

    onSetObject( code )
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Initial Object</label>
      </div>
      <div>
        <textarea rows="10" cols="100" value={code}
          onChange={(e) => setCode(e.target.value)} />
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default InitialObject   