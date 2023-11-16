import Image from "next/image";

export default function Navbar() {
  return (
    <navbar>
      <div className="hero-foot ">
        <div className="hero-foot--wrapper">
          <div className="columns">
            <div className="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                <li className="is-active">
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#Waktu">Hora</a>
                </li>
                <li>
                  <a href="#lokasi">Ubicación</a>
                </li>
                <li>
                  <a href="#tentang-sherly-daeng">Acerca de Eunice & Alan</a>
                </li>

                <li>
                  <a href="#rsvp">RSVP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
}
