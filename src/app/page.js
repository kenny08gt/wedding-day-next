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
      <section className="intro bg-fuchsia-100/50 text-slate-700 min-h-screen w-screen flex justify-center items-center text-center relative flex-col px-[40px] py-[80px]">
        <div className="background3 z-0"></div>
        <div className="z-10 w-screen px-14">
          <div className="" data-aos="fade-up" data-aos-easing="linear">
            <h1 className="text-4xl">Locación</h1>
            <p className="text-lg mt-8">
              <strong className="block ">Eventos Alux</strong>
              <br />
              Km 27.5 Carretera Interamericana hacia San Lucas Sacatepéquez,{" "}
              <br />
              San Lucas Sacatepéquez, Guatemala
              <br />
              <div className="flex items-center text-center justify-center mt-4">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                    fill="currentColor"
                  />
                </svg>
                <a href="tel:30733557" className="ml-2 mt-[-4px]">
                  3073 3557
                </a>
              </div>
              <br />
              <br />
            </p>
          </div>
          <div
            className="section-map"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15443.332426285324!2d-90.6489886!3d14.6085813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890b0c58ce2581%3A0x2ef568f6aede73ca!2sEventos%20Alux!5e0!3m2!1sen!2sgt!4v1699576102663!5m2!1sen!2sgt"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="space40px"></div>
          <div
            className="flex justify-center mt-14"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <a
              href="https://maps.app.goo.gl/yyS1944XPncpLp2b7"
              className="bg-[#00AFB9] hover:bg-[#7871AA] transition-colors text-white px-6 py-4 rounded-md mb-14 flex"
              target="_blank"
              data-aos="zoom-in"
            >
              <Image src="/google-maps.svg" height="25" width="25" />
              &nbsp;&nbsp;Google Maps
            </a>
            <div className="w-[40px]"></div>
            <a
              href="https://www.waze.com/en/live-map/directions?latlng=14.608688522256644%2C-90.64864397048952"
              className="bg-[#00AFB9] hover:bg-[#7871AA] transition-colors text-white px-6 py-4 rounded-md mb-14 flex"
              target="_blank"
              data-aos="zoom-in"
            >
              <svg
                fill="#fff"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Waze icon</title>
                <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z" />
              </svg>
              &nbsp;&nbsp;Waze
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
