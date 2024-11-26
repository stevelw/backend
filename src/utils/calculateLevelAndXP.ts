export default function calculateLevelsAndXP(points: number): {
	xp: number;
	level: number;
} {
	points = Math.floor(points);
	const result = { xp: 0, level: 0 };
	result.xp += Math.floor(points / 10);
	result.level += Math.floor(result.xp / 1000);
	result.xp = result.xp % 1000;
	return result;
}
