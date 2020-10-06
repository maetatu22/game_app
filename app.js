var c = document.createElement("canvas") //createElementはHTMLを自動生成できる
var ctx = c.getContext("2d");
c.width = 500;
c.height = 350;

document.body.appendChild(c); //appendChildメソッドを使うと指定した親ノードの最後に指定したノードを追加できる、今回の場合はcに代入されたcanvasを代入している

var perm = [];

while (perm.length < 255) {
  while (perm.includes(val = Math.floor(Math.random() * 255))) //Math.floorの引数に指定すると小数点が消える
  perm.push(val);
  }

var lerp = (a, b, t) => a + (b - a) * t;

var noise = x => {
  return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x -
  Math.floor(x));
 }

function loop (){
  ctx.fillStyle = "#19f"; //塗り潰しの色を変える
  ctx.fillRect(0,0,c.width, c.height);

  ctx.fillStyle = "black";

  ctx.beginPath();

  for(var i = 0; i < Array; i++){
    array[i]
  }
  requestAnimationFrame(loop);
}

loop();
