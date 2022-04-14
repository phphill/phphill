import Lottie from 'react-lottie';
import animationData from './json/coming-soon.json';

export function ComingSoon() {
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
