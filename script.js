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
    ctx.font = "bold 128px Verdana, Geneva, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("UFSC", c.width/2, c.height/4 + 20)

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


// Set caret position easily in jQuery
// Written by and Copyright of Luke Morton, 2011
// Licensed under MIT
(function ($) {
    // Behind the scenes method deals with browser
    // idiosyncrasies and such
    $.caretTo = function (el, index) {
        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move("character", index);
            range.select();
        } else if (el.selectionStart != null) {
            el.focus();
            el.setSelectionRange(index, index);
        }
    };

    // The following methods are queued under fx for more
    // flexibility when combining with $.fn.delay() and
    // jQuery effects.

    // Set caret to a particular index
    $.fn.caretTo = function (index, offset) {
        return this.queue(function (next) {
            if (isNaN(index)) {
                var i = $(this).val().indexOf(index);

                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }

                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }

            next();
        });
    };

    // Set caret to beginning of an element
    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

    // Set caret to the end of an element
    $.fn.caretToEnd = function () {
        return this.queue(function (next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };
}(jQuery));
