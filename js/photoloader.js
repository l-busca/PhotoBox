let serveur_url="";

function init(adresse){
  serveur_url=adresse;
}

function load(uri){
  return axios.request( {
 url : serveur_url+uri
,
 method : 'get', // default

 withCredentials : true, // true
 responseType: 'json' // default, text,stream,document,blob)
}
}
