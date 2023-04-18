import { useState } from 'react'

const SearchCode = ({ onAddCode }) => {
  const [code, setCode] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    // Prevent invalid code input here?
    if(!code)
    {
      console.log("Input is empty")
      return
    }

    onAddCode( code )
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Search Code</label>
      </div>
      <div>
        <textarea rows="10" cols="70" value={code}
          onChange={(e) => setCode(e.target.value)} />
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default SearchCode   