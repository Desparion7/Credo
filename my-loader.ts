export default function cloudinaryLoader({
	src,
	width,
	quality,
}: {
	src: string;
	width: number;
	quality?: number;
}) {
	const baseUrl = 'https://credotravel.pl/';
	const params = [
		'f_auto',
		'c_limit',
		`w_${width}`,
		`q_${quality || 'auto'}`,
	];

	// Sprawdź, czy src już zaczyna się od baseUrl
	if (src.startsWith(baseUrl)) {
		// Zwróć ścieżkę bez dodawania baseUrl ponownie
		return src;
	} else {
		// Zbuduj i zwróć pełny URL z dodaniem baseUrl
		return `${baseUrl}${src}`;
	}
}
