fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => {
    if (!res.ok) {
      throw new Error(`status code ${res.status}`);
    } return res.json();
  })
  .then(data => console.log(data));
