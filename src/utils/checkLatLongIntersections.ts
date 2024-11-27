import CoordinateObjectType from '../type/CoordinateObjectType';

export default function getAllIntersectingCoordinates(
	base: CoordinateObjectType,
	points: CoordinateObjectType[],
	radiusInMeters: number
): { lat: number; lon: number; distance: number }[] {
	return points
		.map((point) => {
			const distance = calculateHaversineDistance(base, point);
			if (distance <= radiusInMeters) return { distance: distance, ...point };
		})
		.filter((point) => point !== undefined);
}

function calculateHaversineDistance(
	point1: CoordinateObjectType,
	point2: CoordinateObjectType
): number {
	const latitudinalDelta = point2.lat - point1.lat;
	const longitudinalDelta = point2.lon - point1.lon;

	const point1AsRads = convertCoordinateObjectToRadians(point1);
	const point2AsRads = convertCoordinateObjectToRadians(point2);

	const chordLength =
		Math.sin(latitudinalDelta / 2) ** 2 +
		Math.cos(point1AsRads.lat) *
			Math.cos(point2AsRads.lat) *
			Math.sin(longitudinalDelta / 2) ** 2;
	const angularDistance =
		2 * Math.atan2(Math.sqrt(chordLength), Math.sqrt(1 - chordLength));

	const EARTH_RADIUS_METERS = 6371000;
	return EARTH_RADIUS_METERS * angularDistance;
}

function convertCoordinateObjectToRadians(
	coordinateObject: CoordinateObjectType
): CoordinateObjectType {
	const toRad = (value: number) => value * (Math.PI / 180);
	return { lat: toRad(coordinateObject.lat), lon: toRad(coordinateObject.lon) };
}
