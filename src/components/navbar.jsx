import Image from "next/image";

export default function Navbar() {
  return (
    <navbar className="w-screen sticky top-0 bg-white z-20 ">
      <div className="">
        <ul className="flex justify-between px-20 py-8 shadow-md text-rose-800">
          <li className="is-active">
            <a
              className="border-b-transparent border-b-[1px] hover:border-b-rose-600 hover:text-rose-600 transition-none"
              href="#home"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="border-b-transparent border-b-[1px] hover:border-b-rose-600 hover:text-rose-600 transition-none"
              href="#time"
            >
              Hora
            </a>
          </li>
          <li>
            <a
              className="border-b-transparent border-b-[1px] hover:border-b-rose-600 hover:text-rose-600 transition-none"
              href="#location"
            >
              Ubicación
            </a>
          </li>
          <li>
            <a
              className="border-b-transparent border-b-[1px] hover:border-b-rose-600 hover:text-rose-600 transition-none"
              href="#about"
            >
              Acerca de Eunice & Alan
            </a>
          </li>

          <li>
            <a
              className="border-b-transparent border-b-[1px] hover:border-b-rose-600 hover:text-rose-600 transition-none"
              href="#rsvp"
            >
              RSVP
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
}
