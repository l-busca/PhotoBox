let serverUrl="";

export function init(adresse){
  serverUrl=adresse;
}

export function load2(uri){
  console.log(server_url+uri);
  return axios.request( {
    url : serveur_url+uri,
    headers:  {
        'X-Requested-With': 'XMLHttpRequest'
    },
    method : 'get', // default

    withCredentials : true, // true
    responseType: 'json' // default, text,stream,document,blob)
  });
}



export let current;
export let prevP;
export let nextP;
let gallery = document.querySelector('#photobox-gallery');

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
