const AS_URL_BASE = "";

let url = document.location.href;
let k = url.substr(url.lastIndexOf("k=")+2);

if(k){
    fetch(AS_URL_BASE+"?k="+k)
    .then(r=>r.text())
    .then((r)=>{
        console.log(r);

        if(r){
            document.location.replace(r);

        }
        
    })
    .catch(err=>console.log(err))
}