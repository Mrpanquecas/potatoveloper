import React, { useState, useEffect } from "react"

const useFunnyCases = (props) => {
  const [isImpossibleDeveloper, setImpossibleDeveloper] = useState(null)

  console.log(isImpossibleDeveloper)
  return { isImpossibleDeveloper, setImpossibleDeveloper }
}

export default useFunnyCases
