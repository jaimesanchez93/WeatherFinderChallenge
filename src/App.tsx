import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormContainer from './components/FormContainer';


const App = () => {

   return (
      <div data-testid="app">
         <div className="wrapper">
            <div className="main">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-5 title-container">
                        <div>
                           <h1 className="title-container__title">Weather Finder</h1>
                           <h3 className="title-container__subtitle">
                              Find out temperature, conditions and more...
                    </h3>
                        </div>
                     </div>
                     <FormContainer />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}



export default App;