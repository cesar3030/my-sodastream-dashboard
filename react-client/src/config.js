/*
* HEROKU
*/
//export const apiUrl = "https://my-sodastream-dashboard.herokuapp.com";

/*
* LOCAL Prod
*/
export const apiUrl = process.env.API_URL || "http://0.0.0.0:8080";

/*
* LOCAL Dev
*/
// export const apiUrl = "http://0.0.0.0:9000";