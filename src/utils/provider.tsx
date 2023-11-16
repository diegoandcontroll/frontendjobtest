"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StyledComponentsRegistry from "src/lib/registry";

import ProviderRedux from "src/redux/provider";
import GlobalStyles from "@/styles/GlobalStyles";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <>
      <StyledComponentsRegistry>
        <ProviderRedux>
          <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
          
          {children}
          </QueryClientProvider>
        </ProviderRedux>
        <GlobalStyles />
      </StyledComponentsRegistry>
    </>
  );
}

export default Providers;
