window.addEventListener('load',function(){
    var parent = document.getElementById('wrap');
    parent.style.display = 'none';
    function getScrollTop() {
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
    }
    if(document.documentElement.clientHeight > 730){
         $('#wrap').fadeIn('3000');
         parent.style.display = 'block';
    }
    else{
        window.addEventListener('scroll',function(){
            if(document.documentElement.clientHeight <= 730){
                if(parent.style.display == "block"){
                    if(getScrollTop() <= 280){
                        $('#wrap').fadeOut('3000');
                        setTimeout(function(){parent.style.display = 'none'},300);
                        
                    }
                }
                else if(parent.style.display == "none"){
                    if(getScrollTop() > 280){
                        $("#wrap").fadeIn("3000");
                        parent.style.display = 'block';
                        parent.style.display = "block";
                        
                    }
                }
            }
            else{
                $("#wrap").fadeIn("3000");
                parent.style.display = 'block';
            }
        },true);
    }
    window.onresize = function(){  
        if(document.documentElement.clientHeight > 728){
            $("#wrap").fadeIn("3000");
            parent.style.display = 'block';
        }
        else{
            $('#wrap').fadeOut('3000');
            setTimeout(function(){parent.style.display = 'none'},300);
        }
    } 

},true)