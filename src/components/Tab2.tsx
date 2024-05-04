import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import section11 from "../assets/icons/section11.png"
import section12 from "../assets/icons/section12.webp"
import section13 from "../assets/icons/section13.webp"
import section14 from "../assets/icons/section14.webp"
import section21 from "../assets/icons/section21.png"
import section22 from "../assets/icons/section22.webp"

const section1 = [
  {
    time: "๐๘.๓๐ น.",
    label: "ปลงผมนาค",
    icon: section11,
  },
  {
    time: "๑๐.๐๐ น.",
    label: "เจริญพระพุทธมนต์ฉลองไตร",
    icon: section12,
  },
  {
    time: "๑๓.๐๐ น.",
    label: "เทศน์สอนนาค",
    icon: section13,
  },
  {
    time: "๑๘.๐๐ น.",
    label: "ร่วมรับประทานอาหาร (โต๊ะจีน)",
    icon: section14,
  },
]
const section2 = [
  {
    time: "๐๘.๐๐ น.",
    label: "นำนาคเข้าอุปสมบท",
    icon: section21,
  },
  {
    time: "๑๑.๐๐ น.",
    label: "ถวายภัตตาหารเพล ฉลองพระใหม่",
    icon: section22,
  },
]
const renderItem = (items: { icon: string; label: string; time: string }[]) => {
  return items?.map((v, idx) => (
    <VerticalTimelineElement
      position={"right"}
      visible={false}
      key={v?.time}
      contentStyle={{ boxShadow: "none", padding: 0 }}
      iconClassName="shadow-none bg-white rounded-full p-2 border-2 border-gold-1 w-12 h-12 flex items-center justify-center overflow-hidden"
      iconStyle={{}}
      contentArrowStyle={{ display: "none" }}
      icon={<img src={v?.icon} alt={v?.label} className="w-12" />}
    >
      <div className="flex flex-col gap-0  md:my-1 lg:my-4">
        <p className="text-gray-2 !text-base !m-0 !p-0 !font-bold">{v?.time}</p>
        <p className="text-gold-1 !text-sm !m-0 !p-0 !font-normal">
          {v?.label}
        </p>
      </div>
    </VerticalTimelineElement>
  ))
}
const Tab2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="border text-white border-gold-1 bg-gold-1  rounded-full text-center p-1 text-sm">
          วันพฤหัสบดีที่ ๖ มิถุนายน ๒๕๖๗
        </div>
        <p className="text-center text-xs text-gold-1">(วันสุกดิบ)</p>
        <VerticalTimeline layout="2-columns">
          {renderItem(section1)}
        </VerticalTimeline>
      </div>
      <div className="flex flex-col gap-1">
        <div className="border text-white border-gold-1 bg-gold-1  rounded-full text-center p-1 text-sm">
          วันศุกร์ที่ ๗ มิถุนายน ๒๕๖๗
        </div>
        <p className="text-center text-xs text-gold-1">(วันบวช)</p>
        <VerticalTimeline lineColor="#8B6C25">
          {renderItem(section2)}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Tab2
