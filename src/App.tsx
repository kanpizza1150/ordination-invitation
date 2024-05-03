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
      className="min-h-[100dvh] w-screen flex items-center justify-center p-5 flex-col gap-3 bg-gold-1 bg-opacity-5 bg-[url('./assets/bg.gif')] bg-cover  bg-center md:bg-contain overflow-auto"
    >
      <div className="h-full flex flex-col items-center gap-3">
        <div
          className={cn(
            "flex gap-3 md:gap-5 items-center justify-center  rounded-lg p-1 py-2 backdrop-blur-sm bg-white/70 w-full max-w-screen-md",
            "sm:grid grid-cols-3"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-0 leading-3 items-center m-auto  border-r-2 border-gold-1 pr-3 sm:pr-0 sm:w-full "
            )}
          >
            <p className="text-5xl text-gold-1 leading-10 pb-2 tracking-wide">
              ๖-๗
            </p>
            <p className="text-lg text-gold-1 tracking-widest leading-6">
              มิถุนายน
            </p>
            <p className="text-lg text-gold-1 tracking-widest leading-6">
              ๒๕๖๗
            </p>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 w-full">
            <h1 className="text-lg text-gray-2">งานอุปสมบท</h1>
            <h1 className="text-xl sm:text-2xl text-gold-1 font-bold text-center">
              นายสุรชา นกทองอุทัย (เกรท)
            </h1>
            <h1 className="text-sm text-gray-2 text-center">
              ณ พัทธสีมาวัดโชติทายการาม
            </h1>
          </div>
        </div>
        <div className="rounded-lg  overflow-hidden flex flex-col w-full   shadow-sm items-center max-w-screen-md bg-white ">
          <div
            className={cn(
              "grid grid-cols-3 w-full",
              "md:flex md:w-full md:justify-start"
            )}
          >
            {tabs.map((tab) => {
              const isSelected = activeTab.name === tab.name
              return (
                <div
                  key={tab.name}
                  onClick={(e) => handleClick(e, tab)}
                  className={cn(
                    "relative cursor-pointer p-3 flex justify-center items-center text-sm text-center"
                  )}
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
              "w-full flex-1 rounded-b-md p-4 shadow border-t border-gold-1 "
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
                className="h-full"
              >
                {activeTab && activeTab?.render()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <p className="text-xs font-light text-gold-1">
          (ขออภัยหากมิได้เรียนเชิญด้วยตนเอง)
        </p>
      </div>
    </AnimatedSection>
  )
}
