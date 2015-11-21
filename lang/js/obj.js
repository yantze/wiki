// #1
var p = function(o) {
    this.a = 'b';
    this.b = o;
}

var c = new p('this is b');

p.prototype.d = function(t) {
    console.log(t);
}

c.d('help');

// #2
var p = function(o) {
    this.a = 'b';
    var pub = {
        demo: "demo"
        run: function() {
            this.b = a;
            console.log(b);
        },
    };
    return pub;
}

// if add '()' to end,such as function(o){}(),
// just get a single instance, equals `var c = new p(o);`

// #3


// ===
// # detail

// common snip
var p = function(opt) {
  this.options = {
    color: '#69C',
    height: '12px',
    duration: '1s',
  }

  if(opt && typeof opt === 'object'){
    for(var key in opt){
      this.options[key] = opt[key]
    }
  }
}
;(function(){
  window.onload = function(){
    var g = new p();
  }
}()
