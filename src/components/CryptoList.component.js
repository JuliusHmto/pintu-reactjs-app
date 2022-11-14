import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '../css/CryptoList.styles.css'; 
import { thousandSeparator } from '../functions/App.function';
import { result } from 'lodash';

class CryptoListComponent extends Component {
  state = {  }

  componentDidMount = () => {
    const {getCryptoList, getPriceList} = this.props;
    getCryptoList();
    getPriceList();
  }

  renderCryptoList = (crypto) => {
    const color = result(crypto, 'color', '');
    const logo = result(crypto, 'logo', '');
    const currencySymbol = result(crypto, 'currencySymbol', '');
    const name = result(crypto, 'name', '');
    const latestPrice = thousandSeparator(result(crypto, 'latestPrice', ''));
    const day = result(crypto, 'day', '');
    const week = result(crypto, 'week', '');
    const month = result(crypto, 'month', '');

    return (
      <tr>
        <td><img src={logo} alt="" style={{ fill: color}}/></td>
        <td className="cryptoName">{name}</td>
        <td className="textAlignLeft">{currencySymbol}</td>
        <td className="textAlignRight">Rp {thousandSeparator(latestPrice)}</td>
        <td className={`textAlignRight ${day.includes('-') ? "red" : "green"}`}>{day}</td>
        <td className={`textAlignRight ${week.includes('-') ? "red" : "green"}`}>{week}</td>
        <td className={`textAlignRight ${month.includes('-') ? "red" : "green"}`}>{month}</td>
      </tr>
    );
  }

  render() { 
    const {cryptoAndPrice} = this.props;

    return (
      <div>
        <div className="titleSearchHeader">
          <h1 className="title">Harga Crypto dalam Rupiah hari ini</h1>
          <div className="inputContainer">
            <Input icon='search' placeholder='Search...' />
          </div>
        </div>
        <div>
        <ul className="navBarHeader">
          <li>
            <a href="#terbaru">
              <img className="iconSize" src={require("../images/terbaru.png")} alt=""/>
              <span className="spanText">
                Terbaru
              </span>
            </a>
          </li>
  
          <li>
            <a href="#defi">
              <img className="iconSize" src={require("../images/defi.png")} alt=""/>
              <span className="spanText">
                DeFi
              </span>
            </a>
          </li>
  
          <li>
            <a href="#nftgaming">
              <img className="iconSize" src={require("../images/nftgaming.png")} alt=""/>
              <span className="spanText">
                NFT/Gaming
              </span>
            </a>
          </li>
  
          <li>
            <a href="#cex">
              <img className="iconSize" src={require("../images/cex.png")} alt=""/>
              <span className="spanText">
                CEX
              </span>
            </a>
          </li>
  
          <li>
            <a href="#dex">
              <img className="iconSize" src={require("../images/dex.png")} alt=""/>
              <span className="spanText">
                DEX
              </span>
            </a>
          </li>
  
          <li>
            <a href="#layer1">
              <img className="iconSize" src={require("../images/layer1.png")} alt=""/>
              <span className="spanText">
                Layer-1
              </span>
            </a>
          </li>
  
          <li>
            <a href="#nifrastructure">
              <img className="iconSize" src={require("../images/infrastructure.png")} alt=""/>
              <span className="spanText">
                Infrastructure
              </span>
            </a>
          </li>
          
          <li>
            <a href="#lending">
              <img className="iconSize" src={require("../images/lending.png")} alt=""/>
              <span className="spanText">
                Lending
              </span>
            </a>
          </li>
  
          <li>
            <a href="#layer2">
              <img className="iconSize" src={require("../images/layer2.png")} alt=""/>
              <span className="spanText">
                Layer-2
              </span>
            </a>
          </li>
  
          <li>
            <a href="#stablecoin">
              <img className="iconSize" src={require("../images/stablecoin.png")} alt=""/>
              <span className="spanText">
                Ekosistem Stablecoin
              </span>
            </a>
          </li>
  
        </ul>
        </div>
        <div className="tokenListContainer">
          <table className="tokenListTable">
            <tr>
              <th></th>
              <th className="cryptoTitle">CRYPTO</th>
              <th></th>
              <th className="textAlignRight">HARGA</th>
              <th className="textAlignRight">24 JAM</th>
              <th className="textAlignRight">1 MGG</th>
              <th className="textAlignRight">1 BLN</th>
            </tr>
            {cryptoAndPrice.map(this.renderCryptoList)}
          </table>
        </div>
      </div>
      
    );
  }
}
 
export default CryptoListComponent;
