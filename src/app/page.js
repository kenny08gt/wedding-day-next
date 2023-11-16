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
      <section className="intro bg-fuchsia-300/50 text-slate-700 min-h-screen w-screen flex justify-center items-center text-center relative flex-col px-[40px] py-[80px]">
        <div className="background2"></div>
        <div className="">
          <div className="" data-aos="fade-up" data-aos-easing="linear">
            <h1 className="text-center text-4xl">Hora y Lugar</h1>
          </div>
          <div
            className="flex justify-around pt-14"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <div className="">
              <p className="">
                <div className="text-xl">Domingo</div>
                <div className="text-4xl font-bold my-4 block">25</div>
                <div className="text-xl">Febrero 2024</div>
              </p>
            </div>
            <div className="">
              <p className="text-xl ">
                Se abren puertas
                <br />
                <strong className="text-4xl my-4 block">17:00</strong>
              </p>
            </div>
            <div className="">
              <h1 className="text-xl">
                Inicio de acto
                <br />
                <strong className="text-4xl my-4 block">17:30</strong>
              </h1>
            </div>
          </div>
          <div className="h-[40px]"></div>
          <div
            className="flex w-screen justify-around"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <div className="" data-aos="fade-up" data-aos-easing="linear">
              <h2 className="text-4xl mb-8 mt-12">Itinerario</h2>
              <table className="text-left">
                <tbody>
                  <tr>
                    <th>17:00</th>
                    <td className="pl-4"> Se abren puertas</td>
                  </tr>
                  <tr>
                    <th>17:30</th>
                    <td className="pl-4"> Inicio de acto</td>
                  </tr>
                  <tr>
                    <th>18:30</th>
                    <td className="pl-4"> Receso</td>
                  </tr>
                  <tr>
                    <th>19:00</th>
                    <td className="pl-4"> Cena</td>
                  </tr>
                  <tr>
                    <th>20:00</th>
                    <td className="pl-4"> Pastel</td>
                  </tr>
                  <tr>
                    <th>21:30</th>
                    <td className="pl-4"> Cierre del evento</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="" data-aos="fade-up" data-aos-easing="linear">
              <h2 className="text-4xl mb-8 mt-12">Menu</h2>
              <ul className="m-auto text-center">
                <li className="waktu is-larger ">Pollo tereyaki</li>
                <li className="waktu is-larger ">Pasta con jamón y pimiento</li>
                <li className="waktu is-larger ">Ensalada thai</li>
                <li className="waktu is-larger ">Postre</li>
                <li className="waktu is-larger ">Pastel con algo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[40px]"></div>
        <div className="my-12" data-aos="fade-up" data-aos-easing="linear">
          <a
            href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NGgzdW00NG84dXFwMzcwNXYxbGliNGxzaWggZGFlbmdkb2FuZ0Bt&amp;tmsrc=daengdoang%40gmail.com"
            target="_blank"
            className="bg-[#00AFB9] hover:bg-[#7871AA] transition-colors text-white px-4 py-4 rounded-md mb-14 flex"
            data-tooltip="Add to Calendar"
            data-aos="zoom-in"
          >
            <Image
              src="/calendar-heart.svg"
              width="25"
              height="25"
              className="mr-4"
            />
            Agregar a mi Google Calendar
          </a>
        </div>
      </section>
    </main>
  );
}
