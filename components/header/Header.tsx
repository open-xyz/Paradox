import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className='fixed w-full top-[5%] flex justify-center'>
			<div className='absolute aspect-square w-[80rem] bg-slate-600/20 blur-3xl rounded-full -z-10 -top-[30rem] animate-pulse  ease-in-out' />
			<Menubar className='flex items-center justify-center gap-5 text-white border-none rounded-full w-fit px-9 bg-arcMenuBg'>
				<MenubarMenu>
					<MenubarTrigger asChild>
						<Link href={'/'}>Home</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={'/'}>Report Analyzer</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={'/'}>Medicine Analyzer</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={'/'}>Doctor AI</Link>
					</MenubarTrigger>
				</MenubarMenu>
			</Menubar>
		</div>
	);
};
export default Header;
