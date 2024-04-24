const KEY = process.env.REACT_APP_KEY

export const apiService = async (url) => {

    const config = {
      method: "GET",
      hearders: {
        accept: 'application/json',
        Authorization: `Bearer ${KEY}`
      }
    }

    const res = await fetch(url, config)
      .then(res => res.json())
      .catch(err => console.error(err));

    return res
}