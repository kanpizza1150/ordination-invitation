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
            ไปร่วมอนุโมทนาบุญ เนื่องในงานอุปสมบท
          </p>
        </div>
      )
    }
    return (
      <p className="text-center">
        มีความยินดีขอเรียนเชิญญาติ มิตร และท่านที่เคารพนับถือ ไปร่วมอนุโมทนาบุญ
        เนื่องในงานอุปสมบท
      </p>
    )
  }, [guest])

  return (
    <div className="flex flex-col gap-3 justify-between h-full">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col p-2 justify-center items-center rounded-md text-gold-1 ">
          <p className="font-semibold text-sm">นายวิวัฒน์ นิติกาญจนา</p>
          <p className="font-semibold text-sm">สส.บุญยิ่ง นิติกาญจนา</p>
          <p className="font-semibold text-sm">
            สส.ชัยทิพย์ (สส.เส็ง) กมลพันธ์ทิพย
          </p>
          <p className="font-semibold text-sm">คุณยายฮุ่ยเค็ง (หมวย) แซ่เฮ้ง</p>
          <p className="text-xs">(ประธาน)</p>
        </div>
        <div className="flex flex-col p-2 justify-center items-center rounded-md text-gold-1 ">
          <p className="font-semibold text-sm">
            ร.ต.ต. สมโภช นกทองอุทัย <span className="text-xs">(บิดา)</span>
          </p>
          <p className="font-semibold text-sm">
            สท. วิมลนันท์ นกดำ <span className="text-xs">(มารดา)</span>
          </p>
          <p className="text-xs">(เจ้าภาพ)</p>
        </div>
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
