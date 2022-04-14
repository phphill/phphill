import Lottie from 'react-lottie';
import animationData from './json/web-and-mobile-blue.json';

export function AnimationWebMobileBlue() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} />;
}
