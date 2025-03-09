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
      <div className='bg-gray-800 flex flex-col  items-center w-100 h-150 rounded-2xl'>
        {/* Content */}
        <div className='flex flex-col justify-center items-center mt-10'>
          <Image
            src={'/assets/images/avatar-jessica.jpeg'}
            alt='user icon'
            width={100}
            height={100}
            className='rounded-full'
          />
          <div className='text-2xl font-bold'>Jessica Randall</div>
          <div className='text-lime-300 font-bold text-[14px]'>
            London, United Kingdom
          </div>
          <p>&ldquo;Front-end developer and avid reader.&rdquo;</p>
        </div>
        {/* TODO:ボタンはコンポーネントにする。 */}
        {/* Buttons */}
        <div className='flex flex-col gap-3.5'>
          {applicationButtons.map((button, index) => (
            <button
              key={index}
              className='bg-gray-700 w-80 h-10 rounded-lg hover:cursor-pointer hover:bg-lime-300 hover:text-gray-700'
            >
              <a href={button.url} className='font-bold'>
                {button.name}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
