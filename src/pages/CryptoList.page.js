import React, { Component } from 'react'
import { connect } from 'react-redux';
import { result } from "lodash";
import { getCryptos, getPrices, removeObjectWithCurrencySymbol } from "../functions/App.function";
import CryptoListComponent from '../components/CryptoList.component';

class CryptoListPage extends Component {
    state = {  } 
    render() { 
        const {cryptoList, priceList, getCryptoList, getPriceList} = this.props;

        const removeNoDataCrypto = removeObjectWithCurrencySymbol(cryptoList, 'Rp');
        const cryptoAndPrice = removeNoDataCrypto.map(crypto => ({ 
            ...crypto, 
            ...priceList.find(price => price.pair.includes(crypto.currencySymbol.toLowerCase())) 
          }));

        return (
            <CryptoListComponent cryptoAndPrice={cryptoAndPrice} getCryptoList={getCryptoList} getPriceList={getPriceList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoList: result(state, 'cryptos.0.payload', []),
        priceList: result(state, 'prices.0.payload', []),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCryptoList: () => {
            dispatch(getCryptos());
        },
        getPriceList: () => {
            dispatch(getPrices());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoListPage);