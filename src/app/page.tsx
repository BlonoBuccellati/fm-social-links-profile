import Image from 'next/image';
export default function Home() {
  const buttons = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      {/* TODO:本来、複数ユーザがいるはずなので、ユーザ情報を引数にして、カードをコンポーネント化する。 */}
      {/* Status Card */}
      <div>
        {/* Content */}
        <Image
          src={'/assets/images/avatar-jessica.jpeg'}
          alt='user icon'
          width={100}
          height={100}
        />

        <div>Jessica Randall</div>
        <div>London, United Kingdom</div>
        <p>&ldquo;Front-end developer and avid reader.&rdquo;</p>
        {/* TODO:ボタンはコンポーネントにする。 */}
        {/* Buttons */}
        {buttons.map((button, index) => (
          <button key={index}>
            <a href={button.url}>{button.name}</a>
          </button>
        ))}
      </div>
    </div>
  );
}
