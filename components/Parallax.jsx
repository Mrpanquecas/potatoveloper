import { useState, useRef, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"

const Parallax = ({
  children,
  offset = 50,
  className = "",
  style= {},
  spring = { stiffness: 400, damping: 90 }
}) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  // apply a spring to ease the result
  const y = useSpring(yRange, spring)

  useEffect(() => {
    const element = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref])

  return (
    <motion.div className={className} ref={ref} style={{ ...style, y }}>
      {children}
    </motion.div>
  )
}

export default Parallax
