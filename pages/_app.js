import CartContextProvider from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  }

  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins'; /* Remove ', sans-serif' */
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />


<CartContextProvider>
<Component {...pageProps} />

</CartContextProvider>
      
    </>
  );
}
