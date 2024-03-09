export const getTrips = async () => {
	const response = await fetch(
		'https://credo-krosno.pl/wp/wp-json/wp/v2/trip?acf_format=standard&_fields=id,title,acf&per_page=100'
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
