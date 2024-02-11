import { cn } from "@libs/utils"
import { useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

const AnimatedSection = ({
  children,
  transform = "translateX(-200px)",
  className,
}: {
  children: ReactNode
  transform?: string
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className={cn("box-border w-full flex overflow-hidden")}>
      <div
        style={{
          transform: isInView ? "none" : transform,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={className}
      >
        {children}
      </div>
    </section>
  )
}
export default AnimatedSection
