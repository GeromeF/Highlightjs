require([ 'jquery'], function($){ $(document).ready(function($) {
    $(window).load(function() {
        {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    });
}); });
