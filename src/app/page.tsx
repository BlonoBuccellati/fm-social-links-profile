import StatusCard from './_components/status-card';
export default function Home() {
  return (
    <div className='bg-gray-900 text-white flex justify-center items-center min-h-screen'>
      {/* TODO:本来、複数ユーザがいるはずなので、ユーザ情報を引数にして、カードをコンポーネント化する。 */}
      {/* Status Card */}
      <StatusCard />
    </div>
  );
}
