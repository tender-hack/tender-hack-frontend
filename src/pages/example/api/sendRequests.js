export function sendRequests(data) {
  return fetch("https://javahack-purchase-api.herokuapp.com/api/v1/suppliers/call", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}