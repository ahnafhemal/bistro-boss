import { Parallax } from 'react-parallax';


const BannerCover = ({bgImage,coverTitle,coverPara}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgImage}
        bgImageAlt="the dog"
        strength={-200}
    >
             <div className="hero h-[700px]" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
            <p className="mb-5">{coverPara}</p>
          </div>
        </div>
      </div>
    </Parallax>
  
    );
};

export default BannerCover;