import { TrpcProvider } from './lib/trpc'
import { MySubscriptionsPage } from './pages/MySubscriptionPage'

export const App = () => {
  return (
    <TrpcProvider>
      <MySubscriptionsPage />
    </TrpcProvider>
  )
}
