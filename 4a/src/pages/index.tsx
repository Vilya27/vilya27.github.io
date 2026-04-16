import Image from 'next/image'
import { Montserrat } from "next/font/google";
import { useState, useEffect } from 'react';

import Guarantee from '@/components/Guarantee'

import CardGrid from '@/components/CardGrid'
import Header from '@/components/Header';

const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [styleTimer, setStyleTimer] = useState("font-bold text-[28px] leading-[1.1] text-(--color-accent) uppercase");
  const [styleImage, setStyleImage] = useState("w-[14px] h-[14px]");
  const [srcImage, setSrcImage] = useState("/starYellow.svg");
  const [isDiscont, setIsDiscont] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    if (seconds < 0) {
      setMinutes(minutes - 1);
      setSeconds(60);
    }
    if (minutes === 0 && seconds === 30) {
      setSrcImage("/starRed.svg");
      setStyleImage("w-[14px] h-[14px] animate-pulse")
      setStyleTimer("font-bold text-[28px] leading-[1.1] text-(--color-danger) uppercase animate-pulse")
    }
    if (minutes === 0 && seconds === 0) {
      setSrcImage("/starWhite.svg");
      setStyleImage("w-[14px] h-[14px]")
      setStyleTimer("font-bold text-[28px] leading-[1.1] text-white uppercase");
      clearInterval(timer);
      setIsDiscont(false); 
    }
    return () => clearTimeout(timer);
  }, [minutes, seconds]);

  return (
    <>
      <Header min={minutes} sec={seconds} srcImage={srcImage} styleTimer={styleTimer} styleImage={styleImage} />
      <main className={montserrat.className}>
        <div className="bg-(--background)  px-[16px] pb-[20px] min-[375px]:pb-[30px] xl:pb-[150px] pt-[20px] xl:pt-[50px]">
          <div className=" md:max-w-[1216px] md:mx-auto">

            <p className=" text-white font-bold text-[22px] min-[375px]:text-2xl md:text-3xl xl:text-[40px] leading-[1.1] tracking-wide items-center mb-[24px] min-[375px]:mb-[20px] xl:mb-[110px]">Выбери подходящий для себя <span className="text-(--color-primary)">тариф</span></p>
            <section className='flex flex-col lg:flex-row xl:gap-[87px] mb-[22px] min-[375px]:mb-[24px] xl:mb-[66px]'>
              <Image
                src="/musculeMan.svg"
                width={500}
                height={500}
                alt="Picture of the author"
                className='w-[100px] h-[200px] min-[375px]:h-[250px] min-[375px]:w-[124px] md:h-[300px] md:w-[150px] lg:w-[380px] lg:h-[767px] mx-auto'
                priority
              />
              <CardGrid showDiscont={isDiscont}/>
            </section>
            <Guarantee />
          </div>
        </div >
      </main>
    </>
  );
}
