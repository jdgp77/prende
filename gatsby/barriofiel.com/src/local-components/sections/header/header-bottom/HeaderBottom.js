import React, { Component } from 'react';
import './HeaderBottom.scss';
// import { Link } from "gatsby"
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import HomeIcon from '@material-ui/icons/Home';
// import Typography from "@material-ui/core/Typography";
// import ListItemText from "@material-ui/core/ListItemText";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";

class HeaderBottom extends Component {
  render() {
    return <div className="p-header-bottom" >
      <a>Home</a> > <a>Tienda</a>
      {/* <li> <Link to='/' >Inicio</Link> </li>
      <li> <Link to='/buscar' >Buscar</Link> </li>
      <li> <Link to='/quienes-somos' >Quienes somos</Link> </li> */}
    </div>
  }
}
export default HeaderBottom;

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// function ListItemLink(props) {
//   const { to } = props;
//   const primary = breadcrumbNameMap[to];

//   return (
//     <ListItemText primary={primary} />
//   );
// }
// ListItemLink.propTypes = {
//   to: PropTypes.string.isRequired
// };
// const breadcrumbNameMap = {
//   "/inicio": "Inicio",
//   "/buscar": "Buscar",
//   "/buscar/important": "Tienda",
//   "/quienes-somos": "Quienes Somos"
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "chocolate"
//   }
// }));

// export default function HeaderBottom() {
//   const classes = useStyles();

//   return (
//     <div className="p-header-bottom" >
//       <nav style={{ border: "1px solid black", display: "flex" }}>
//         <li style={{ border: "1px solid red", backgroundColor: "black", listStyleType: "none", display: "flex", height: "100%", padding: "8px 16px" }}>
//           <Link to='/' >Inicio</Link>
//         </li>
//         <li style={{ border: "1px solid red", backgroundColor: "black", listStyleType: "none", display: "flex", height: "100%", padding: "8px 16px" }}>
//           <Link to='/buscar' >Buscar</Link>
//         </li>
//         <li style={{ border: "1px solid red", backgroundColor: "black", listStyleType: "none", display: "flex", height: "100%", padding: "8px 16px" }}>
//           <Link to='/quienes-somos' >Quienes somos</Link>
//         </li>
//       </nav>

//       <div className={classes.root}>
//         <Link>
//           {({ location }) => {
//             const pathnames = location.pathname.split("/").filter(x => x);
//             return (
//               <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ border: "1px solid" }}>
//                 <Link color="inherit" to="/" style={{ display: "flex" }} >
//                   <HomeIcon />
//                 </Link>
//                 {pathnames.map((value, inicio) => {
//                   const last = inicio === pathnames.length - 1;
//                   const to = `/${pathnames.slice(0, inicio + 1).join("/")}`;

//                   return last ? (
//                     <Typography color="textPrimary" key={to}>
//                       {breadcrumbNameMap[to]}
//                     </Typography>
//                   ) : (
//                       <Link color="inherit" to={to} key={to}>
//                         {breadcrumbNameMap[to]}
//                       </Link>
//                     );
//                 })}
//               </Breadcrumbs>
//             );
//           }}
//         </Link>
//       </div>
//     </div>
//   );
// }
