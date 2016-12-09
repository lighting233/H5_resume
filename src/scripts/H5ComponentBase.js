//基本图文组件对象
var H5ComponentBase = function (name, cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_' + Math.random()).replace('.', '_');

    var cls = ' h5_component_' + cfg.type;
    var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name+'" id="' + id + '">');

    cfg.text && component.html(cfg.text);
    /*if(cfg.width && cfg.height){
        component.width(cfg.width/2);
        component.height(cfg.height/2);
    }else {
        if(document.body.clientWidth > 750){
            component.width(400);
            component.height(400);
        }else if(document.body.clientWidth >375 && document.body.clientWidth< 750){
            component.width(300);
            component.height(300);
        }else {
            component.width(200);
            component.height(200);
        }
    }*/

    if(document.body.clientWidth > 750){
        component.width((cfg.width/2)*1.8);
        component.height((cfg.height/2)*1.8);
    } else if(document.body.clientWidth >450 && document.body.clientWidth< 750){
        component.width((cfg.width/2)*1.5);
        component.height((cfg.height/2)*1.5);
    }else if(document.body.clientWidth >400 && document.body.clientWidth< 450){
        component.width((cfg.width/2)*1.3);
        component.height((cfg.height/2)*1.3);
    }else if(document.body.clientWidth >350 && document.body.clientWidth< 400){
        component.width((cfg.width/2)*1.2);
        component.height((cfg.height/2)*1.2);
    }else {
        component.width(cfg.width/2);
        component.height(cfg.height/2);
    }

    /*cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);*/


    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

    if (cfg.center === true){
        component.css({
            marginLeft:(component.width()/2* -1)+'px',
            left:'50%'
        })
    }

    if(typeof cfg.onclick === 'function'){
        component.on('click',cfg.onclick)
    }

    if(typeof cfg.hoverIn === 'function'){
        component.hover(cfg.hoverIn,cfg.hoverOut)
    }

    component.on('onLoad', function () {
        setTimeout(function () {
            component.addClass(cls+'_load').removeClass(cls+'_leave');
            cfg.animateIn && component.animate(cfg.animateIn);
            cfg.addClass && component.addClass(cfg.addClass);
        },cfg.delay || 0);

        //防止事件冒泡
        return false;
    });
    component.on('onLeave', function () {
        setTimeout(function () {
            component.addClass(cls+'_leave').removeClass(cls+'_load');
            cfg.animateOut && component.animate(cfg.animateOut);
        },cfg.delay || 0);

        return false;
    });

    return component;
};