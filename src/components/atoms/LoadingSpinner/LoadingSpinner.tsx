'use client';
import { PulseLoader } from 'react-spinners';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <PulseLoader size={10} id="loader" color={'#C6007E'} />
    </div>
  );
};
