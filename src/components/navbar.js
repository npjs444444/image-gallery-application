import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='nav p-2 bg-dark text-white'>
      <div className='m-auto'>
        <Link
          to='/'
          style={{ fontWeight: "900", fontSize: "1.4em", color: "white" }}
        >
          LOGO
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
