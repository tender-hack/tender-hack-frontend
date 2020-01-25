export function updateSuppliers(queryUid) {
  return fetch(`https://javahack-purchase-api.herokuapp.com/api/v1/history/queries/${queryUid}/suppliers`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}