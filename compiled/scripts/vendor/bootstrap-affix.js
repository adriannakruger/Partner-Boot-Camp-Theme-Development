/* ========================================================================
 * Bootstrap: affix.js v3.0.2
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function(t){var o=function(i,f){this.options=t.extend({},o.DEFAULTS,f),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=null,this.checkPosition()};o.RESET="affix affix-top affix-bottom",o.DEFAULTS={offset:0},o.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),f=this.$window.scrollTop(),n=this.$element.offset(),e=this.options.offset,s=e.top,h=e.bottom;"object"!=typeof e&&(h=s=e),"function"==typeof s&&(s=e.top()),"function"==typeof h&&(h=e.bottom());var a=null!=this.unpin&&f+this.unpin<=n.top?!1:null!=h&&n.top+this.$element.height()>=i-h?"bottom":null!=s&&s>=f?"top":!1;this.affixed!==a&&(this.unpin&&this.$element.css("top",""),this.affixed=a,this.unpin="bottom"==a?n.top-f:null,this.$element.removeClass(o.RESET).addClass("affix"+(a?"-"+a:"")),"bottom"==a&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var f=t(this),n=f.data("bs.affix"),e="object"==typeof i&&i;n||f.data("bs.affix",n=new o(this,e)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=o,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),o.affix(i)})})}(jQuery);