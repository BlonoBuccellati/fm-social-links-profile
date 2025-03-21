import Image from "next/image";
import ApplicationLinks from "./application-links";
export default function StatusCard() {
  return (
    <div className="bg-Gray-800 flex w-[327px] flex-col items-center gap-6 rounded-2xl p-6 md:min-w-96 md:p-10">
      <Image
        src={"/assets/images/avatar-jessica.jpeg"}
        alt="user icon"
        width={88}
        height={88}
        className="rounded-full"
      />
      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-2xl leading-normal font-semibold">
          Jessica Randall
        </div>
        <div className="text-Green leading-normal font-bold">
          London, United Kingdom
        </div>
      </div>
      <p className="leading-normal">
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <ApplicationLinks />
    </div>
  );
}
