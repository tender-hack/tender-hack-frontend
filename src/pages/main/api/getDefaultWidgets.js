export function getDefaultWidgets() {
  return fetch(`https://tender-hack-backend.herokuapp.com/api/v1/widgets/default`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => {
			console.log(data);
			return data;
		})
    .catch(err => console.log(err))
}