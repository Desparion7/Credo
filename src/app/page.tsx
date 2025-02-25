import ActualTrip from './components/actual-trips';
import ComentsSection from './components/coments-section';
import ContactForm from './components/contact-form';
import ContactMap from './components/contact-map';
import CompanyShortDescription from './components/description';
import DirectionTrip from './components/direction-trip';
import Intro from './components/intro';
import ValuesTrips from './components/values-trips';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Biuro pielgrzymkowo-turystyczne',
						name: 'Biuro Pielgrzymkowo-Turystyczne Credo',
						image: 'https://credotravel.pl/logo.png',
						url: 'https://credotravel.pl/',
						telephone: '+48-660-731-797',
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
								],
								opens: '08:00',
								closes: '16:00',
							},
						],
						sameAs: [
							'https://www.facebook.com/profile.php?id=61550535926575',
						],
						serviceArea: {
							'@type': 'AdministrativeArea',
							name: 'Polska',
						},
						services: [
							{
								'@type': 'Service',
								name: 'Wycieczki Pielgrzymkowe',
								description:
									'Organizacja duchowych podróży do najświętszych miejsc na świecie.',
							},
							{
								'@type': 'Service',
								name: 'Wycieczki Szkolne',
								description:
									'Edukacyjne i inspirujące wyjazdy szkolne, rozwijające wiedzę i horyzonty uczniów.',
							},
							{
								'@type': 'Service',
								name: 'Wycieczki Kulturowe',
								description:
									'Odkrywanie kulturowych skarbów świata przez zaplanowane wycieczki do historycznych i kulturalnych miejsc.',
							},
						],
					})}
				</script>
			</Head>
			<Intro />
			<ActualTrip />
			<DirectionTrip />
			<ValuesTrips />
			<ComentsSection />
			<CompanyShortDescription />
			<div className='w-100vw h-[2px] bg-main-color'></div>
			<ContactMap />
			<ContactForm />
		</>
	);
}
