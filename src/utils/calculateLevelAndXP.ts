export default function calculateLevelsAndXP(points: number): [number, number] {
	points = Math.floor(points);
	let xp = 0,
		level = 0;

	// Break points into XP, every 10 points = 1XP
	if (points < 10) return [xp, level];
	xp += Math.floor(points / 10);

	// Turn xp into levels
	if (xp < 1000) return [xp, level];
	level += Math.floor(xp / 1000);
	xp = xp % 1000;

	return [xp, level];
}
