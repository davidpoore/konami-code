// David Poore, 6/30/2014
// But whatever, you can use it, it's stupid and bad
$(function(konami, $, undefined) {
  konami.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 16];
  konami.setup = function(functionToCall) {
    var func = functionToCall;
    var buffer = [];   
    $(document).keyup(function(event) {
      if (buffer.length == 11) { 
        if (event.keyCode == 13) {
          if (arraysIdentical(buffer, konami.code)) {
            func();
          }
        }
        buffer = buffer.slice(1,11);
        buffer.push(event.keyCode);
      } else {
        buffer.push(event.keyCode);
      }
    });
    
    // shamelessly copied from Tim Down on StackOverflow
    var arraysIdentical = function(a, b) {
      var i = a.length;
      if (i != b.length) return false;
      while (i--) {
          if (a[i] !== b[i]) return false;
      }
      return true;
    };
  };
}(window.konami = window.konami || {}, jQuery));