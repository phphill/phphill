import GlobalStyles from './global-styles';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <GlobalStyles />
    </>
  );

  // return <Navbar />;
}
