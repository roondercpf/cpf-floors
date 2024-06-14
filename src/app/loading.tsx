

import Image from "next/image";

function LoaderScreen() {
    return ( 
        <div className="loader-screen">
        <Image
          className="header-desktop-logo"
          alt="CPF Floors logo"
          src="./header_desktop_logo.svg"
          height={150}
          width={150}
        ></Image>
        <span className="loader"></span>
      </div>
     );
}

export default LoaderScreen;