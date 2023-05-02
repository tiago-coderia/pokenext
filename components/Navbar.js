import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-default px-10 text-white h-[62px] flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="PokeBall Image"
        />
        <h1 className="text-2xl font-bold">PokeNext</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <p>Sobre</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
