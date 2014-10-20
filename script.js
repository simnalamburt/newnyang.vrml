function getPos(e) {
  var xyz = e.hitPnt;
  document.getElementById('result').innerHTML =
    'X : ' + xyz[0] + '<br>'+
    'Y : ' + xyz[1] + '<br>'+
    'Z : ' + xyz[2];
}

function changeColor(e) {
  var obj = e.hitObject;
  obj.querySelector('#color').diffusecolor =
    '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
}
