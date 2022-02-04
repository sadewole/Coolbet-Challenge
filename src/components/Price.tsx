import { useEffect, useState } from 'react';

type priceProps = {
  value: { currency: string; amount: string };
  handleChange: (e: { target: HTMLInputElement | HTMLSelectElement }) => void;
  nextStep: () => void;
};

const Price = ({ value, handleChange, nextStep }: priceProps) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!value.currency || !value.amount) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [value.amount, value.currency]);

  return (
    <div className='mb-10'>
      <div className='flex mb-10'>
        <label htmlFor='currency'>Amount</label>
        <select
          name='currency'
          id='currency'
          value={value.currency}
          onChange={handleChange}
        >
          <option value=''></option>
          <option value='euro'>Euro</option>
          <option value='dollar'>Dollar</option>
        </select>
        <input
          type='text'
          name='amount'
          id='amount'
          value={value.amount}
          onChange={handleChange}
        />
      </div>

      <button type='button' onClick={nextStep} disabled={disable}>
        Continue
      </button>
    </div>
  );
};

export default Price;
