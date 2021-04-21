import React from 'react';

interface AddCurrencyProps {
  currencyList: any,
  handleAddCurrency: Function,
  isLoading: Boolean
};

const AddCurrency: React.FC<AddCurrencyProps> = ({ currencyList, handleAddCurrency, isLoading }) => {
  return (
    <form onSubmit={(e) => handleAddCurrency(e)} style={{ display: 'flex', gap: '1rem', marginBottom: 16, marginTop: 16 }} >
      <select id="currencies" style={{ borderRadius: 12 }} className="form-select" aria-label="select currency">
        <option value="">-- Select Currency --</option>
        {currencyList?.map((e: any, idx: number) => <option value={e} key={idx}>{e}</option>)}
      </select>
      {isLoading
        ? <button style={{ borderRadius: 12 }} className="btn btn-primary" disabled={true}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
        : <input style={{ borderRadius: 12 }} className="btn btn-primary" type="submit" value="Add" />}
    </form>
  );
};

export default AddCurrency;
