import Lottie from 'react-lottie';
import animationData from './json/system-analytics.json';

export function SystemAnalytics() {
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
