function changeColor(e) {
  console.log(e);

  var obj = e.hitObject;
  obj.querySelector('#color').diffusecolor =
    '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
}
