const init: any = {
  currencyList: [],
  currentCurrencies: ['USD', 'SGD'],
  currentCurrenciesNames: [],
  currentCurrenciesRates: [],
  errors: null,
  isLoading: true
};

const currencyReducer = (state: any = init, action: any) => {

  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true, errors: null };
    case 'ERRORS':
      return state.errors === null
        ? { ...state, errors: [action.payload] }
        : { ...state, errors: [...state.errors, action.payload] };
    case 'ADD_CURRENCY':
      return !state.currentCurrencies.includes(action.payload)
        ? { ...state, currentCurrencies: [...state.currentCurrencies, action.payload] }
        : { ...state, errors: ['Currency already added.'] };
    case 'GET_CURRENCIES_NAME':
      return { ...state, currentCurrenciesNames: action.payload };
    case 'GET_CURRENCIES_LIST':
      return { ...state, currencyList: action.payload };
    case 'GET_CURRENCIES_RATES':
      return { ...state, currentCurrenciesRates: action.payload, isLoading: false };
    case 'REMOVE_CURRENCY':
      const output: any = state.currentCurrencies.filter((e: any) => {
        if (e !== action.payload) return e;
        return null;
      });
      return { ...state, currentCurrencies: output };
    case 'RESET_ERROR':
      return { ...state, errors: null };
    default:
      return state;
  };
};

export default currencyReducer;
