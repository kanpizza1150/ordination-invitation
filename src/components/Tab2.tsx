import section11 from "../assets/icons/section11.png"
import section12 from "../assets/icons/section12.webp"
import section13 from "../assets/icons/section13.webp"
import section14 from "../assets/icons/section14.webp"
import section21 from "../assets/icons/section21.png"
import section22 from "../assets/icons/section22.webp"
const section1 = [
  {
    time: "๐๘.๓๐ น.",
    label: "พิธีปลงผมนาค",
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
    label: "พิธีแห่นาคเข้าอุปสมบท",
    icon: section21,
  },
  {
    time: "๑๑.๐๐ น.",
    label: "ถวายภัตตาหารเพล ฉลองพระใหม่",
    icon: section22,
  },
]
const renderItem = (items) => {
  return items?.map((v) => (
    <div className="flex gap-3 items-center">
      <div className="bg-white rounded-full p-2 border-2 border-gold-1 w-12 h-12 flex items-center justify-center">
        <img src={v?.icon} alt={v?.label} className="w-12" />
      </div>
      <div className="flex flex-col">
        <p className="text-gold-1 font-bold text-lg">{v?.time}</p>
        <p className="text-gold-1 text-base">{v?.label}</p>
      </div>
    </div>
  ))
}
const Tab2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="bg-gold-1 text-white rounded-full text-center p-1 ">
          วันพฤหัสบดีที่ ๖ มิถุนายน ๒๕๖๗
        </div>
        <p className="text-center text-xs text-gold-1">(วันสุกดิบ)</p>
        <div className="flex flex-col gap-3">{renderItem(section1)}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-gold-1 text-white rounded-full text-center p-1 ">
          วันศุกร์ที่ ๗ มิถุนายน ๒๕๖๗
        </div>
        <p className="text-center text-xs text-gold-1">(วันบวช)</p>
        <div className="flex flex-col gap-3">{renderItem(section2)}</div>
      </div>
    </div>
  )
}

export default Tab2
