import { useEffect, useState } from 'react';

type Key = 'cardNumber' | 'csv' | 'date';

type creditCardInfo = {
  value: Record<Key, any>;
  handleChange: (event: { target: HTMLInputElement }) => void;
  prevStep: () => void;
};

const CreditCard = ({ value, handleChange, prevStep }: creditCardInfo) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (
      !value.cardNumber ||
      value.cardNumber.length !== 16 ||
      !value.csv ||
      value.csv.length !== 3 ||
      !value.date
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [value.cardNumber, value.csv, value.date]);

  return (
    <div>
      <div className='mb-10'>
        <div>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            type='text'
            name='cardNumber'
            id='cardNumber'
            value={value.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='csv'>CSV</label>
          <input
            type='text'
            name='csv'
            id='csv'
            value={value.csv}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={value.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='flex'>
        <button type='button' onClick={prevStep}>
          Back
        </button>
        <button type='submit' disabled={disable}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreditCard;
