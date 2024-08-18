import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface PropsType {
  position: [number, number];
  center: [number, number];
}

function Map({ position, center }: PropsType) {
  return (
    <MapContainer className="w-full h-56" center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          قزوین خانه خلاق نوآوری سعدالسلطنه
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;

