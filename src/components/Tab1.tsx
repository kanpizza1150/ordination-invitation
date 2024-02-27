import { useMemo } from "react"
function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, "g"), replace)
}
const Tab1 = () => {
  const searchParam = useMemo(
    () => new URLSearchParams(window?.location?.search),
    []
  )
  const guest = useMemo(() => searchParam.get("guest"), [searchParam])
  const invite = useMemo(() => {
    if (guest) {
      return (
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-center text-xs">มีความยินดีขอเรียนเชิญ</p>
          <p className="text-lg text-center text-gold-1 font-semibold italic">
            {replaceAll(guest, "%20", "")}
          </p>
          <p className="text-center text-xs">
            ร่วมอนุโมทนาบุญ เนื่องในงานอุปสมบท
          </p>
        </div>
      )
    }
    return (
      <p className="text-center">
        มีความยินดีขอเรียนเชิญท่านร่วมอนุโมทนาบุญ เนื่องในงานอุปสมบท
      </p>
    )
  }, [guest])
  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <div className="flex flex-col p-2 justify-center items-center rounded-md text-gold-1 ">
        <p className="font-semibold text-sm">
          นาง ฮุ่ยเค็ง แซ่เฮ้ง <span className="text-xs">(ยาย)</span>
        </p>
        <p className="font-semibold text-sm">
          ร.ต.ต. สมโภช นกทองอุทัย <span className="text-xs">(บิดา)</span>
        </p>
        <p className="font-semibold text-sm">
          นาง วิมลนันท์ นกดำ <span className="text-xs">(มารดา)</span>
        </p>
        <p className="text-xs">(เจ้าภาพ)</p>
      </div>
      {invite}
      <div>
        <p className="text-center font-bold text-2xl text-gold-1">
          นายสุรชา นกทองอุทัย
        </p>
        <p className="text-center font-bold text-2xl text-gold-1">(เกรท)</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <img alt="temple" src="/temple.svg" className="max-h-[10dvh] h-full" />
        <p className="text-center text-xs italic">
          “กรรมใดที่เคยล่วงเกินท่าน ด้วยกายกรรม วจีกรรม มโนกรรม
          ขอโปรดอโหสอกรรมแต่ ผู้อุปสมบทด้วยเถิด”
        </p>
      </div>
    </div>
  )
}

export default Tab1
