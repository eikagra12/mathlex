// Generated by CoffeeScript 1.6.1
(function() {
  var __slice = [].slice;

  $(function() {
    var path;
    $('#power-button').on('click', function(evt) {
      evt.preventDefault();
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        return $('body').removeClass('dark').addClass('light');
      } else {
        localStorage.theme = 'dark';
        return $('body').removeClass('light').addClass('dark');
      }
    });
    if ((localStorage.theme != null) && localStorage.theme === 'light') {
      $('body').addClass('light').removeClass('dark');
    } else {
      $('body').addClass('dark').removeClass('light');
    }
    path = function() {
      var arg, args, _i, _len, _results;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = args.length; _i < _len; _i++) {
          arg = args[_i];
          _results.push(arg.replace('@', '%syntaxhighlighter/scripts/'));
        }
        return _results;
      })();
      _results = [];
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        _results.push(arg.replace('%', "" + PATH_PREFIX + "javascripts/lib/"));
      }
      return _results;
    };
    if (typeof SyntaxHighlighter !== "undefined" && SyntaxHighlighter !== null) {
      SyntaxHighlighter.autoloader.apply(null, path('html @shBrushXml.js', 'js @shBrushJScript.js', 'shell @shBrushBash.js', 'coffeescript %shBrushCoffeeScript.js', 'python @shBrushPython.js', 'latex %shBrushLatex.js'));
      $.extend(SyntaxHighlighter.defaults, {
        toolbar: false
      });
      return SyntaxHighlighter.all();
    }
  });

}).call(this);
