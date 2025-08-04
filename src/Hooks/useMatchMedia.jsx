import { useEffect, useState } from "react"

const useMatchMedia = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(()=> {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const listener = e => setMatches(e.matches)
    mediaQuery.addEventListener('change', listener)

    return () => mediaQuery.removeEventListener('change', listener)
  }, [query])

  return (
    <div>useMatchMedia</div>
  )
}

export default useMatchMedia