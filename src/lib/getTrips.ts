export const getTrips = async () => {
	const response = await fetch(
		'https://modezp.com/wp/wp-json/wp/v2/wycieczka?acf_format=standard&_fields=id,title,cena,acf'
	);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
