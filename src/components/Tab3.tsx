import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { ReactNode, useMemo } from "react"

const center = { lat: 13.516843401466732, lng: 99.95311197754333 }
const parkingCenter = { lat: 13.517761, lng: 99.952589 }

const parkingLink = `https://maps.google.com/maps?ll=13.517754,99.952582&z=22&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=16355480707547546646`
const placeLink = `https://www.google.com/maps?ll=13.516843,99.953112&z=22&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=12066162747196082077`
const Button = ({ children, to }: { children: ReactNode; to: string }) => {
  return (
    <a
      target="_blank"
      tabIndex={0}
      href={to}
      className="w-full font-bold border-gold-1 border bg-white  text-gold-1 p-1 rounded-md flex items-center justify-center leading-5 pt-2 text-xs hover:bg-gold-1 hover:text-white transition shadow-sm"
    >
      {children}
    </a>
  )
}
const Tab3 = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCxFn0IqzmolpIArIVy8AggQcqmkqGtT3o",
  })
  const map = useMemo(
    () =>
      isLoaded ? (
        <GoogleMap
          zoom={20}
          center={center}
          mapContainerClassName="w-full h-[20vh]"
        />
      ) : (
        <></>
      ),
    [isLoaded]
  )
  const parkingMap = useMemo(
    () =>
      isLoaded ? (
        <GoogleMap
          zoom={20}
          center={parkingCenter}
          mapContainerClassName="w-full h-[20vh]"
        />
      ) : (
        <></>
      ),
    [isLoaded]
  )
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col  text-sm">
          <h1 className="font-bold">
            พิธีอุปสมบท/จัดงาน:{" "}
            <span className="text-gold-1 font-bold ">วัดโชติทายการาม</span>
          </h1>

          <h1 className="text-xs font-light">
            ต.ดำเนินสะดวก อ.ดำเนินสะดวก จ.ราชบุรี
          </h1>
        </div>
        {map}
        <Button to={placeLink}>นำทางไปที่จัดงาน</Button>
      </div>
      <div className="border-gray-1 border-b" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col  text-sm">
          <h1 className="font-bold">
            ที่จอดรถ:{" "}
            <span className="text-gold-1 font-bold text-xs">
              โรงเรียนอนุบาลวัดโชติทายการามสงเคราะห์
            </span>
          </h1>

          <h1 className="text-xs font-light">
            ต.ดำเนินสะดวก อ.ดำเนินสะดวก จ.ราชบุรี
          </h1>
        </div>
        {parkingMap}
        <Button to={parkingLink}>นำทางไปที่จอดรถ</Button>
      </div>
    </div>
  )
}

export default Tab3
