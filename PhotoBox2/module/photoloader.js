let serverUrl;
export let current;
export let prevP;
export let nextP;
let gallery = document.querySelector('#photobox-gallery');
export function init(url) {serverUrl = url;}

export function load(url){
    current = url;
    console.log(serverUrl+url);
    return axios
        .get(serverUrl + url,{
            withCredentials: true,
            responseType: 'json', // default
        })
        .then(response => response)
        .catch(error => console.log(error));
}