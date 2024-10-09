(function() {
    var baseUrl = '/docs/';
    var originalAppendChild = Element.prototype.appendChild;
  
    Element.prototype.appendChild = function(element) {
      if (element.tagName === 'SCRIPT' && element.src && element.src.includes('inkeep')) {
        element.src = baseUrl + element.src.split('/').pop();
      }
      return originalAppendChild.call(this, element);
    };
  })();