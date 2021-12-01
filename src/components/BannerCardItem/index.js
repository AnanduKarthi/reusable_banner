import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <div>
      <li className={`${className} card-container`}>
        <div className="card-text-container">
          <h1 className="header">{headerText}</h1>
          <p className="discretion">{description}</p>
          <button className="button" type="button">
            show more
          </button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
