import type { TrpcRouter } from '@sub-tracker/backend/src/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<TrpcRouter>()

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryclient}>
      <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
