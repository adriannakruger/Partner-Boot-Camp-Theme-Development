define(["modules/jquery-mozu","modules/backbone-mozu","modules/models-cart"],function(t,e,n){var a=e.MozuView.extend({templateName:"modules/soft-cart",goToCart:function(){return window.location="/cart",!1},changeQuantity:function(e,n){var a=t(e.currentTarget),o=a.data("mz-cart-item"),i=this.model.get("items").get(o);return i.set("quantity",i.get("quantity")+n),i.saveQuantity()},increaseQuantity:function(t){return this.changeQuantity(t,1)},decreaseQuantity:function(t){return this.changeQuantity(t,-1)},removeItem:function(e){var n=t(e.currentTarget),a=n.data("mz-cart-item");return this.model.removeItem(a),!1}}),o={update:function(){return this.model.apiGet()},show:function(){this.view.$el.addClass("is-active");var e=this,n=function(a){e.view.el===a.target||t.contains(e.view.el,a.target)||(e.view.$el.removeClass("is-active"),t(document.body).off("click",n))};t(document.body).on("click",n)}};return t(document).ready(function(){o.model=new n.Cart,o.view=new a({el:t('[data-mz-role="soft-cart"]'),model:o.model}),o.show=t.proxy(o.show,o),t(document.body).on("click",'a[href="/cart"]',function(t){t.preventDefault(),o.update().then(o.show)})}),o});