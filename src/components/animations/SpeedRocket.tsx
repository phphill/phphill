import Lottie from 'react-lottie';
import animationData from './json/speedy-rocket.json';

export function SpeedRocket() {
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
