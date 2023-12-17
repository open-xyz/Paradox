import Link from 'next/link';
import React from 'react';

type HomeProps = {};

const HomeC: React.FC<HomeProps> = () => {
	return (
		<div className='flex flex-col w-full  items-center justify-start px-[20%] snap-mandatory snap-y h-full	relative'>
			<p className='text-[5rem] flex flex-col min-h-screen text-center font-semibold w-full  items-center leading-[10rem] justify-center'>
				Welcome to the{' '}
				<span className='text-[8rem] -m-[2rem] font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>
					Doctalyzer
				</span>
			</p>
			<div className='text-[3rem] flex flex-col text-center min-h-screen font-semibold w-full  items-center justify-center'>
				<p>
					<span
						className='  bg-gradient-to-r from-orange-700 via-blue-500
					 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'
					>
						Doctalyzer
					</span>{' '}
					- is a tool that helps you to analyze your medical reports and
					interprete them in layman terms.
				</p>
				<div className='flex items-center justify-center w-full my-10'>
					<Link
						href={'/medical-report'}
						className='flex bg-blue-900 rounded-full px-[4%] py-[2%] text-2xl min-w-fit hover:bg-blue-700 transition-colors ease-in-out duration-300'
					>
						Explore Now
					</Link>
				</div>
			</div>
		</div>
	);
};
export default HomeC;
