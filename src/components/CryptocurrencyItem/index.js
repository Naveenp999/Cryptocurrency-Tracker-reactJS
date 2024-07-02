import './index.css'

const CryptocurrencyItem = props => {
  const {content} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = content
  return (
    <li className="item">
      <div className="currency-logo-type">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="text">{currencyName}</p>
      </div>
      <p className="value">{usdValue}</p>
      <p className="value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
