var H5_loading=function(n,o){this.el.fullpage({onLeave:function(n,o,e){$(this).find(".h5_component").trigger("onLeave")},afterLoad:function(n,o){$(this).find(".h5_component").trigger("onLoad")}}),this.page[0].find(".h5_component").trigger("onLoad"),this.el.show(),o&&$.fn.fullpage.moveTo(o)};