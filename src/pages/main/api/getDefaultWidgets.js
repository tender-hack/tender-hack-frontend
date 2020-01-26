export function getDefaultWidgets() {
  return fetch(`http://10.20.1.91:8080/api/v1/widgets/default`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => {
			console.log(data);
			return data;
		})
    .catch(err => console.log(err))
}