const fetchApiUrl = (path) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${path}`)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(`${path} API Error!`));
};


const fetchData = () => {
  return Promise.all([
    fetchApiUrl("users"),
    fetchApiUrl("hydration"),
    fetchApiUrl("sleep"),
  ]);
};

export default { fetchData };