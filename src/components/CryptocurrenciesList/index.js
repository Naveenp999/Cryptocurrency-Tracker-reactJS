import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencylist: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const rawData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await rawData.json()

    const newList = data.map(item => ({
      id: item.id,
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      currencyLogo: item.currency_logo,
    }))

    this.setState({isLoading: false, currencylist: newList})
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  list = () => {
    const {currencylist} = this.state
    return (
      <div className="sub-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-img"
        />
        <ul className="currency-list">
          <li className="currency-item">
            <p className="type">Coin Type</p>
            <p className="value">USD</p>
            <p className="value">EURO</p>
          </li>
          {currencylist.map(element => (
            <CryptocurrencyItem key={element.id} content={element} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading === true ? this.loader() : this.list()
  }
}

export default CryptocurrenciesList
