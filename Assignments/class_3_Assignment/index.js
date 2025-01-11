import React from "react";
import ReactDOM from "react-dom/client";
import guitar from "./guitar.jpg";
import userIcon from "./userIcon.png"
import search from "./icon.png";









// const Header = React.createElement(
//   "div",
//   {
//     className: "Title",
//     key: "title",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "This is h1 Tag"
//     ),
//     React.createElement(
//         "h2",
//         {
//           key: "h2",
//         },
//         "This is h2 Tag"
//       ),
//       React.createElement(
//         "h3",
//         {
//           key: "h3",
//         },
//         "This is h3 Tag"
//       )
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Header);



// // Q: Create the same element using JSX
// const header = (
//   <div className="Title" key="title">
//     <h1 key="h1">This is h1 tag</h1>
//     <h2 key="h2">This is h2 tag</h2>
//     <h3 key="h3">This is h3 tag</h3>
//   </div>
// );

// // Q: Create a functional component of the same with JSX
// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// // Q: Pass attribute into the tag in JSX
// // {{color:"palevioletred"}} -> this expression whole called jsx embeded inside js object. ({color:"palevioletred"} -> this is js object)
// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };


// // Composition of Component (Add a component inside another)
// const AnotherComponent = function(){
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <AnotherComponent/>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// // `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
 
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};








// const Header = () => {
//   return (
//     <div>
//       <header className="header">
//         <div className="left">
//           <img src={guitar} alt="Logo" />
//         </div>
//         <div className="center">
//           <input
//             className="input"
//             type="text"
//             placeholder="Search here"
//           />
//           <div className="btndiv">
//             <button className="btn" type="submit">
//                 <img className="imgbtn" src={search}></img>
//             </button>
//           </div>
//         </div>
//         <div className="right">
//           <img src={userIcon} alt="User Icon" />
//         </div>
//       </header>
//     </div>
//   );
// };





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);


















