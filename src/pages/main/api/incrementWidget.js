export function incrementWidget(data) {
  return fetch(`https://tender-hack-backend.herokuapp.com/api/v1/widgets/${data}/increment`, 
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