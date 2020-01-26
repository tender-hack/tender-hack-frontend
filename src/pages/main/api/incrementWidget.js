export function incrementWidget(data) {
  return fetch(`http://10.20.1.91:8080/api/v1/widgets/${data}/increment`, 
    {
      method: "POST"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}