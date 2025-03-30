import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartifyLogo from "../assets/cartifyLogo.png";
import {
  faUserCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
function Navbar({ onAction, selectedProduct }) {
 
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-full px-4 sm:px-4 lg:px-4">
          <div className="relative flex h-16 items-center justify-between">
            

            {/* Logo and desktop menu */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src= {cartifyLogo} alt="Logo" className="block h-8 w-auto rounded" />
                <p className="text-white ml-2">Cartify</p>
              </div>
            </div>

            {/* Right side icons */}
            <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Cart Button with Badge */}
              <div className="relative">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => onAction(true)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View cart</span>
                  <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6" />
                </button>
                {selectedProduct.length > 0 && (
                  <span className="absolute z-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full bottom-5 right-6">
                    {selectedProduct.length}
                  </span>
                )}

                {/* Profile Button */}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View profile</span>
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
