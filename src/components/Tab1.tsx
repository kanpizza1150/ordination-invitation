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
        <div className="flex flex-col items-center justify-center gap-1 px-2">
          <p className="text-center text-sm italic text-gray-2 ">
            มีความยินดีขอเรียนเชิญ
          </p>
          <p className="text-lg text-center  text-gold-1  font-semibold ">
            {replaceAll(guest, "%20", "")}
          </p>
          <p className="text-center text-sm italic text-gray-2">
            ร่วมอนุโมทนาบุญ เนื่องในงานอุปสมบท
          </p>
        </div>
      )
    }
    return (
      <p className="text-center italic text-gold-1">
        มีความยินดีขอเรียนเชิญญาติ มิตร และท่านที่เคารพนับถือ ร่วมอนุโมทนาบุญ
        เนื่องในงานอุปสมบท
      </p>
    )
  }, [guest])

  return (
    <div className="flex flex-col gap-4 justify-between  pb-3">
      <div className="flex flex-col p-2 justify-center items-center rounded-sm text-gold-1 gap-4 ">
        <div className="relative flex flex-col justify-center items-center border border-gold-1 rounded-md w-full p-3">
          <p className="font-semibold">นายวิวัฒน์ นิติกาญจนา</p>
          <p className="text-[0.7rem] font-thin">
            นายกองค์การบริหารส่วนจังหวัดราชบุรี
          </p>
          <p className="font-semibold">ส.ส.บุญยิ่ง นิติกาญจนา</p>
          <p className="text-[0.7rem] font-thin">
            สมาชิกสภาผู้แทนราษฎรจังหวัดราชบุรี
          </p>
          <p className="font-semibold">ส.ส.ชัยทิพย์ (ส.ส.เส็ง) กมลพันธ์ทิพย์</p>
          <p className="text-[0.7rem] font-thin">
            สมาชิกสภาผู้แทนราษฎรจังหวัดราชบุรี
          </p>
          <p className="font-semibold">คุณยายฮุ่ยเค็ง (หมวย) แซ่เฮ้ง</p>
          <div className="text-sm bg-white absolute -bottom-3 tracking-wider ">
            (ประธาน)
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center border border-gold-1 rounded-md w-full p-3">
          <p className="font-semibold">ร.ต.ต. สมโภช นกทองอุทัย</p>
          <p className="font-semibold">สท. วิมลนันท์ นกดำ</p>
          <div className="text-sm bg-white absolute -bottom-3 tracking-wider ">
            (บิดา-มารดา)
          </div>
        </div>
      </div>
      {invite}
      <div className="">
        <p className="text-center font-bold text-2xl text-gold-1">
          นายสุรชา (เกรท) นกทองอุทัย
        </p>
        <p className="text-center text-gray-2 italic text-sm">
          ณ พัทธสีมาวัดโชติทายการาม
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <img alt="temple" src="/temple.svg" className="max-h-[10dvh] " />
        <p className="text-center text-xs italic text-gray-2 ">
          “กรรมใดที่เคยล่วงเกินท่าน ด้วยกายกรรม วจีกรรม มโนกรรม
          ขอโปรดอโหสอกรรมแต่ ผู้อุปสมบทด้วยเถิด”
        </p>
      </div>
    </div>
  )
}

export default Tab1
