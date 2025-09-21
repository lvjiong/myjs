let obj = JSON.parse($response.body);

obj.hide = "true";

//console.log(obj);

$done({body: JSON.stringify(obj)});
