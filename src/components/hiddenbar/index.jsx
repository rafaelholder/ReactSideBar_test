import React, { useEffect, useState } from 'react'
import menu from '../../assets/images/menu.svg';
import search from '../../assets/images/search.svg';
import grid from '../../assets/images/grid.svg';
import pet from '../../assets/images/pet.svg';
import user from '../../assets/images/user.svg';
import vet from '../../assets/images/vet.svg';
import settings from '../../assets/images/settings.svg';
import logo from '../../assets/images/logo.svg';
import photo from '../../assets/images/photo.jpg';
import logOut from '../../assets/images/log-out.svg';

import './index.css'



const HiddenBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    var myDivClosed = 'sidebar-closed';
    var myDivOpen = 'sidebar-open';
    var myDiv = document.getElementById('sidebar') || {};
    //console.log(myDiv);
    
    const handleToggleSidebar = () => {
        if(isOpen === true){
            myDiv.className ='sidebar-closed';
            
            setIsOpen(false);
        }
        else{
            
            myDiv.className = 'sidebar-open';
            setIsOpen(true)
        }
        
    }

    const handleDashboard = () => {
        if(isOpen === true){
            myDiv.className ='sidebar-closed';
            myDivClosed = myDivOpen;
            setIsOpen(false);
        }
    }

   

        return (
            <div className='container'>
                

                {/* {isOpen && ( */}
                
                    <div className={myDivClosed} id='sidebar'>
                        <ul>
                            <li>
                                {(isOpen ) && (
                                    <div className='logo-button'>
                                        <img src={logo} alt="" />
                                        <button onClick={handleToggleSidebar}>  
                                            <img src={menu} alt="" /> 
                                        </button>
                                    </div>   
                                )}
                                {(isOpen === false) && (
                                    <div>
                                        <button onClick={handleToggleSidebar}>  
                                            <img src={menu} alt="" /> 
                                        </button>
                                    </div>
                                )}
                                
                            </li>
                            <li>
                                <button>
                                    <img src={search} alt="svg"/>
                                    { isOpen && (
                                        <p>busca</p> 
                                    )}    
                                </button>  
                            </li>
                            <li>
                                <button onClick={handleDashboard}>
                                    <img src={grid} alt="svg"/>
                                    { isOpen && (
                                        <p>dashboard</p> 
                                    )} 
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={pet} alt="svg"/>
                                    { isOpen && (
                                        <p>Pets</p> 
                                    )} 
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={user} alt="svg"/>
                                    { isOpen && (
                                        <p>clientes</p> 
                                    )}  
                                </button>

                            </li>
                            <li>
                                <button>
                                    <img src={vet} alt="svg"/>
                                    { isOpen && (
                                        <p>vets</p> 
                                    )}   
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={settings} alt="svg"/>
                                    { isOpen && (
                                        <p>ajustes</p> 
                                    )}    
                                </button>
                            </li>
                        </ul>
                        
                        <div>
                            {/* div */}
                        </div>
                    </div>
                        {isOpen && (
                            <div className='user-profile-open'>
                                <div className='photo-name'>
                                    <img src={photo} alt="" />
                                    <p>
                                        Nome:
                                        Cargo: 
                                    </p>
                                </div>
                                <img src={logOut} alt="logOut button"/>
                            </div>
                                
                        )}
                        {(isOpen === false) && (
                            <div className='user-profile'>
                                <button>
                                    <img src={logOut} alt="logOut button"/>
                                </button>
                            </div>
                        )}
                        
                    
                    
                
                
            </div>
                
            
                
        )
   

  
}

export default HiddenBar