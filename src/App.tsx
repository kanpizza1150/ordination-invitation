import Tab1 from "@components/Tab1"
import Tab2 from "@components/Tab2"
import Tab3 from "@components/Tab3"
import { cn } from "@libs/utils"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { MouseEvent, ReactNode, useState } from "react"
import AnimatedSection from "./components/AnimatedSection"
interface ITab {
  name: string
  label: string
  render: () => ReactNode
}
const tabs: ITab[] = [
  {
    name: "1",
    label: "เรียนเชิญ",
    render: () => <Tab1 />,
  },
  {
    name: "2",
    label: "กำหนดการ",
    render: () => <Tab2 />,
  },
  {
    name: "3",
    label: "สถานที่จัดงาน",
    render: () => <Tab3 />,
  },
]
const tabContentVariants: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
}

export default function App() {
  const [activeTab, setActiveTab] = useState<ITab>(tabs[0])
  const handleClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    tab: ITab
  ) => {
    e.preventDefault()
    setActiveTab(tab)
  }

  return (
    <AnimatedSection
      transform=""
      className="h-screen w-screen flex items-center justify-center p-5 flex-col gap-3 bg-gold-1 bg-opacity-5"
    >
      <div className="flex gap-3 md:gap-5 items-center justify-center">
        <div className="flex flex-col gap-0 leading-3 items-center m-auto">
          <p className="text-7xl text-gold-1 leading-10 pb-2">๗</p>
          <p className="text-lg text-gold-1 leading-6">มิถุนายน</p>
          <p className="text-lg text-gold-1 leading-6">๒๕๖๗</p>
        </div>
        <div className="h-full border-r-2 border-gold-1" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg text-gray-2">งานอุปสมบท</h1>
          <h1 className="text-2xl text-gold-1 font-bold text-center">
            นายสุรชา นกทองอุทัย (เกรท)
          </h1>
          <h1 className="text-sm text-gray-2">ณ พัทธสีมาวัดโชติทายการาม</h1>
        </div>
      </div>
      <div className="rounded-lg  overflow-hidden flex flex-col w-full h-[75dvh] shadow-sm items-center max-w-screen-md bg-white ">
        <div className="flex w-full justify-between md:justify-start">
          {tabs.map((tab) => {
            const isSelected = activeTab.name === tab.name
            return (
              <div
                key={tab.name}
                onClick={(e) => handleClick(e, tab)}
                className={cn("relative cursor-pointer p-3 flex items-center")}
              >
                <div
                  className={cn(
                    "flex items-center justify-center text-center w-full text-gold-1 z-10",
                    isSelected ? "text-white" : ""
                  )}
                >
                  {tab.label}
                </div>
                {isSelected && (
                  <motion.div
                    layoutId="indicator"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-full !bg-gold-1  rounded-t-md "
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
        <div
          className={cn(
            "w-full flex-1 h-full 0 overflow-auto rounded-b-md p-4 shadow border-t border-gold-2"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.name || "empty"}
              variants={tabContentVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{
                duration: 0.3,
              }}
            >
              {activeTab && activeTab?.render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="text-xs font-light">(ขออภัยหากไม่ได้เรียนเชิญด้วยตัวเอง)</p>
    </AnimatedSection>
  )
}
