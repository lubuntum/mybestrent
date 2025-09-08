import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';//Обязательный импрот стилей карты
import styles from "./map-component.module.css"
import { Location } from '../../../types/location';

// ФИКС ДЛЯ ИКОНОК - ОБЯЗАТЕЛЬНО! без замены иконка не отобразится
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
    locations: Location[]
    center: [number, number];
    zoom?: number;
}

export const MapComponent: React.FC<MapComponentProps> = ({
    locations,
    center = [53.8231, 91.2719],
    zoom = 13
}) => {
  return (
    <div className={styles['map-container']}>
        <MapContainer
            center={center}
            zoom={zoom}
            className={styles['map']}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location, index) => (
                <Marker key={index} position={[location.lat, location.lng]}>
                    <Popup>
                        <div>
                            <h3>{location.label}</h3>
                            {location.address && <p>{location.address}</p>}
                            <p>Координаты: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
  )
}