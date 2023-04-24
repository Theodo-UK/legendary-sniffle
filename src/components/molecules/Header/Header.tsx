import Image from 'next/image';
import wizzAiLogo from '@public/wizzAiLogo.png';

export const Header = () => {
  return (
    <div className="flex justify-center">
      <Image src={wizzAiLogo} alt="Wizz Ai Logo" id="logoImage" />
    </div>
  );
};
