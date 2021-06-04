// import React from "react";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   return (
//     <div>
//       <nav
//         class="navbar navbar-expand-lg navbar-light"
//         style={{ background: "#111" }}
//       >
//         <div class="container-fluid">
//           {/* <img src={headerLogo} alt="" style={{ width: "80px" }} /> */}
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//               <li class="nav-item">
//                 <Link
//                   class="nav-link mr-5 active"
//                   aria-current="page"
//                   to="/home"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link
//                   class="nav-link mr-5 active"
//                   aria-current="page"
//                   to="/admain"
//                 >
//                   Admain
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link class="nav-link mr-5 text-white" to="review">
//                   Review
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link class="nav-link mr-5 text-white" to="contuctUs">
//                   Contuct us
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link class="nav-link mr-5 text-white" to="/login">
//                   Log in
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
/////////////////////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import { NavItem } from 'react-bootstrap';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <SideNav
        // style={{ backgroundColor: "#313131", color: "white" }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
              <Link to="/home">
                {" "}
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/home">Home</Link>
            </NavText>
          </NavItem>
          {/*  */}

          <NavItem eventKey="login">
            <NavIcon>
              <Link to="/login">
                {" "}
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Link to="/login">login</Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
