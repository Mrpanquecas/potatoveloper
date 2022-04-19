import React, { useState } from "react"

const useFunnyCases = (props) => {
  const [isImpossibleDeveloper, setImpossibleDeveloper] = useState(null)

  return { isImpossibleDeveloper, setImpossibleDeveloper }
}

export default useFunnyCases
