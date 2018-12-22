export default class ApiRequest {
  
  static fetch(url, beginFunction, sucessfunction, errorFunction){
    return dispatch => {
      dispatch(beginFunction());
      return fetch(`${process.env.REACT_APP_API_URL}${url}`)
        .then(ApiRequest.handleErrors)
        .then(res => res.json())
        .then(value => {
          dispatch(sucessfunction(value));
          return value;
        })
        .catch(error => dispatch(errorFunction(error)));
    };
  }

  static post(url, payload, beginFunction, sucessfunction, errorFunction){
    return dispatch => {
      dispatch(beginFunction());
      
      const searchParams = new URLSearchParams();
      for (const prop in payload) {
        searchParams.set(prop, payload[prop]);
      }

      return fetch(`${process.env.REACT_APP_API_URL}${url}`,{
          method: "POST",
          body: searchParams
        })
        .then(ApiRequest.handleErrors)
        .then(res => res.json())
        .then(value => {
          dispatch(sucessfunction(value));
          return value;
        })
        .catch(error => dispatch(errorFunction(error)));
    };
  }

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
} 
