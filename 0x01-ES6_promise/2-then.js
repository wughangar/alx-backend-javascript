export default function handleResponseFromAPI(promise) {
  /* eslint-disable */
  promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Error:', error);
      return new Error();
    });
}
