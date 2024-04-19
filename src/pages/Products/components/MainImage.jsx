import "./MainImage.scss";
export const MainImage = () => {
  return (
    <>
      <div className="row">
        <div className="info">
          <h1 className="info__title">Robusta Beans</h1>
          <p className="info__desc">From Africa</p>
          <div className="info__rating">
            <span className="material-symbols-outlined">star</span> 4.2 $
            <p className="info__rating__voted">(6,879)</p>
          </div>
        </div>
        <div className="info-img">
          <div className="info-img__row">
            <div className="info-img__icon">
              <img src="/src/assets/icons/bean-icon.svg" className="bean-icon" alt="bean" />
              <p>beans</p>
            </div>
            <div className="info-img__icon">
            <img src="/src/assets/icons/localization-icon.svg" className="localization-icon" alt="localization" />
              <p>Africa</p>
            </div>
          </div>
          <div className="info-img__roasted">Medium Roasted</div>
        </div>
      </div>
    </>
  );
};
