import StatusCard from "./_components/status-card";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      {/* TODO:本来、複数ユーザがいるはずなので、ユーザ情報を引数にして、カードをコンポーネント化する。 */}
      {/* Status Card */}
      <StatusCard />
    </div>
  );
}
