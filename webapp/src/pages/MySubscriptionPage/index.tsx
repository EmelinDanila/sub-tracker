import { trpc } from '../../lib/trpc'

export const MySubscriptionsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc['get-subscriptions'].useQuery()
  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div>
      <h1>Sub-tracker</h1>
      <h2>My subscriptions</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Subscription</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Period</th>
            <th scope="col">Write-off date</th>
          </tr>
        </thead>
        <tbody>
          {data?.subs?.map((sub) => {
            return (
              <tr key={sub.id}>
                <th scope="row">{sub.subscription}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
