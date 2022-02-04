import { useState, useEffect } from 'react';

type userInfoProps = {
  value: { name: string; dateOfBirth: string };
  handleChange: (e: { target: HTMLInputElement }) => void;
  prevStep: () => void;
  nextStep: () => void;
};

const UserInfo = ({
  value,
  handleChange,
  nextStep,
  prevStep,
}: userInfoProps) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!value.name || !value.dateOfBirth) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [value.name, value.dateOfBirth]);

  return (
    <div className='mb-10'>
      <div className='mb-10'>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='dateOfBirth'>Date of birth</label>
          <input
            type='date'
            name='dateOfBirth'
            id='dateOfBirth'
            value={value.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='flex'>
        <button type='button' onClick={prevStep}>
          Back
        </button>
        <button type='button' onClick={nextStep} disabled={disable}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
