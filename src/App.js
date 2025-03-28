import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"; 
import Body from "./components/Body.js";
import About from "./components/About.js";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// Create the React element structure
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement(
//             "div",
//             { id: "child" },
//             [
//                 React.createElement("h1", {}, "Hi sona"),
//                 React.createElement("h2", {}, "I'm in h2 tag"),
//             ]
//         ),
//         React.createElement(
//             "div",
//             { id: "child" },
//             [
//                 React.createElement("h1", {}, "whatsapp buddy!"),
//                 React.createElement("h2", {}, "I'm in h2 tag"),
//             ]
//         ),
//     ]
// );

// Render the React structure into the root element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
 
// React.createElement => ReactElement.JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Namaste React"
// );
// console.log(heading);
// JSX(transpiled before it reaches the JS Engine) - HTML-like or XML-like syntax 
// JSX => Babel transpiles it to React.createElement => ReactElement.JS Object => HTMLElement(render)

// const jsxHeading = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);
// console.log(jsxHeading)

// const elem = <span>React Element</span>;

// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         {/* {elem} */}
//         Namaste React using JSX!!!
//         </h1>
// );
// const HeadingComponent = () => (
//     <div id="container">
//     <Title/>
//     {Title()} 
//     <Title></Title> */}
    /* All are same */
//      {111*111} --> It works
//     <h1 className="heading">Namaste React Function Component</h1>
//     </div>
// );
// const HeadingComponent1 = () => <h1 className="heading">Namaste React using JSX</h1>;


const AppLayout = () =>{
    // console.log(<Body/>);
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        
        children:
        [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>, 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        // errorElement:<Error/>,
     },
     
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import Header from "./components/Header.js"; 
// // import Body from "./components/Body.js";
// // import About from "./components/About.js";
// // import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// // const AppLayout = () => {
// //     return (
// //         <div className="app">
// //             <Header/>
// //              <Outlet/>{/* This is where child routes will be rendered */}
// //         </div>
// //     );
// // };

// // const appRouter = createBrowserRouter([
// //     {
// //         path: "/",
// //         element: <AppLayout/>,
// //         children: [
// //             {
// //                 index: true,    
// //                 element: <Body/>,
// //             },
// //             {
// //                 path: "about",
// //                 element: <About/>,
// //             },
// //         ]
// //     },
// // ]);
// // // console.log(appRouter);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //     <React.StrictMode>
// //         <RouterProvider router={appRouter} />
// //     </React.StrictMode>
// // );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
// import Body from "./components/Body.js";
// import About from "./components/About.js";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // Define layout for the app
// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header />
//             {/* Outlet to render child routes */}
//             <Outlet />
//         </div>
//     );
// };

// // Define routes
// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <Body />,
//             },
//             {
//                 path: "/about",
//                 element: <About />,
//             },
//         ],
//     },
// ]);

// // Create root and render router
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
