export function startSearch(data) {
  return fetch("https://javahack-purchase-api.herokuapp.com/api/v1/search", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(resp => resp.json())
    .then(data => {
      return {...data, suppliers: data.suppliers.map(item => {
        return {...item, contactTypes: data.contactTypes};
      })
    }})
    .catch(err => console.log(err))
}