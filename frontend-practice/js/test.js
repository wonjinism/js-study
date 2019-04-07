/*..............................
GLOBAL VARIABLES
Below, make the following variables:
-a literal object variable to hold the mouse.x and mouse.y values
-variables to hold the color and size of our div elements
................................*/
$(function () {
  var clickCircle = false;
  var clickSquare = false;
  $('.select').on("click", function () {
    // alert($(this).attr('id'));
    var id = $(this).attr('id');
    var game = document.getElementById("gamearea");
    var mouse = {
      x: 0,
      y: 0
    };
    var color = "turquoise";
    var size = 20;
    var colors = "red orange yellow teal green blue purple brown lightblue".split(" ");
    if (id == 'circle' || id == 'square') {
      clickCircle = true;
      clickSquare = true;
    } else {
      clickCircle = false;
      clickSquare = false;
    }

    /*.................................
    DOT OBJECT
    Finish the Dot Object constructor started below. We need to make object properties and 2 methods: this.draw()  and this.fall()
    .................................*/
    function Dot(x, y, color) {
      //properties
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = 40;
      this.div = document.createElement("div");
      this.div.style.background = this.color;
      this.div.style.top = this.y + "px";
      this.div.style.left = this.x + "px";
      this.div.classList.add("dot");

      //methods
      this.draw = function () {
        this.div.style.width = this.size + "px";
        this.div.style.height = this.size + "px";
        game.appendChild(this.div);

      };
    }

    /*................................
    EVENT LISTENERS
    Finish the event listener so it will get the mouse coordinates when the user clicks in the game area
    .................................*/
    game.addEventListener("click", function (e) {
      if (!clickCircle == false) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        color = colors[Math.floor(Math.random() * colors.length)]
        var d = new Dot(mouse.x, mouse.y, color);
        d.draw();
        clickCircle = false;
        return;
      }

    });
  })
})

$(function () {
  var clickSquare = false;
  $('.select').on("click", function () {
    // alert($(this).attr('id'));
    var id = $(this).attr('id');
    var game = document.getElementById("gamearea");
    var mouse = {
      x: 0,
      y: 0
    };
    var color = "turquoise";
    var size = 20;
    var colors = "red orange yellow teal green blue purple brown lightblue".split(" ");
    if (id == 'square') {
      clickSquare = true;
    } else {
      clickSquare = false;
    }

    /*.................................
    DOT OBJECT
    Finish the Dot Object constructor started below. We need to make object properties and 2 methods: this.draw()  and this.fall()
    .................................*/
    function Square(x, y, color) {
      //properties
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = 40;
      this.div = document.createElement("div");
      this.div.style.background = this.color;
      this.div.style.top = this.y + "px";
      this.div.style.left = this.x + "px";
      this.div.classList.add("sq");

      //methods
      this.draw = function () {
        this.div.style.width = this.size + "px";
        this.div.style.height = this.size + "px";
        game.appendChild(this.div);

      };
    }

    /*................................
    EVENT LISTENERS
    Finish the event listener so it will get the mouse coordinates when the user clicks in the game area
    .................................*/
    game.addEventListener("click", function (e) {
      if (!clickSquare == false) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        color = colors[Math.floor(Math.random() * colors.length)]
        var s = new Square(mouse.x, mouse.y, color);
        s.draw();
        clickSquare = false;
      }

    });
  })
})