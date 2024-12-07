

// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import Body from './Body';
// import { Outlet } from 'react-router-dom';
// import { UserContext } from "react";
// import userContext from './utils/UserContext';
// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
// import Footer from './Footer';
// import { AppContext } from '../AppContext';

// const App = () => {
//   const [userName, setUserName] = useState();
//   //authenticationn
//   useEffect(()=> {
//     const data = {
//       name: "Chitransh Baya"
//     }
//     setUserName(data.name);
//   }, []);
// <AppProvider>
//   return (
//     <Provider store={appStore}>
//   <userContext.Provider value={{loggedInUser: userName}}>
  
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
  
//   </userContext.Provider>
//   </Provider>
//   );
//   </AppProvider>
// };

// export default App;




// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import Body from './Body';
// import { Outlet } from 'react-router-dom';
// import userContext from './utils/UserContext';
// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
// import Footer from './Footer';
// import { AppProvider } from '../AppContext';

// const App = () => {
//   const [userName, setUserName] = useState();

//   // Authentication simulation
//   useEffect(() => {
//     const data = {
//       name: "Chitransh Baya"
//     };
//     setUserName(data.name);
//   }, []);

//   return (
//     // Wrap everything with the context providers properly
//     <AppProvider>
//       <Provider store={appStore}>
//         <userContext.Provider value={{ loggedInUser: userName }}>
//           <div>
//             <Header />
//             <Outlet />
//             <Footer />
//           </div>
//         </userContext.Provider>
//       </Provider>
//     </AppProvider>
//   );
// };

// export default App;



// import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Header from './Header';
// import { Outlet } from 'react-router-dom';
// import userContext from './utils/UserContext';
// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
// import Footer from './Footer';
// import { AppProvider } from './AppContext';



// const App = () => {
//   const [userName, setUserName] = useState();

//   // Simulate authentication
//   useEffect(() => {
//     const data = {
//       name: "Chitransh Baya"
//     };
//     setUserName(data.name);
//   }, []);

//   return (
//     <BrowserRouter>
//       <AppProvider>
//         <Provider store={appStore}>
//           <userContext.Provider value={{ loggedInUser: userName }}>
//             <div>
//               <Header />
//               <Outlet />
//               <Footer />
//             </div>
//           </userContext.Provider>
//         </Provider>
//       </AppProvider>
//     </BrowserRouter>
//   );
// };

// export default App;













import React from 'react'
import Header from'./Header';
//import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const AppLayout = () => {
  return (
   
    <Provider store={appStore}>
    <div className="app">
    <Header />
    <Outlet />
    </div>
    </Provider>
  )
}



export default AppLayout;


