;(function($, window, document, undefined) {
  
  $.fn.notClicked = function(callback) {
    
    return this.each(function() {
            
      $(document).click((function(e) {
        
        var $this = $(this);
                        
        if (!$this.is(e.target) && $this.has(e.target).length === 0) {
          callback.apply(this);
        }
        
      }).bind(this));
      
    });

  };
 
}(jQuery, window, document));
