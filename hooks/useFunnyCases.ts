import { useState } from "react"

const useFunnyCases = () => {
  const [isImpossibleDeveloper, setImpossibleDeveloper] = useState<
    boolean | null
  >(null)

  return { isImpossibleDeveloper, setImpossibleDeveloper }
}

export default useFunnyCases
