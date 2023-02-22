const WhatToFind = ({ searchCombis }) => {

  return (
    <div>
      <br></br>What Engraving Combinations Translated <br></br>
      

      {
        searchCombis.map((item) => {
          return <p key={JSON.stringify(item)}>
            {JSON.stringify(item)}</p>
        })
      }
    </div>
  )
}

export default WhatToFind