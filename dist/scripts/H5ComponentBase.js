var H5ComponentBase=function(e,t){var t=t||{},a=("h5_c_"+Math.random()).replace(".","_"),n=" h5_component_"+t.type,o=$('<div class="h5_component '+n+" h5_component_name_"+e+'" id="'+a+'">');return t.text&&o.text(t.text),t.width&&o.width(t.width/2),t.height&&o.height(t.height/2),t.addclass&&o.addClass(t.addclass),t.css&&o.css(t.css),t.bg&&o.css("backgroundImage","url("+t.bg+")"),t.center===!0&&o.css({marginLeft:t.width/4*-1+"px",left:"50%"}),"function"==typeof t.onclick&&o.on("click",t.onclick),o.on("onLoad",function(){return setTimeout(function(){o.addClass(n+"_load").removeClass(n+"_leave"),t.animateIn&&o.animate(t.animateIn)},t.delay||0),!1}),o.on("onLeave",function(){return setTimeout(function(){o.addClass(n+"_leave").removeClass(n+"_load"),t.animateOut&&o.animate(t.animateOut)},t.delay||0),!1}),o};