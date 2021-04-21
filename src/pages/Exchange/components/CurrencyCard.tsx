import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface CurrencyCardProps {
  currCurrency: string,
  currentCurrencies: any,
  currentCurrenciesNames: any,
  currentCurrenciesRates: any,
  currMoney: number,
  handleExchangeCalc: Function,
  handleRemoveCurrency: Function,
  isLoading: boolean
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currCurrency,
  currentCurrencies,
  currentCurrenciesNames,
  currentCurrenciesRates,
  currMoney,
  handleExchangeCalc,
  handleRemoveCurrency,
  isLoading
}) => {
  return (
    <>
      {currentCurrencies?.map((e: any, idx: number) => (
        <div className="col-12 col-lg-6" key={idx}>
          <div className="card" style={{ borderRadius: 12 }}>
            <div className="card-body" style={{ display: 'flex' }}>
              <div className="col">
                {isLoading
                  ? <Skeleton />
                  : <p style={{ marginBottom: 0 }}>{`${e} - ${currentCurrenciesNames[idx]}`}</p>}
                {isLoading
                  ? <Skeleton />
                  : <p style={{ marginBottom: 0 }} className="text-secondary">1 {currCurrency} = {e} {currentCurrenciesRates[idx]}</p>}
              </div>
              <div className="col" style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end' }}>
                {isLoading
                  ? <Skeleton />
                  : <p style={{ marginBottom: 0, alignSelf: 'center' }}>{handleExchangeCalc(currMoney, currentCurrenciesRates[idx])}</p>}
                <button
                  className="btn btn-link text-primary"
                  style={{ padding: 8, marginLeft: 8, textDecoration: 'none' }}
                  onClick={() => handleRemoveCurrency(e)}
                >Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CurrencyCard;
