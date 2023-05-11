import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useFreezeBody } from "src/hooks/useFreezeBody";

export function Nav() {
  const [modalState, setModalState] = useState(false);

  useFreezeBody(modalState);

  return (
    <>
      <nav className="sm:row center fixed left-0 right-0 top-0 hidden justify-between gap-8 px-8 py-4 uppercase sm:flex">
        <div className="hover:text-stone-300">
          <Link href="/">OvO</Link>
        </div>
        <div className="row center gap-8">
          <ul className="row center gap-4">
            <li className="hover:text-stone-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-stone-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-stone-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="row center gap-4">
            <li className="">
              <Link href="/giveaway">
                <button className="primary">Giveaway</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`${
          modalState ? "" : "-translate-y-full"
        } col center fixed bottom-0 left-0 right-0 top-0 z-20 h-screen w-screen justify-center gap-8 bg-gradient-to-b from-orange-900 to-stone-900 transition-all sm:hidden`}
      >
        <ul className="col center gap-2 text-xl font-medium">
          <li className="hover:text-stone-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-stone-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-stone-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="col center gap-4">
          <li className="">
            <Link href="/giveaway">
              <button className="primary">Giveaway</button>
            </Link>
          </li>
        </ul>
      </div>

      <nav
        className="fixed bottom-0 right-0 z-30 p-4 sm:hidden"
        onClick={() => setModalState(!modalState)}
      >
        <div
          className={`${
            modalState
              ? "border-orange-700 bg-transparent"
              : "border-transparent bg-orange-700"
          } z-10 h-10 w-10 cursor-pointer rounded-full border-4 shadow-md transition-all`}
        ></div>
      </nav>
    </>
  );
}
