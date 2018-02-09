$( document ).ready(function() {
    $("#in").keyup(function() {
      var text = $(this).val();
      $("#txt").text("[" + text + "]")
      setTimeout(canv, 200);
    });
    resize();
});

$( window ).resize(resize());


function resize() {
  $("#U").css("font-size", $("#U").css("height"))
  var max_size = $("#txt_container").css("height");
  $("#txt").css("line-height", max_size);
  fitty("#txt", {minSize: 10, maxSize: parseInt(max_size), multiline: false});
}

function canv() {

  var c = document.getElementById("canvas");
  var font_size = parseInt($("#txt").css("font-size"))/$("#UFSC").height() * 800;
  var text = $("#txt").text();
  var ctx = c.getContext("2d");
  var img = new Image;
  ctx.clearRect(0, 0, c.width, c.height);

  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = "white";
    ctx.font = font_size +"px Verdana, Geneva, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(text.toUpperCase(), 560, 430);
  };
  img.src = "bg.png";

}

function down() {

  $("#download").attr("href", (document.getElementById("canvas").toDataURL()))

}