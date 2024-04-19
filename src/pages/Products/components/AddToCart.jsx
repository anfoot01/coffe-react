import "./AddToCart.scss";
export const AddToCart = () => {
  return (
    <>
     <div className="sizing">
            <h1 className="sizing__title">Size</h1>
            <div className="sizing__btn-group">
                <button className="sizing__btn">250g</button>
                <button className="sizing__btn">500g</button>
                <button className="sizing__btn">1000g</button>
            </div>

        </div>
        <div className="offer">
            <div className="offer__price">
                <p>Price</p>
                <h2><span>$</span>4.20</h2>
            </div>
            <button className="offer__add">Add to Cart</button>
        </div>
    </>
  );
};
