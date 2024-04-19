import "./BeansItems.scss"
import { Link } from 'react-router-dom';
export const BeansItems = () => {
    return (
        <>
        
       
        
          <h1 className="beans__main-title">Coffee beans</h1>
         
          <div className="beans">
          
        <div className="beans">
        <a  className="item">
          <div className="beans__row">
          <Link className='nav-link'  to="/product" >
            <img src="/src/assets/img/robusta_beans.png" className="beans__img" alt="beans"></img>
            </Link>
          </div>
          <h2 className="beans__title">Robusta Beans</h2>
          <p className="beans__desc">Medium Roasted</p>
          <div className="beans__row">
            <h3 className="beans__price">4.20<span>$</span> </h3>
           
            <button className="beans__btn ">+</button>
        
          </div>
        </a>
      </div>
 
      
        <div className="beans">
        <a  className="item">
          <div className="beans__row">
          <Link className='nav-link'  to="/product" >
          <img src="/src/assets/img/cappuccino_beans.png" className="beans__img" alt="beans"></img>
          </Link>
          </div>
          <h2 className="beans__title">Mexico Beans</h2>
          <p className="beans__desc">With Steamed Milk</p>
          <div className="beans__row">
            <h3 className="beans__price">4.20<span>$</span> </h3>
            
            <button className="beans__btn ">+</button>
            
          </div>
        </a>
      </div>
      
      </div>
      
      </>
    )
  }
  