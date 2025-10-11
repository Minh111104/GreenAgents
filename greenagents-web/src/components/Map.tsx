import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { LatLngTuple } from 'leaflet';

// Fix for default markers in react-leaflet
import L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: '/leaflet/marker-icon-2x.png',
	iconUrl: '/leaflet/marker-icon.png',
	shadowUrl: '/leaflet/marker-shadow.png',
});

interface Spot {
	_id: string;
	name: string;
	latitude: number;
	longitude: number;
	description?: string;
}

interface MapProps {
	spots: Spot[];
}

export default function Map({ spots }: MapProps) {
	const defaultCenter: LatLngTuple = [51.505, -0.09];

	return (
		<MapContainer
			center={defaultCenter}
			zoom={13}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{spots.map((spot) => (
				<Marker key={spot._id} position={[spot.latitude, spot.longitude] as LatLngTuple}>
					<Popup>
						<div>
							<h3 className="font-bold">{spot.name}</h3>
							{spot.description && <p>{spot.description}</p>}
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}