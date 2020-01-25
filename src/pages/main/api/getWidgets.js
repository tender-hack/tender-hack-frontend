export function getWidgets() {
  return fetch(`https://tender-hack-backend.herokuapp.com/api/v1/widgets`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => {
			console.log(data);
			return data;
		})
    .catch(err => console.log(err))
}