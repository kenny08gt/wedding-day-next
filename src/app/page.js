"use client";
import Navbar from "@/components/navbar";
import TimerStyled from "@/components/timer";
import Image from "next/image";
import { useTimer } from "react-timer-hook";

export default function Home() {
  const expiryTimestamp = new Date("02/25/2024 17:00");
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds());
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="hero h-screen w-screen flex justify-center items-center text-center">
        <div>
          <div className="info_wrapper">
            <h1 className=" text-white text-2xl pb-15">Invitación de boda</h1>
            <h2 className="hero_title">Eunice & Alan</h2>
            <h4 className="text-white text-2xl pt-15">
              Domingo, 25 de Febrero, 2024 <br />
              Eventos Alux, <br />
              Guatemala
            </h4>
          </div>
          <div>
            <div style={{ fontSize: "100px" }} className="flex mt-12">
              <TimerStyled
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                days={days}
              />
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <section className="intro min-h-screen w-screen flex justify-center items-center text-center relative flex-col px-[40px] py-[80px]">
        <div className="background1"></div>
        <div data-aos="fade-up" data-aos-easing="linear" className="z-10">
          <img
            src="/img/image1.webp"
            className="z-10"
            alt="Alan and Eunice picture"
          />
        </div>

        <p
          className=" mt-14 text-2xl"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          Estamos ansiosos por compartir nuestro día especial contigo.
        </p>

        <span className="h-[40px]"></span>
        <span className="h-[40px]"></span>

        <div data-aos="fade-up" data-aos-easing="linear">
          <div className="letter_text">Eunice</div>
          <div className="ampersand">&</div>
          <div className="letter_text">Alan</div>
        </div>
        <span className="h-[40px]"></span>
        <div data-aos="fade-up" data-aos-easing="linear">
          <img
            src="/img/divider-leaves.png"
            className="divider has-text-centered max-h-[60px]"
            alt="Divider leaves"
          />
        </div>
        <span className="h-[40px]"></span>
        <span className="h-[40px]"></span>
      </section>
    </main>
  );
}
