import "./CoffeeItems.scss"
import { Link } from 'react-router-dom';
export const CoffeeItems = () => {
    return (
        <div className="coffe">

    <a  className="item" >
      <div className="coffe__row">
      <Link   to="/product" >
        <img src="/src/assets/img/cappuccino_1.png" className="coffe__img" alt="coffee"></img>
        </Link>
        <p className="coffe__rating"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.72055 1.46235L6.45388 2.92902C6.55388 3.13319 6.82055 3.32902 7.04555 3.36652L8.37472 3.58735C9.22472 3.72902 9.42472 4.34569 8.81222 4.95402L7.77888 5.98735C7.60388 6.16235 7.50805 6.49985 7.56222 6.74152L7.85805 8.02069C8.09138 9.03319 7.55388 9.42485 6.65805 8.89569L5.41222 8.15819C5.18722 8.02485 4.81638 8.02485 4.58722 8.15819L3.34138 8.89569C2.44972 9.42485 1.90805 9.02902 2.14138 8.02069L2.43722 6.74152C2.49138 6.49985 2.39555 6.16235 2.22055 5.98735L1.18722 4.95402C0.578885 4.34569 0.774718 3.72902 1.62472 3.58735L2.95388 3.36652C3.17472 3.32902 3.44138 3.13319 3.54138 2.92902L4.27472 1.46235C4.67472 0.66652 5.32472 0.66652 5.72055 1.46235Z"
              fill="#D17842" />
          </svg>
          4.5
          </p>
      </div>
      <h2 className="coffe__title">Cappucino</h2>
      <p className="coffe__desc">With Steamed Milk</p>
      <div className="coffe__row">
        <h3 className="coffe__price">4.20 <span>$</span> </h3>
        
        <button className="coffe__btn ">+</button>

      </div>
    </a>
   

  
    <a  className="item" >
      <div className="coffe__row">
      <Link   to="/product" >
      <img src="/src/assets/img/cappuccino_2.png" className="coffe__img" alt="coffee"></img>
      </Link>
        <p className="coffe__rating"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.72055 1.46235L6.45388 2.92902C6.55388 3.13319 6.82055 3.32902 7.04555 3.36652L8.37472 3.58735C9.22472 3.72902 9.42472 4.34569 8.81222 4.95402L7.77888 5.98735C7.60388 6.16235 7.50805 6.49985 7.56222 6.74152L7.85805 8.02069C8.09138 9.03319 7.55388 9.42485 6.65805 8.89569L5.41222 8.15819C5.18722 8.02485 4.81638 8.02485 4.58722 8.15819L3.34138 8.89569C2.44972 9.42485 1.90805 9.02902 2.14138 8.02069L2.43722 6.74152C2.49138 6.49985 2.39555 6.16235 2.22055 5.98735L1.18722 4.95402C0.578885 4.34569 0.774718 3.72902 1.62472 3.58735L2.95388 3.36652C3.17472 3.32902 3.44138 3.13319 3.54138 2.92902L4.27472 1.46235C4.67472 0.66652 5.32472 0.66652 5.72055 1.46235Z"
              fill="#D17842" />
          </svg>
          4.2</p>
      </div>
      <h2 className="coffe__title">Latte</h2>
      <p className="coffe__desc">With Foam</p>
      <div className="coffe__row">
        <h3 className="coffe__price">4.20<span>$</span> </h3>
      
        <button className="coffe__btn ">+</button>
        
      </div>
    </a>
   
  </div>
    )
  }
  


