import Image from 'next/image';
import ApplicationButtons from './buttons';
export default function StatusCard() {
  return (
    <div className='bg-gray-800 flex flex-col items-center md:h-[611px] rounded-2xl gap-6 p-6 md:p-10'>
      <Image
        src={'/assets/images/avatar-jessica.jpeg'}
        alt='user icon'
        width={88}
        height={88}
        className='rounded-full'
      />
      {/* Content */}
      <div className='flex flex-col justify-center items-center gap-1'>
        <div className='text-2xl font-bold leading-normal'>Jessica Randall</div>
        <div className='text-lime-300 font-bold text-sm leading-normal'>
          London, United Kingdom
        </div>
      </div>
      <p className='text-sm leading-normal'>
        &ldquo;Front-end developer and avid reader.&rdquo;
      </p>
      <ApplicationButtons />
    </div>
  );
}
