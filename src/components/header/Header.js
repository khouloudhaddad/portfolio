import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import cv from "./cv.svg";
import { useState } from "react";

const Header = () => {

  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden(!isHidden); 
  
  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-indigo-700 py-3 text-neutral-200 shadow-lg lg:flex-wrap rounded-sm lg:justify-start"
      data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="flex w-full items-center justify-between">
          <Link className="pr-2 text-lg font-normal text-white flex items-center lg:hidden flex-1" to="/">
            <img
              src={cv}
              style={{ height: "25px", width: "25px" }}
              alt=""
              loading="lazy" />
            <span className="ms-2 text-sm">Khouloud HADDAD AMAMOU</span>
          </Link>
          <button
            className="block border-0 bg-transparent  py-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
            >
            <span className="[&>svg]:w-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                 />
              </svg>
            </span>
          </button>
        </div>

        <div className={`!visible ${isHidden===true ? "hidden": ""} flex-grow basis-[100%] items-center lg:!flex lg:basis-auto data-te-collapse-show`}
          id="navbarSupportedContent4"
          data-te-collapse-item>
          <hr />
          <ul
            className="list-style-none ms-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref>
            <li className="p-2" data-te-nav-item-ref>
              <Link
                className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/"
                data-te-nav-link-ref
              >Home</Link>
            </li>
            <li className="p-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/about"
                data-te-nav-link-ref
              >About</Link>
            </li>
            <li className="p-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/projects"
                data-te-nav-link-ref
              >Projects</Link>
            </li>
            <li className="p-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/contact"
                data-te-nav-link-ref
              >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header