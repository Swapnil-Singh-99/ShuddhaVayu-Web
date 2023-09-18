import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './map.css'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Map = (props) => {

    
    
   
    console.log(props.lat);
    console.log(props.long)

   


  const icon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [38, 38] // size of the icon
  }); 


  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.2090]} icon={icon}></Marker>
       
    </MapContainer>
  );
};
export default Map;
