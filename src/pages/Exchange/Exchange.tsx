import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddCurrency from './components/AddCurrency';
import CurrencyCard from './components/CurrencyCard';
import ErrorAlert from './components/ErrorAlert';
import InputMoney from './components/InputMoney';
import MetaDecorator from '../../utils/helmet/MetaDecorator';
import { addCurrency, addError, getCurrencyExchange, getCurrencyList, getCurrencyName, removeCurrency, resetError } from '../../utils/store/actions/currencyAction';

import './styles/exchange.scss';

const Exchange: React.FC = () => {
  const dispatch = useDispatch();
  const {
    currencyList,
    currentCurrencies,
    currentCurrenciesNames,
    currentCurrenciesRates,
    errors,
    isLoading
  } = useSelector((state: any) => state.currency);
  const [currCurrency, setCurrCurrency] = useState('IDR');
  const [currMoney, setCurrMoney] = useState(20000);

  const handleAddCurrency: Function = (e: any) => {
    e.preventDefault();
    const val = e?.target?.currencies?.value;
    if (!val) return dispatch(addError('Please select the currency.'));

    dispatch(addCurrency(val));
    return e.target.currencies.value = '';
  };
  const handleExchangeCalc: Function = (money: number, currRate: number) => (money * currRate).toFixed(2).toString();
  const handleChangeCurrency: Function = (curr: string) => setCurrCurrency(curr);
  const handleChangeMoney: Function = (e: any) => setCurrMoney(e.target.value);
  const handleRemoveCurrency: Function = (curr: string) => dispatch(removeCurrency(curr));

  useEffect(() => {
    dispatch(getCurrencyExchange(currCurrency, currentCurrencies));
    dispatch(getCurrencyList());
    dispatch(getCurrencyName(currentCurrencies));
  }, [dispatch, currCurrency, currentCurrencies]);

  return (
    <div id="Exchange" >
      <MetaDecorator
        title="Exchange | Pandacurr."
        desc="Exchange from Indonesian Rupiah (IDR) or European Euro (EUR) to other currency in this world easily in this page. With Pandacurr. that such a task is possible."
      />

      <h1 style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontWeight: 600, paddingTop: 36 }}>Exchange Currency</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 64, height: 12, backgroundColor: '#0d6efd', margin: '24px 0 36px 0' }} />
      </div>

      <InputMoney
        currCurrency={currCurrency}
        currMoney={currMoney}
        handleChangeCurrency={handleChangeCurrency}
        handleChangeMoney={handleChangeMoney}
      />

      <div className="row gx-3 gy-3">
        <CurrencyCard
          currCurrency={currCurrency}
          currentCurrencies={currentCurrencies}
          currentCurrenciesNames={currentCurrenciesNames}
          currentCurrenciesRates={currentCurrenciesRates}
          currMoney={currMoney}
          handleExchangeCalc={handleExchangeCalc}
          handleRemoveCurrency={handleRemoveCurrency}
          isLoading={isLoading}
        />

        <ErrorAlert
          errors={errors}
          dispatch={dispatch}
          resetError={resetError}
        />

        <AddCurrency
          currencyList={currencyList}
          handleAddCurrency={handleAddCurrency}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Exchange;
