import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Paradox',
	description: 'Built with love by Team Paradox ❤️',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-arcBackground text-white`}>
				<main>
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
