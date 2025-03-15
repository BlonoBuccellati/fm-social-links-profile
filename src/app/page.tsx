import Image from 'next/image';
export default function Home() {
  const applicationButtons = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];
  return (
    <div className='bg-gray-900 text-white flex justify-center items-center min-h-screen'>
      {/* TODO:本来、複数ユーザがいるはずなので、ユーザ情報を引数にして、カードをコンポーネント化する。 */}
      {/* Status Card */}
      <div className='bg-gray-800 flex flex-col items-center w-96 h-[611px] rounded-2xl gap-6 p-10'>
        <Image
          src={'/assets/images/avatar-jessica.jpeg'}
          alt='user icon'
          width={88}
          height={88}
          className='rounded-full'
        />
        {/* Content */}
        <div className='flex flex-col justify-center items-center gap-1'>
          <div className='text-2xl font-bold leading-normal'>
            Jessica Randall
          </div>
          <div className='text-lime-300 font-bold text-sm leading-normal'>
            London, United Kingdom
          </div>
        </div>
        <p className='text-sm leading-normal'>
          &ldquo;Front-end developer and avid reader.&rdquo;
        </p>
        {/* TODO:ボタンはコンポーネントにする。 */}
        {/* Buttons */}
        <div className='flex flex-col gap-4'>
          {applicationButtons.map((button, index) => (
            <button
              key={index}
              className='bg-gray-700 w-76 h-[45px] rounded-lg hover:cursor-pointer hover:bg-lime-300 hover:text-gray-700'
            >
              <a href={button.url} className='font-bold text-sm'>
                {button.name}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
