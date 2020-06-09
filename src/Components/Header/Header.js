import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="header" className="container-fluid">
            <div className="row">
               <div className="col">
                  <h1 className="text-center display-4">Mood Manager</h1>
               </div>
            </div>
   
           <div className="row">
              <div className="col">
                 <h3 className="text-center">How are you feeling today?</h3>
              </div>
           </div>
         </div>
        )
    }
}

export default Header;