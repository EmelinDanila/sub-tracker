export const App = () => {
  const subs = [
    { id: '1', subscription: 'Subscription 1' },
    { id: '2', subscription: 'Subscription 2' },
    { id: '3', subscription: 'Subscription 3' },
    { id: '4', subscription: 'Subscription 4' },
    { id: '5', subscription: 'Subscription 5' },
  ]
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
          {subs.map((sub) => {
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
