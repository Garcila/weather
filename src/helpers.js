//  take the temperature and map it to rgb (min temp is -45, max is 50)
export function mapDegreesToRGB(number) {
	if (number < 5) {
		return { r: 0, g: 0, b: 255 };
	} else if (number < 18) {
		return {
			r: 0,
			g: ((number - -30) * (255 - 0) / (35 - -30) + 0) / 4,
			b: (number - -30) * (255 - 0) / (35 - -30) + 0
		};
	} else if (number > 29) {
		return { r: 255, g: 0, b: 0 };
	} else {
		return {
			r: (number - -30) * (255 - 0) / (35 - -30) + 0,
			g: ((number - -30) * (255 - 0) / (35 - -30) + 0) / 4,
			b: 0
		};
	}
}
