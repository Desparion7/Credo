import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ReactQueryProvider from '@/lib/query-provider';
import Toast from '@/ui/toast';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Biuro Pielgrzymkowo-Turystyczne Credo | Wycieczki i Pielgrzymki',
	description:
		'Odkryj niezapomniane pielgrzymki, wycieczki szkolne i turystyczne z Biurem Pielgrzymkowo-Turystycznym Credo. Zanurz się w duchowej podróży, kulturowych odkryciach oraz edukacyjnych przygodach z naszymi indywidualnie dostosowanymi ofertami. Nasze wycieczki szkolne są zaprojektowane, aby inspirować młodych ludzi, rozszerzając ich horyzonty i wzbogacając program nauczania o realne doświadczenia, które pozostają w pamięci na lata.',
	icons: {
		icon: '/favicon.ico',
	},
	keywords:
		'pielgrzymki, wycieczki duchowe, turystyka religijna, święte miejsca, kulturowe odkrycia, indywidualne pielgrzymki, grupowe wycieczki, wycieczki szkolne, pielgrzymki zagraniczne, chrześcijańskie podróże, duchowa podróż',
	openGraph: {
		title: 'Biuro Pielgrzymkowo-Turystyczne Credo | Wycieczki i Pielgrzymki',
		description:
			'Odkryj niezapomniane pielgrzymki i wycieczki z Biurem Pielgrzymkowo-Turystycznym Credo. Indywidualnie dostosowane oferty dla niezwykłych duchowych i kulturowych odkryć.',
		url: 'https://credo-krosno.pl',
		images: [
			{
				url: 'https://credo-krosno.pl/opengraph-image.jpg',
				width: 1200,
				height: 510,
				alt: 'Biuro Pielgrzymkowo-Turystyczne Credo',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body
				className={`${poppins.className} bg-main-background overflow-x-hidden`}
			>
				<ReactQueryProvider>
					<Header />
					<Toast />
					<main>{children}</main>
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
