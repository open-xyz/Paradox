import Link from 'next/link';
import React from 'react';

type HomeProps = {};

const HomeC: React.FC<HomeProps> = () => {
	return (
		<div className='flex flex-col w-full min-h-screen items-center justify-center px-[20%] snap-mandatory snap-y'>
			<p className='text-[7rem] flex flex-col text-center font-semibold w-full min-h-screen items-center justify-center'>
				Welcome to the{' '}
				<span className='text-[7rem] font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>
					Doctalyzer
				</span>
			</p>
			<div className='text-[3rem] flex flex-col text-center font-semibold w-full min-h-screen items-center justify-center'>
				<p>
					<span className='  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>
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
