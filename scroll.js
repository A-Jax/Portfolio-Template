$("a").click(function(){ // click event on links
            
        var target = $(this.hash); // store link id location (this hash)

        $("html, body").animate({ // html and body to cover all browsers
            scrollTop: $(target).offset().top // scroll from top, to target location (offset)
        }, 700); // milisecond timer

        return false; // return false. no info to be used.

    });
