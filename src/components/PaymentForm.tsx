import { useState } from 'react';
import CreditCard from './CreditCard';
import Price from './Price';
import UserInfo from './UserInfo';

const Form = () => {
  const [step, setStep] = useState(1);

  const [value, setValue] = useState({
    currency: '',
    amount: '',
    name: '',
    dateOfBirth: '',
    cardNumber: '',
    csv: '',
    date: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e: {
    target: HTMLInputElement | HTMLSelectElement;
  }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('value', value);
  };

  return (
    <form style={{ padding: '20px' }} onSubmit={handleSubmit}>
      {/* Step 1 */}
      {step === 1 && (
        <Price value={value} handleChange={handleChange} nextStep={nextStep} />
      )}
      {/* Step 2 */}
      {step === 2 && (
        <UserInfo
          value={value}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {/* Step 3 */}
      {step === 3 && (
        <CreditCard
          value={value}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )}
    </form>
  );
};

export default Form;
