import React, { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, handleSignOut, handleSignUpGoogle } =
    useContext(AuthContext);
  const { sortWithPopularity, sortWithReleaseDate, sortWithIMDB } =
    useContext(MovieContext);

  const dialogRef = useRef(null);

  const openSignIn = () => dialogRef.current?.showModal();
  const closeSignIn = () => dialogRef.current?.close();

  return (
    <div style={{ fontFamily: "var(--font-brand)" }}>
      <div className="navbar bg-white text-slate-900 dark:bg-gray-950 dark:text-slate-100 shadow-sm">
        <div className="navbar-start gap-2">
          <NavLink
            className=" cursor-pointer ms-2 text-xl tracking-widest flex items-center gap-1"
            to={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>{" "}
            justWATCH
          </NavLink>

          <div>
            <ul className="menu menu-horizontal gap-1 hidden md:flex flex-nowrap">
              <li>
                <NavLink className="btn btn-ghost" to={"/private/home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => sortWithReleaseDate()}
                  className="btn btn-ghost"
                  to={"/private/new"}
                >
                  New
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => sortWithPopularity()}
                  className="btn btn-ghost"
                  to={"/private/popular"}
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => sortWithIMDB()}
                  className="btn btn-ghost"
                  to={"/private/imdb"}
                >
                  IMDB
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => navigate("/private/watchlist")}
                  className="btn btn-ghost"
                  to={"/private/watchlist"}
                >
                  Watchlist
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* END */}
        <div className="navbar-end gap-2">
          <span className=" cursor-pointer text-olive-300 hover:text-blue-400 transition-colors">
            {currentUser?.displayName}
          </span>

          <button
            className="btn btn-ghost me-4"
            onClick={currentUser ? handleSignOut : openSignIn}
          >
            {currentUser ? "Sign Out" : "Sign In"}
          </button>

          <dialog ref={dialogRef} className="modal modal-middle">
            <div className="modal-box flex flex-col justify-center items-center">
              <h3 className="font-bold text-lg text-start">SIGN IN</h3>
              <p className="text-sm opacity-70 mt-1">
                Choose a method to continue
              </p>

              <div className="mt-5 flex flex-col gap-3 justify-center items-center">
                <button
                  onClick={() => {
                    navigate("/login");
                    closeSignIn();
                  }}
                  className="btn bg-amber-300 btn-wide rounded-2xl  text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Email icon"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="black"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  Login with Email
                </button>

                <button
                  onClick={() => {
                    handleSignUpGoogle();
                    closeSignIn();
                  }}
                  className="btn  bg-amber-300 btn-wide rounded-2xl hover:scale-y-100 text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                <button
                  className="btn text-black   bg-amber-300 btn-wide rounded-2xl hover:scale-y-100"
                  onClick={() => {
                    navigate("/");
                    closeSignIn();
                  }}
                >
                  Continue as Guest
                </button>
              </div>

              <div className="modal-action">
                <button onClick={closeSignIn} className="btn">
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
