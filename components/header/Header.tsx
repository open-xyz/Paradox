import { Menubar } from '@/components/ui/menubar';
import Link from 'next/link';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className='fixed w-full top-[5%] flex justify-center z-50'>
			<Menubar className='flex items-center justify-center gap-5 text-sm text-white border-none rounded-full w-fit px-9 bg-arcMenuBg'>
				<Link
					className='transition-all duration-300 ease-in-out hover:underline'
					href={'/'}
				>
					Home
				</Link>

				<Link
					className='transition-all duration-300 ease-in-out hover:underline'
					href={'/medical-report'}
				>
					Report Analyzer
				</Link>

				<Link
					className='transition-all duration-300 ease-in-out hover:underline'
					href={'/medicine-analyzer'}
				>
					Medicine Analyzer
				</Link>

				<Link
					className='transition-all duration-300 ease-in-out hover:underline'
					href={'/physio'}
				>
					Physio
				</Link>
				<Link
					className='transition-all duration-300 ease-in-out hover:underline'
					href={'/chat'}
				>
					Doctor AI
				</Link>
			</Menubar>
		</div>
	);
};
export default Header;
