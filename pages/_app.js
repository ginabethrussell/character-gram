import '../styles/globals.css';
import { StoreProvider } from '../context/Store';
import { initialState, starWarsReducer } from '../context/starWarsReducer';

function MyApp({ Component, pageProps }) {

  return (
    <StoreProvider initialState={initialState} reducer={starWarsReducer}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp
