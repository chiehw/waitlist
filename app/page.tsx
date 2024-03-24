import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#C9F9D1] relative overflow-hidden">
          <Image
            src="/shots.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-8 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
          知听：只听你所爱，让你享受听力的乐趣👏。
          </h1>
          <p className="text-gray-500">
            加入 Waitlist，待🚀知听 1.0 正式发布，您会在第一时间得到通知。
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
