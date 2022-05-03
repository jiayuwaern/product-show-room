import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
        <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  )
}
export default MyApp;
