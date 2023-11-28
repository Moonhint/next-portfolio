import type { AppProps } from 'next/app';
import { NextUIProvider } from "@nextui-org/react";
import { GlobalContextProvider } from '@/contexts/GlobalContext';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
      <NextUIProvider>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </NextUIProvider>
    )
}
