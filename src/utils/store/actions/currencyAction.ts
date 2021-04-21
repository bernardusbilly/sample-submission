import axios from 'axios';

import URI from '../../api/uri';

const addCurrency: Function = (curr: string) => {
  return async (next: any) => {
    try {
      return next({ type: 'ADD_CURRENCY', payload: curr });
    } catch (err) {
      console.log(err);
    };
  };
};

const addError: Function = (str: string) => {
  return async (next: any) => {
    try {
      return next({ type: 'ERRORS', payload: str });
    } catch (err) {
      console.log(err);
    };
  };
};

const getCurrencyExchange: Function = (base: any, arrCurr: any) => {
  return async (next: any) => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: base === 'EUR' ? URI.EUR : URI.IDR
      });

      const rates = data.rates;

      const output: any = arrCurr?.map((e: any) => {
        for (const key in rates) {
          if (key === e) return rates[key];
        };
        return null;
      });

      return next({ type: 'GET_CURRENCIES_RATES', payload: output });
    } catch (err) {
      console.log(err);
    };
  };
};

const getCurrencyList: Function = () => {
  return async (next: any) => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: URI.currList
      });

      let output = []

      for (const key in data) {
        output.push(key);
      };

      return next({ type: 'GET_CURRENCIES_LIST', payload: output });
    } catch (err) {
      console.log(err);
    };
  };
};

const getCurrencyName: Function = (arrCurr: any) => {
  return async (next: any) => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: URI.currList
      });

      const output: any = arrCurr?.map((e: any) => {
        for (const key in data) {
          if (key === e) return data[key];
        };
        return null;
      });

      return next({ type: 'GET_CURRENCIES_NAME', payload: output });
    } catch (err) {
      console.log(err);
    };
  };
};

const removeCurrency: Function = (curr: string) => {
  return async (next: any) => {
    try {
      return next({ type: 'REMOVE_CURRENCY', payload: curr });
    } catch (err) {
      console.log(err);
    };
  };
};

const resetError: Function = () => {
  return async (next: any) => {
    try {
      return next({ type: 'RESET_ERROR' });
    } catch (err) {
      console.log(err);
    };
  };
};

export { addCurrency, addError, getCurrencyExchange, getCurrencyList, getCurrencyName, removeCurrency, resetError };
