'use client';
import { PulseLoader } from 'react-spinners';

export const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <PulseLoader size={10} id="loader" color={'#C6007E'} />
    </div>
  );
};
