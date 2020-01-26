export function sendText(data) {
  return fetch(`http://10.20.1.91:8080/api/v1/chat/default`, 
    {
			method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
			body: JSON.stringify({text: data})
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}