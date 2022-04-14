import Lottie from 'react-lottie';
import animationData from './json/idea-bulb.json';

export function IdeaBulb() {
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
