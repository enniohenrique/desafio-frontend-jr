import marvel from '../assets/marvel.svg';

export const LogoMarvel = () => {
  return (
    <div className="max-w-[200px] after:content-[''] after:w-[55%] after:h-full after:bg-red-600 after:block relative after:absolute after:top-0">
      <img src={marvel} alt="" className="z-50 relative" />
    </div>
  );
};
