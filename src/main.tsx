import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { rollbar } from "./Rollbar";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { App } from "@/App";
import { UserProvider } from "@/context/auth";
import { CartProvider } from "@/context/cart";
import { ErrorBoundaryComponent, ErrorBoundary } from "@/components/errors";
import { Spinner } from "@/components/loading";

import "react-lazy-load-image-component/src/effects/blur.css";

rollbar.log('La aplicación se está iniciando.');
// Configurar datos de despliegue
const deployData = {
  environment: 'production',
  revision: process.env.GITHUB_SHA,
};

function TestError() {
  const a = null;
  try {
    return a.hello();
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
}

rollbar.configure({ payload: { deploy: deployData } });


createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
          <TestError />
        </ErrorBoundary>
        <HelmetProvider>
          <UserProvider>
            <CartProvider>
              <BrowserRouter>
                <Box id=" principal ">
                  <App />
                </Box>
              </BrowserRouter>
            </CartProvider>
          </UserProvider>
        </HelmetProvider>
      </Suspense>
    </ChakraProvider>
  </StrictMode>
);
