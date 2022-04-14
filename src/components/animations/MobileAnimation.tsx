import Lottie from 'react-lottie';
import animationData from './json/mobile-animation.json';

export function MobileAnimation() {
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
