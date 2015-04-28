;(function($, window, document, undefined) {
  
  $.fn.notClicked = function(callback) {
    
    return this.each(function() {
      
      var $this = $(this);
      
      $(document).click(function(e) {
                        
        if (!$this.is(e.target) && $this.has(e.target).length === 0) {
          callback.apply(this);
        }
        
      });
      
    });

  };
 
}(jQuery, window, document));