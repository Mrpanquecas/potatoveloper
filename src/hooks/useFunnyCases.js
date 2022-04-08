import React, { useState, useEffect } from "react"

const useFunnyCases = (props) => {
  const [isImpossibleDeveloper, setImpossibleDeveloper] = useState(null)

  return { isImpossibleDeveloper, setImpossibleDeveloper }
}

export default useFunnyCases
