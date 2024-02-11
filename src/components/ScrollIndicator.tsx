import { motion, useScroll } from "framer-motion"

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-black origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollIndicator
