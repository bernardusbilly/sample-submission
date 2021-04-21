const access_key: any = process.env.REACT_APP_ACCESS_KEY;

const URI = {
  currList: 'https://openexchangerates.org/api/currencies.json',
  EUR: `http://api.exchangeratesapi.io/latest?access_key=${access_key}&base=EUR`,
  IDR: 'https://my-json-server.typicode.com/Ralfarios/mock_idr_currency/idr'
};

export default URI;
