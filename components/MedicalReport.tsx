import React from 'react';

type MedicalReportProps = {};

const MedicalReport: React.FC<MedicalReportProps> = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen text-white '>
			<div className='z-[5] h-fit  w-[20rem] '>
				{/* <div className='border border-white rounded-md h-[20rem] relative'> */}
				<p className='text-[1.5rem]'>Upload a file</p>
				<p className='text-[0.8rem] text-gray-300'>
					Accepted formats: png, jpg
				</p>
				<div
					className='z-[3] mt-5 flex max-h-full h-full flex-col items-center justify-center rounded-md 
                    px-10 transition-all bg-slate-600/25 bg-blur-2xl opacity-100 hover:bg-slate-700/25 '
				>
					<svg
						className='w-5 h-5 text-white transition-all duration-75 group-hover:scale-110 group-active:scale-95'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'></path>
						<path d='M12 12v9'></path>
						<path d='m16 16-4-4-4 4'></path>
					</svg>
					<p className='mt-2 text-sm text-center t'>Click to upload.</p>
					<p className='mt-2 text-sm text-center '>Max file size: 50MB</p>
					<span className='sr-only'>Photo upload</span>
					{/* </div> */}
				</div>
				<button className='w-full my-5 bg-blue-500 rounded hover:bg-blue-600'>
					Upload Photo
				</button>
			</div>
		</div>
	);
};
export default MedicalReport;
