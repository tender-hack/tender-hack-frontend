export function addWidget() {
  return fetch(`http://10.20.1.91:8080/api/v1/widgets/save`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => {
			return data;
		})
    .catch(err => console.log(err))
}