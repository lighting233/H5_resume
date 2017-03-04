/**
 * Created by light on 2016/11/14.
 */

    /* 内容管理对象 */




    var H5 = function () {

        this.id = ('h5_'+Math.random()).replace('.','_');
        this.el = $('<div class="h5" id="'+this.id+'">').hide();
        this.page = [];
        $('body').append(this.el);

        //新增一个页
        this.addPage = function (name,text) {


            var  page = $('<div class="h5_page section">');
            if(name != undefined){
                page.addClass('h5_page_'+name);
            }
            if(text != undefined){
                page.text(text);
            }
            this.el.append(page);
            this.page.push(page);

            if (typeof this.whenAddPage === 'function'){
                this.whenAddPage();
            }
            return this;
        };

        //新增一个组件
        this.addComponent = function (name,cfg) {




            var cfg = cfg || {};
            cfg = $.extend({type:'base'
            },cfg);

            var component;
            var page = this.page[this.page.length-1];

            switch (cfg.type){
                case 'base':
                    component = new H5ComponentBase(name,cfg);
                    break;
                case 'polyline':
                    component = new H5ComponentPolyline(name,cfg);
                    break;
                case 'pie':
                    component = new H5ComponentPie(name,cfg);
                    break;
                case 'bar':
                    component = new H5ComponentBar(name,cfg);
                    break;
                case 'bar_v':
                    component = new H5ComponentBar_v(name,cfg);
                    break;
                case 'radar':
                    component = new H5ComponentRadar(name,cfg);
                    break;
                case 'ring':
                    component = new H5ComponentRing(name,cfg);
                    break;
                case 'point':
                    component = new H5ComponentPoint(name,cfg);
                    break;
                /*case 'clock':
                    component = new H5ComponentClock(name,cfg);
                    break;*/

                default:
            }

            page.append(component);
            return this;
        };
        //H5对象初始化呈现
        this.loader = function ( firstPage ) {
            this.el.fullpage({

                onLeave: function (index,nextIndex,direction) {
                    $(this).find('.h5_component').trigger('onLeave');
                },
                afterLoad: function (anchorLink,index) {
                    $(this).find('.h5_component').trigger('onLoad');
                }
            });
            this.page[0].find('.h5_component').trigger('onLoad');
            this.el.show();
            if(firstPage){
                $.fn.fullpage.moveTo(firstPage);
            }
        };
        this.loader = typeof H5_loading =='function' ? H5_loading : this.loader;
        return this;
    };
