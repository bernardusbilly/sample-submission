import React from 'react';

interface InputMoneyProps {
  currCurrency: string,
  currMoney: number,
  handleChangeCurrency: Function,
  handleChangeMoney: Function,
}

const InputMoney: React.FC<InputMoneyProps> = ({ currCurrency, currMoney, handleChangeCurrency, handleChangeMoney }) => {
  return (
    <div id="InputMoney" className="input-group mb-3">
      <button style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{currCurrency}</button>
      <ul className="dropdown-menu">
        <li><p style={{ marginBottom: 0 }} className="dropdown-item" onClick={() => handleChangeCurrency('IDR')}>IDR</p></li>
        <li><p style={{ marginBottom: 0 }} className="dropdown-item" onClick={() => handleChangeCurrency('EUR')}>EUR</p></li>
      </ul>
      <input style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }} type="number" min="0" className="form-control" aria-label="Money input" onChange={(e) => handleChangeMoney(e)} defaultValue={currMoney} />
    </div>
  );
};

export default InputMoney;
