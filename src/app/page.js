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
          <div>
            <h1 className=" text-white text-xl pb-15">Invitación de boda</h1>
            <h2 className="hero_title">Eunice & Alan</h2>
            <h4 className="text-white text-xl pt-15">
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
    </main>
  );
}
