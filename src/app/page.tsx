import ActualTrip from './components/actual-trips';
import ComentsSection from './components/coments-section';
import ContactForm from './components/contact-form';
import ContactMap from './components/contact-map';
import CompanyShortDescription from './components/description';
import DirectionTrip from './components/direction-trip';
import Intro from './components/intro';
import ValuesTrips from './components/values-trips';

export default function Home() {
	return (
		<>
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
