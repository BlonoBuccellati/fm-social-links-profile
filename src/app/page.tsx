import StatusCard from "./_components/status-card";
export default function Home() {
  return (
    <div className="bg-Gray-900 flex min-h-screen items-center justify-center text-sm text-white">
      {/* TODO:本来、複数ユーザがいるはずなので、ユーザ情報を引数にして、カードをコンポーネント化する。 */}
      {/* Status Card */}
      <main>
        <StatusCard />
      </main>
    </div>
  );
}
