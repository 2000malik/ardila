// app/providers.tsx
'use client';

import { theme } from '@/styles/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}> {children}</ChakraProvider>
    </CacheProvider>
  );
}
