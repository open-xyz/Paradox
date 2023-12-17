'use client';
import { Menubar } from '@/components/ui/menubar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const pathname = usePathname();
	return (
		<div className='fixed w-full top-[5%] flex justify-center z-50'>
			<Menubar className='flex items-center justify-center gap-5 text-sm text-white border-none rounded-full hover:text-white w-fit px-9 bg-arcMenuBg'>
				<Link
					className={`${
						pathname === '/' ? '' : 'text-secondaryGrey'
					} transition-all duration-300 ease-in-out hover:underline hover:text-white hover:scale-105 `}
					href={'/'}
				>
					Home
				</Link>

				<Link
					className={`${
						pathname === '/medical-report' ? '' : 'text-secondaryGrey'
					} transition-all duration-300 ease-in-out hover:underline hover:text-white hover:scale-105`}
					href={'/medical-report'}
				>
					Report Analyzer
				</Link>

				<Link
					className={`${
						pathname === '/medicine-analyzer' ? '' : 'text-secondaryGrey'
					} transition-all duration-300 ease-in-out hover:underline hover:text-white hover:scale-105`}
					href={'/medicine-analyzer'}
				>
					Medicine Analyzer
				</Link>

				<Link
					className={`${
						pathname === '/physio' ? '' : 'text-secondaryGrey'
					} transition-all duration-300 ease-in-out hover:underline hover:text-white hover:scale-105`}
					href={'/physio'}
				>
					Physio
				</Link>
				<Link
					className={`${
						pathname === '/chat' ? '' : 'text-secondaryGrey'
					} transition-all duration-300 ease-in-out hover:underline hover:text-white hover:scale-105`}
					href={'/chat'}
				>
					Doctor AI
				</Link>
			</Menubar>
		</div>
	);
};
export default Header;
