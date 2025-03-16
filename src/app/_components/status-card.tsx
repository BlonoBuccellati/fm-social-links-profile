import Image from "next/image";
import ApplicationButtons from "./buttons";
export default function StatusCard() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-gray-800 p-6 md:h-[611px] md:p-10">
      <Image
        src={"/assets/images/avatar-jessica.jpeg"}
        alt="user icon"
        width={88}
        height={88}
        className="rounded-full"
      />
      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-2xl leading-normal font-bold">Jessica Randall</div>
        <div className="text-sm leading-normal font-bold text-lime-300">
          London, United Kingdom
        </div>
      </div>
      <p className="text-sm leading-normal">
        &ldquo;Front-end developer and avid reader.&rdquo;
      </p>
      <ApplicationButtons />
    </div>
  );
}
