/**
 * 登录注册弹层 js
 * 2015-8-24
 * zhanghaibin
 */

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return void(e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(this).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.on("submit.validate",function(e){function s(){var s,r;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),r=i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),void 0!==r?r:!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){var e,i,s;return t(this[0]).is("form")?e=this.validate().form():(s=[],e=!0,i=t(this[0].form).validate(),this.each(function(){e=i.element(this)&&e,s=s.concat(i.errorList)}),i.errorList=s),e},rules:function(e,i){var s,r,n,a,o,l,h=this[0];if(e)switch(s=t.data(h.form,"validator").settings,r=s.rules,n=t.validator.staticRules(h),e){case"add":t.extend(n,t.validator.normalizeRule(i)),delete n.messages,r[h.name]=n,i.messages&&(s.messages[h.name]=t.extend(s.messages[h.name],i.messages));break;case"remove":return i?(l={},t.each(i.split(/\s/),function(e,i){l[i]=n[i],delete n[i],"required"===i&&t(h).removeAttr("aria-required")}),l):(delete r[h.name],n)}return a=t.validator.normalizeRules(t.extend({},t.validator.classRules(h),t.validator.attributeRules(h),t.validator.dataRules(h),t.validator.staticRules(h)),h),a.required&&(o=a.required,delete a.required,a=t.extend({required:o},a),t(h).attr("aria-required","true")),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(e,i){var s=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===i.which&&""===this.elementValue(e)||-1!==t.inArray(i.keyCode,s)||(e.name in this.submitted||e===this.lastElement)&&this.element(e)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this.form,"validator"),s="on"+e.type.replace(/^validate/,""),r=i.settings;r[s]&&!t(this).is(r.ignore)&&r[s].call(i,this,e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,s=this.groups={};t.each(this.settings.groups,function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,function(t,i){s[i]=e})}),i=this.settings.rules,t.each(i,function(e,s){i[e]=t.validator.normalizeRule(s)}),t(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",e).on("click.validate","select, option, [type='radio'], [type='checkbox']",e),this.settings.invalidHandler&&t(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i=this.clean(e),s=this.validationTargetFor(i),r=!0;return this.lastElement=s,void 0===s?delete this.invalid[i.name]:(this.prepareElement(s),this.currentElements=t(s),r=this.check(s)!==!1,r?delete this.invalid[s.name]:this.invalid[s.name]=!0),t(e).attr("aria-invalid",!r),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),r},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var e,i=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(e=0;i[e];e++)this.settings.unhighlight.call(this,i[e],this.settings.errorClass,"");else i.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,s=t(e),r=e.type;return"radio"===r||"checkbox"===r?this.findByName(e.name).filter(":checked").val():"number"===r&&"undefined"!=typeof e.validity?e.validity.badInput?!1:s.val():(i=s.val(),"string"==typeof i?i.replace(/\r/g,""):i)},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s,r,n=t(e).rules(),a=t.map(n,function(t,e){return e}).length,o=!1,l=this.elementValue(e);for(s in n){r={method:s,parameters:n[s]};try{if(i=t.validator.methods[s].call(this,l,e,r.parameters),"dependency-mismatch"===i&&1===a){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,r),!1}catch(h){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+r.method+"' method.",h),h instanceof TypeError&&(h.message+=".  Exception occurred when checking element "+e.id+", check the '"+r.method+"' method."),h}}if(!o)return this.objectLength(n)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e,method:i.method}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s,r,n,a=this.errorsFor(e),o=this.idOrName(e),l=t(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(i)):(a=t("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(i||""),s=a,this.settings.wrapper&&(s=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(s):this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e),a.is("label")?a.attr("for",o):0===a.parents("label[for='"+o+"']").length&&(n=a.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),l?l.match(new RegExp("\\b"+n+"\\b"))||(l+=" "+n):l=n,t(e).attr("aria-describedby",l),r=this.groups[e.name],r&&t.each(this.groups,function(e,i){i===r&&t("[name='"+e+"']",this.currentForm).attr("aria-describedby",a.attr("id"))}))),!i&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var i=this.idOrName(e),s=t(e).attr("aria-describedby"),r="label[for='"+i+"'], label[for='"+i+"'] *";return s&&(r=r+", #"+s.replace(/\s+/g,", #")),this.errors().filter(r)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})},destroy:function(){this.resetForm(),t(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},normalizeAttributeRule:function(t,e,i,s){/min|max/.test(i)&&(null===e||/number|range|text/.test(e))&&(s=Number(s),isNaN(s)&&(s=void 0)),s||0===s?t[i]=s:e===i&&"range"!==e&&(t[i]=!0)},attributeRules:function(e){var i,s,r={},n=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(s=e.getAttribute(i),""===s&&(s=!0),s=!!s):s=n.attr(i),this.normalizeAttributeRule(r,a,i,s);return r.maxlength&&/-1|2147483647|524288/.test(r.maxlength)&&delete r.maxlength,r},dataRules:function(e){var i,s,r={},n=t(e),a=e.getAttribute("type");for(i in t.validator.methods)s=n.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),this.normalizeAttributeRule(r,a,i,s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return void delete e[s];if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:e.length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,s,r=0,n=0,a=!1;if(t=t.replace(/\D/g,""),t.length<13||t.length>19)return!1;for(i=t.length-1;i>=0;i--)s=t.charAt(i),n=parseInt(s,10),a&&(n*=2)>9&&(n-=9),r+=n,a=!a;return r%10===0},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s[0]&&r<=s[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.off(".validate-equalTo").on("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r,n,a=this.previousValue(i);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),a.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=a.message,s="string"==typeof s&&{url:s}||s,a.old===e?a.valid:(a.old=e,r=this,this.startRequest(i),n={},n[i.name]=e,t.ajax(t.extend(!0,{mode:"abort",port:"validate"+i.name,dataType:"json",data:n,context:r.currentForm,success:function(s){var n,o,l,h=s===!0||"true"===s;r.settings.messages[i.name].remote=a.originalMessage,h?(l=r.formSubmitted,r.prepareElement(i),r.formSubmitted=l,r.successList.push(i),delete r.invalid[i.name],r.showErrors()):(n={},o=s||r.defaultMessage(i,"remote"),n[i.name]=a.message=t.isFunction(o)?o(e):o,r.invalid[i.name]=!0,r.showErrors(n)),a.valid=h,r.stopRequest(i,h)}},s)),"pending")}}});var e,i={};t.ajaxPrefilter?t.ajaxPrefilter(function(t,e,s){var r=t.port;"abort"===t.mode&&(i[r]&&i[r].abort(),i[r]=s)}):(e=t.ajax,t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(i[n]&&i[n].abort(),i[n]=e.apply(this,arguments),i[n]):e.apply(this,arguments)})}),jQuery.validator.addMethod("phone",function(t,e){var i=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/;return this.optional(e)||i.test(t)},"手机格式不正确");
// domain
var passportDomain = {
    domain: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        hosts = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1];
        return hosts;
    },
    domain_pre: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr[0];
    },
    domain_arr: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr;
    },
    currentUrl: window.location.href
};
var passportHostArr = passportDomain.domain_arr(window.location.href);
var passportBaseUrl = passportHostArr[1] + '.' + passportHostArr[2];
var passportUrl = "http://passport." + passportBaseUrl;
// var passportUrl='http://passport.jikexueyuan.tv';
var passportWwwUrl = "http://www." + passportBaseUrl;
var passportSafeCodeUrl = passportUrl + "/sso/verify";
var passportUrlFix = passportBaseUrl;


var PASSPORT = PASSPORT || {};
/**
 * Cookie相关操作
 * @namespace Cookie
 * @name JK.Cookie
 * @static
 */
PASSPORT.Cookie = {
    /**
     * 获取Cookie内容
     * @name JK.Cookie.get
     * @function
     * @grammar JK.Cookie.get(name)
     * @param {String} name Cookie键名
     *
     * @return {String} Cookie值
     */
    cokpre:'sso_',
    get: function( name ) {
    	var nameEQ = this.cokpre+name + '=';
    	var nameEQno = name + '=';
    	
    	var ca = document.cookie.split(';');
    	for ( var i=0;i < ca.length; i++ ) {
        	var c = ca[ i ];
        	while ( c.charAt(0) == ' ' ) c = c.substring( 1 , c.length );
        	if ( c.indexOf( nameEQ ) == 0 ) {
	        	var ret;
	        	try{
	            	ret = unescape( c.substring( nameEQ.length , c.length ) );
	        	} catch(e) {
	            	ret = unescape( c.substring( nameEQ.length , c.length ) );
	        	}
	        	
	        	return ret;
	        }
	        if( c.indexOf( nameEQno ) == 0 ){
	        	var retno;
	        	try{
	            	retno = unescape( c.substring( nameEQno.length , c.length ) );
	        	} catch(e) {
	            	retno = unescape( c.substring( nameEQno.length , c.length ) );
	        	}
	        	
	        	return retno;
	        }
	    }
	    return null;
    },
    /**
     * 设置Cookie内容
     * @name JK.Cookie.set
     * @function
     * @grammar JK.Cookie.set(name , value[ , days , path , domain , secure])
     * @param {String} name Cookie键名
     * @param {String} value Cookie键值
     * @param {Int} days Cookie有效期天数
     * @param {String} path Cookie有效路径
     * @param {String} domain Cookie有效域
     * @param {Boolean} secure 是否安全Cookie
     * @remark 兼容了编码为GBK时的Cookie读取失败的问题 2014-10-11 caojiangtao
     */
    set : function( name , value , days , path , domain , secure ) {
    var expires;
    if ( typeof days =="number" ) {
        if(days>0){
            var date = new Date();
            date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
            expires = date.toGMTString();
        }
    } else if ( typeof days =="String" ) {
        expires = days;
    } else {
        expires = false;
    }
    document.cookie = this.cokpre+name + '=' + escape( value ) +
        (expires ? (';expires=' + expires)  : '') +
        (path ? (';path=' + path) : '') +
        (domain ? (';domain=' + domain) : '') +
        (secure ? ';secure' : '');
    },
    /**
     * 删除Cookie内容
     * @name JK.Cookie.del
     * @function
     * @grammar JK.Cookie.del(name[ , path , domain , secure])
     * @param {String} name 要删除的Cookie键名
     * @param {String} path Cookie有效路径
     * @param {String} domain Cookie有效域
     * @param {Boolean} secure 是否安全Cookie
     */
    del : function( name , path , domain , secure ) {
        PASSPORT.Cookie.set( name , '' , -1 , path , domain , secure );
    }
};

// param
var passportHint = {
    uname: {
        required: '请输入账号'
    },
    pwd: {
        required: '请输入密码',
        rules: '只能包含英文、数字和符号',
        rangelength: '密码长度在6-32个字符之间',
        repeat: '两次密码不一致',
    },
    email: {
        required: '请输入邮箱',
        rules: '邮箱格式不正确',
    },
    phone: {
        required: '请输入手机号码',
        rules: '手机格式不正确',
        remote: '手机已使用',
    },
    accounts: {
        required: '请输入用户名',
    },
    mobile: {
        required: '请输入动态码',
    },
    verify: {
        required: '请输入验证码',
        remote: '验证码不正确',
    },
    treaty: {
        required: '请同意用户协议',
    }
};
var passportReg = {
    pwd: /^.*[A-Za-z0-9_\.-]+.*$/,
    email: /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/,
    phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/,
};

// 埋点方法
PASSPORT.efunc = function(params) {
    if(typeof stat != 'undefined') stat.efunc(params);
};

PASSPORT.getImgcode = function(elem) {
    var timenow = new Date().getTime();
    elem.attr("src", passportSafeCodeUrl + '?' + timenow);
};

PASSPORT.msgBox = function(status, msg, show_time, callBack) {
    var msg = msg ? msg : '亲爱的VIP，这是来自极客学院小雪的 Hello~';
    var id = "warning";
    var show_time = parseInt(show_time) ? parseInt(show_time) : 1500;
    switch (status) {
        case 1:
            var color_class = "waring-success";
            break;
        case 0:
            var color_class = "waring-failure";
            break;
        case 2:
        default:
            var color_class = "waring-sub";
            break;
    }
    var html;
    html = '<div class="web-dia-tip ' + color_class + '" id="' + id + '" >';
    html += msg;
    html += '</div>';
    $('body').append(html);

    var _W = $('#' + id).width() / 2;
    $('#' + id).css("marginLeft", -_W);
    $('#' + id).animate({
        top: "0px",
        opacity: 1
    }, 300, function() {
        $('#' + id).delay(show_time).animate({
            top: "-50px",
            opacity: 0
        }, 500, function() {
            $('#' + id).remove();
            if (typeof(callBack) == 'function') {
                callBack();
            }
        });
    });

};
PASSPORT.tabs = function(elem, fn) {
    var $elem = elem;
    $elem.find('.tabs li').each(function(i) {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            $elem.find('.tabbed>.tab-group:eq(' + i + ')').show().siblings().hide();
            if (fn) fn($(this));
        });
    });
};

PASSPORT.toStateClass = function(stateclass) {
    if (!(stateclass instanceof Array)) throw new TypeError('input 状态参数类型错误');
    var str = '';
    for (var i = 0; i < stateclass.length; i++) {
        if (!stateclass[i]) continue;
        str += stateclass[i] + ' ';
    }
    if (str.length) {
        return str.slice(0, -1);
    }
};
// 给 input 添加状态 class
PASSPORT.addInputState = function(elem, stateclass) {
    var elemState = elem.hasClass(stateclass);
    // 如果 class 存在则返回
    if(elemState.length) return;
    elem.addClass(stateclass);
};
PASSPORT.toHintClass = function(hint, state) {
    var str = '';
    for (var i = 0; i < state.length; i++) {
        if (!state[i]) continue;
        str += ('.' + hint) + ('.' + state[i]) + ',';
    }
    return str.slice(0, -1);
};
// 删除 input 状态样式
PASSPORT.removeInputState = function(elem, inputclass) {
    elem.removeClass(inputclass);
};
PASSPORT.createHint = function(o, inner) {
    if (arguments.length > 1) {
        var $html = '<'+ o.tag + ' class="' + o.hint + ' ' + o.state + '"><' + inner + '>' + o.text + '</' + inner + '></' + o.tag + '>';
    } else {
        // 返回提示
        var $html = $('<'+ o.tag + ' class="' + o.hint + ' ' + o.state + '"></' + o.tag + '>');
        $html.html(o.text);
    }
    return $html;
};
PASSPORT.insetHint = function(elem, hint, hintclass /*,target*/) {
    if (arguments.length > 3) {
        // 判断自定义文本插入目标是否设置
        if (arguments[3]) {
            var targetHint = arguments[3].find(hintclass);
            // 删除提示
            this.removeHint(elem, hintclass, arguments[3]);
            arguments[3].append(hint);
        } else {
            // 删除提示
            this.removeHint(elem, hintclass);
            elem.parent().append(hint);
        }
    } else {
        // 删除提示
        this.removeHint(elem, hintclass);
        // 默认位置插入提示
        elem.parent().append(hint);
    }
};
PASSPORT.removeHint = function(elem, hintclass /*,target*/) {
    if (arguments.length > 2) {
        if (arguments[2]) {
            arguments[2].find(hintclass).remove();
        } else {
            elem.siblings(hintclass).remove();
        }
    } else {
        elem.siblings(hintclass).remove();
    }
};

//阻止冒泡事件
PASSPORT.stopEventBubble = function() {
    function getEvent() {
        if (window.event) {
            return window.event;
        }
        func = getEvent.caller;
        while (func != null) {
            var arg0 = func.arguments[0];
            if (arg0) {
                if ((arg0.constructor == Event || arg0.constructor == MouseEvent || arg0.constructor == KeyboardEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                    return arg0;
                }
            }
            func = func.caller;
        }
        return null;
    }
    var e = getEvent();
    if (window.event) {
        e.cancelBubble = true; //阻止冒泡
    } else if (e.preventDefault) {
        e.stopPropagation(); //阻止冒泡
    }
};

PASSPORT.getCookie = function(name /*,elem*/) {
    var getCookie = PASSPORT.Cookie.get(name);
    if (getCookie && arguments.length > 1) {
        $(arguments[1]).val(getCookie).removeClass('placeholder');
    }
    return getCookie;
};
PASSPORT.setCookie = function(name, val, day) {
    PASSPORT.Cookie.del(name, '/', '.' + passportDomain.domain(window.location.href), '');
    PASSPORT.Cookie.set(name, val, day, '/', '.' + passportDomain.domain(window.location.href), '');
};

// 插件
(function($) {
    // 弹出层
    $.fn.passportPopup = function(options) {
        var settings = $.extend({
            'popupId': null, // 弹出层id
            'url': null, // 要插入的HTML的URL, 如果弹层隐藏在页面中, 则不用设置
            'string': null, // html 字符串
            'maskId': 'mask', // 遮罩id,null不显示遮罩
            'position': 'fixed', // 定位类别[fixed|absolute]
            'noscroll': false, // 是否禁止页面滚动[true|false]
            'zindex': null, // z-index值
            'width': null,  // 宽度
            'height': null, // 高度
            'countdown': null,   // 倒计时关闭(正整数,以秒为单位)
            'timer': null,   // 倒计时数字输出位置
            'jump': null,    // 关闭时跳转URL
            'fn': null, // 弹出调用函数
            'callback': null // 关闭回调
        }, options);

        // 如果popupId不存在, 则返回
        if (!settings.popupId) return false;
        // 重命名参数名称
        var _popupId = settings.popupId,
            _url = settings.url,
            _string = settings.string,
            _maskId = settings.maskId,
            _position = settings.position,
            _noscroll = settings.noscroll,
            _zindex = settings.zindex,
            _width = settings.width,
            _height = settings.height,
            _countdown = settings.countdown,
            _timer = settings.timer,
            _jump = settings.jump;

        var $popup = $("#" + _popupId);
        // 倒计时节点
        var $countdown = $('<div class="countdownTxt">');

        // 弹出层显示
        if ($popup.length > 0) {
            // 如果弹层已弹出, 则返回
            if ($popup.is(':visible')) return;
            // 关闭其他已弹出弹层
            closeActive();
            // 判断是否启用遮罩
            if (_maskId !== null) mask();
            // 显示自有弹层并添加属性
            $popup.attr({popup: "show", popmark: "own"}).show();
            // 禁止页面滚动
            if (_noscroll === true) var _scroll = noscroll();
            // 设置宽高
            if (_width !== null) $popup.css("width", _width + 'px');
            if (_height !== null) $popup.css("height", _height + 'px');
            // 设置zIndex值
            if (_zindex !== null) {
                $popup.css({zIndex: Number(_zindex) + 1});
            } else {
                var zIndex = $("#" + _maskId).css('z-index');
                $popup.css({zIndex: Number(zIndex) + 1})
            }
            // 弹层定位
            popupPsotion(_popupId, _position);
            //关闭弹层
            $("#" + _popupId + " .close").bind('click', function() {
                close($(this), _scroll);
                $("#" + _maskId).hide();
            });
            // 弹出调用函数
            if (settings.fn !== null) settings.fn();
            // 倒计时关闭
            if (_countdown !== null) countdown(_countdown, _timer);
        } else if (_string !== null) {
            // 如果弹层已弹出, 则返回
            if ($('body').find("#" + _popupId).length) return;
            // 关闭其他已弹出弹层
            closeActive();
            //判断是否启用遮罩
            if (_maskId !== null) mask();
            // 插入弹层
            $('body').append(_string);

            var $popup = $("#" + _popupId);
            // 添加属性
            $popup.attr("popup", "show").show();
            // 禁止页面滚动
            if (_noscroll === true) var _scroll = noscroll();
            // 设置宽高
            if (_width !== null) $popup.css("width", _width + 'px');
            if (_height !== null) $popup.css("height", _height + 'px');
            // 设置zIndex值
            if (_zindex !== null) {
                $popup.css({zIndex: Number(_zindex) + 1});
            } else {
                var zIndex = $("#" + _maskId).css('z-index');
                $popup.css({zIndex: Number(zIndex) + 1})
            }
            // 弹层定位
            popupPsotion(_popupId, _position);
            //关闭弹层
            $("#" + _popupId + " .close").bind('click', function() {
                close($(this), _scroll);
                $("#" + _maskId).hide();
                
            });
            // 弹出调用函数
            if (settings.fn !== null) settings.fn();
            // 倒计时关闭
            if (_countdown !== null) countdown(_countdown, _timer);
        } else if (_url !== null) {
            $.ajax({
                type: "GET",
                url: _url,
                success: function(res) {
                    // 如果弹层已弹出, 则返回
                    if ($('body').find("#" + _popupId).length) return;
                    // 关闭其他已弹出弹层
                    closeActive();
                    //判断是否启用遮罩
                    if (_maskId !== null) mask();
                    // 插入弹层
                    $('body').append(res);

                    var $popup = $("#" + _popupId);
                    // 添加属性
                    $popup.attr("popup", "show").show();
                    // 禁止页面滚动
                    if (_noscroll === true) var _scroll = noscroll();
                    // 设置宽高
                    if (_width !== null) $popup.css("width", _width + 'px');
                    if (_height !== null) $popup.css("height", _height + 'px');
                    // 设置zIndex值
                    if (_zindex !== null) {
                        $popup.css({zIndex: Number(_zindex) + 1});
                    } else {
                        var zIndex = $("#" + _maskId).css('z-index');
                        $popup.css({zIndex: Number(zIndex) + 1})
                    }
                    // 弹层定位
                    popupPsotion(_popupId, _position);
                    //关闭弹层
                    $("#" + _popupId + " .close").bind('click', function() {
                        close($(this), _scroll);
                        $("#" + _maskId).hide();
                    });
                    // 弹出调用函数
                    if (settings.fn !== null) settings.fn();
                    // 倒计时关闭
                    if (_countdown !== null) countdown(_countdown, _timer);
                }
            });
        } else {
            return false;
        }
        // 禁止页面滚动
        function noscroll() {
            var $html = $('html');
            var originHtml = $html.attr('style');
            $html.css({overflow: 'hidden'});
            return originHtml;
        }
        // 遮罩
        function mask() {
            var $mask = $("#" + _maskId);
            if ($mask.length > 0) {
                // 如果遮罩以显示, 则返回
                if ($mask.is(":visible")) return;
                $mask.show().css({zIndex: _zindex});
            } else {
                var maskNode = $("<div class='passport-mask' id='" + _maskId + "'>");
                $('body').append(maskNode);
                maskNode.show().css({zIndex: _zindex});
            }
        }
        // 关闭其他已弹出弹层
        function closeActive() {
            $('body').find('[popup="show"]').attr("popup","hide").find('.close').click();
        }
        // 倒计时关闭
        function countdown(time, node) {
            // 参数说明:
            // 1. time是设定的倒计时时间;
            // 2. node是自定义显示倒计时的位置;
            if ((typeof time != 'number') || time <= 1) throw new Error('参数类型错误或小于等于1');
            var _time = Math.ceil(time - 1);
            var _popup = $("#" + _popupId);
            // 显示倒计时
            _timerNum();
            // 清除倒计时
            window.clearTimeout(this._t);
            // 倒计时开始
            this._t = window.setTimeout(function() {
                if (_time > 1) {
                    // 显示倒计时
                    _timerNum();
                   return countdown(_time, node);
                } else {
                    $("#" + _popupId + " .close").click();
                }
            }, 1000);

            function _timerNum() {
                // 如果自定义了时间显示节点名, 则在指定位置显示倒计时
                if (node !== null) {
                    _popup.find(node).text(_time + "秒");
                } else {
                    _popup.find("." + $countdown[0].className).remove();
                    _popup.children('.wrap').append($countdown).find($countdown).text(_time + "秒");
                }
            }
        }
        //关闭按钮
        function close(obj, noscroll) {
            // 清除倒计时
            window.clearTimeout(this._t);
            // 取消禁止页面滚动
            if (_noscroll === true) {
                if (noscroll == undefined) {
                    $('html').removeAttr('style');
                } else {
                    $('html').attr('style', noscroll);
                }
            }
            // 跳转
            if (_jump !== null) document.location = _jump;
            // 设置弹层属性
            var _popup = obj.parents("#" + _popupId);
            var _mark = _popup.attr("popmark");
            _popup.attr("popup", "hide");
            // 如果popmark属性为own则隐藏，否则删除
            if (_mark == "own") {
                _popup.hide();
            } else {
                _popup.remove();
            }
            // 关闭回调
            if (settings.callback !== null) settings.callback();
        }
        //弹层定位
        function popupPsotion(popupId, position) {
            var $popup = $("#" + popupId),
                $win = $(window),
                winW = $win.width(),
                winH = $win.height(),
                popupW = $popup.width(),
                popupH = $popup.height(),
                scrollT = $win.scrollTop(),
                scrollL = $win.scrollLeft();
            if (popupH > winH) {
                // 如果弹层高度大于视窗高度, popupTop为滚动条Top值
                var popupTop = scrollT,
                    popupLeft = (winW - popupW) / 2 + scrollL;

                $popup.css({
                    position: "absolute",
                    top: popupTop,
                    left: popupLeft,
                    margin: 0
                });
            } else if (position == "fixed") {
                var popupTop = (winH - popupH) / 2,
                    popupLeft = (winW - popupW) / 2;

                $popup.css({
                    position: "fixed",
                    top: popupTop,
                    left: popupLeft,
                    margin: 0
                });
            } else if (position == "absolute") {
                var popupTop = (winH - popupH) / 2 + scrollT,
                    popupLeft = (winW - popupW) / 2 + scrollL;

                $popup.css({
                    position: "absolute",
                    top: popupTop,
                    left: popupLeft,
                    margin: 0
                });
            }
        }
        // 窗口调整时重新定位
        $(window).resize(function() {
            popupPsotion(_popupId, _position);
        });
    };
    // 密码强度
    $.fn.passportPasswordStrong = function(elem) {
        var passwordSafe = {
            safe: function(val) {
                if (val == '') return 0;
                var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
                var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
                var enoughRegex = new RegExp("(?=.{6,}).*", "g");
                if (enoughRegex.test(val) == false) {
                    return 1;
                } else if (strongRegex.test(val)) {
                    return 3;
                } else if (mediumRegex.test(val)) {
                    return 2;
                } else {
                    return 1;
                }
                return false;
            },
            state: function(elem, level, stateclass) {
                var $elem = elem;
                var stateClass = stateclass[0] + ' ' + stateclass[1] + ' ' + stateclass[2];
                switch (level) {
                    case 1:
                        $elem.removeClass(stateClass).addClass(stateclass[0]);
                        break;
                    case 2:
                        $elem.removeClass(stateClass).addClass(stateclass[1]);
                        break;
                    case 3:
                        $elem.removeClass(stateClass).addClass(stateclass[2]);
                        break;
                    case 0:
                        $elem.removeClass(stateClass);
                        break;
                }
            }
        };
        var $this = $(this);
        $this.bind('keyup', function() {
            var val = $.trim($this.val());
            var level = passwordSafe.safe(val);
            passwordSafe.state(elem, level, ['safely-danger', 'safely-general', 'safely-safe']);
        });
    };
    // placeholder
    $.fn.passportPlaceholder = function(holderclass) {
        var isIE9 = navigator.userAgent.indexOf('MSIE 9.0') > -1;
        var $this = $(this);
        if (isIE9) {
            $this.each(function() {
                var $this = $(this);
                var holder = $this.attr('placeholder');
                var holderHtml = '<div class="js-placeholder">' + holder + '</div>';
                $this.addClass(holderclass).attr('autocomplete', 'off').before(holderHtml);

                if ($this.val()) {
                    $this.removeClass(holderclass).siblings('.js-placeholder').hide();
                }

                $this.bind('focus', function() {
                    $(this).removeClass(holderclass).siblings('.js-placeholder').hide();
                });
                $this.bind('blur', function() {
                    var $this = $(this);
                    if (!$this.val()) $this.addClass(holderclass).siblings('.js-placeholder').show();
                });
            });
        } else {
            $this.each(function() {
                var $this = $(this);
                $this.removeClass('placeholder').attr({'autocomplete': 'off'});
            });
        }

        return this;
    };
    $.fn.passportSetBtnTimer = function(options) {
        "use strict";
        var settings = $.extend({
            'time': 60,
            'timewhich': null,
            'timetext': null,
            'timerstart': null,
            'timerend': null,
            'callback': null
        }, options);

        var self = this,
            oldv = self.text(),
            lock = 0,
            timer;

        if (settings.timerstart) settings.timerstart(this);
        this.attr("disabled", "disabled");
        // 设置手机号码不可修改
        this.parents('.passport-form').find('input[name="phone"]').attr({'readonly': 'readonly'});

        var text = settings.timetext ? settings.timetext : 's后重新获取';
        var tick = function() {
            settings.time--;
            if (settings.timewhich) {
                settings.timewhich.text(settings.time + text);
            } else {
                self.text(settings.time + text);
            }
            if (settings.time < 1) {
                if (settings.timerend) {
                    settings.timerend(self);
                    self.parents('.passport-form').find('input[name="phone"]').removeAttr('readonly');
                    window.clearInterval(timer);
                } else {
                    self.removeAttr("disabled");
                    self.parents('.passport-form').find('input[name="phone"]').removeAttr('readonly');
                    window.clearInterval(timer);
                    self.text('重新发送');
                }
                if (settings.callback) settings.callback();
            }
        };
        if (lock == 0) {
            settings.time++;
            tick();
            lock == 1;
        }
        return this.each(function() {
            timer = window.setInterval(tick, 1000);
        });
    }
})(jQuery);


//var passportLoginhtml = '<div class="passport-popup" id="login-popup"><div class="layout-inner"><div class="hd"><i class="close"></i></div><div class="bd"><div class="passport-sign"><div class="main-form main-form-sign"><div class="passport-tab" id="login-tabs"><div class="tabs"><ul><li class="active" data-tab="login" jktag="0001|0.1|91031">登录</li><li data-tab="fastlogin" jktag="0001|0.1|91028">免注册登录</li></ul></div><div class="tabbed"><div class="tab-group" style="display: block;"><form class="passport-form passport-form-sign" id="login-form-popup" action="' + passportUrl + '/submit/login" method="post"><div class="form-item"><div class="form-cont"><input type="text" name="uname" class="passport-txt xl w-full" tabindex="1" placeholder="手机 / 用户名 / 邮箱"/></div></div><div class="form-item"><div class="form-cont"><input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码"/></div></div><div class="form-item form-imgcode mb-25"><div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" placeholder="验证码" /></div><div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91029" /><i class="passport-icon2 icon-refresh refreshCode" jktag="0001|0.1|91029"></i></div></div></div><div class="form-item form-sevenday"><div class="form-cont clearfix"><label><input type="checkbox" class="passport-sevenday" />7天内免登录</label><a href="' + passportUrl + '/sso/forget" class="forget-link" jktag="0001|0.1|91030">忘记密码</a></div></div><div class="form-item"><div class="form-cont"><input type="button" id="login-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="4" value="登录" jktag="0001|0.1|91038" /></div></div></form></div><div class="tab-group"><form class="passport-form passport-form-sign" id="fastlogin-form-popup" action="' + passportUrl + '/submit/login_phone" method="post"><div class="form-item"><div class="form-cont"><input type="text" name="phone" class="passport-txt xl w-full" tabindex="1" placeholder="请输入手机号" /></div></div><div class="form-item form-imgcode"><div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg " tabindex="2" placeholder="验证码" /></div><div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91029" /><i class="passport-icon2 icon-refresh refreshCode" jktag="0001|0.1|91029"></i></div></div></div><div class="form-item form-mcode mb-25"><div class="form-cont"><input type="text" name="verify_code" class="passport-txt xl w-full" tabindex="3" placeholder="动态码" /><div class="btn-getcode"><button type="button" class="passport-btn js-getcode" jktag="0001|0.1|91039">获取动态码</button></div><div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" jktag="0001|0.1|91045">语音动态码</a></div><div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div></div></div><div class="form-item form-rememb"><div class="form-cont"><label><input type="checkbox" id="remember" class="rememb" />记住手机号</label></div></div><div class="form-item"><div class="form-cont"><input type="button" id="fastlogin-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="4" value="登录" jktag="0001|0.1|91043" /></div></div></form></div></div></div></div><div class="aside"><div class="passport-goto">没有账号?<a href="javascript:;" tabindex="5" class="diaRegBtnTab" jktag="0001|0.1|91032">免费注册</a></div><div class="passport-third"><header class="hd"><div class="layout-inner"><h3>合作方帐号登录</h3></div></header><div class="links"><a href="' + passportUrl + '/connect/qq" jktag="0001|0.1|91061" data-pl="qq"><i class="passport-icon icon-tencent"></i></a><a href="' + passportUrl + '/connect/weibo" jktag="0001|0.1|91058" data-pl="weibo"><i class="passport-icon icon-weibo"></i></a><a href="' + passportUrl + '/connect/weixin" jktag="0001|0.1|91059" data-pl="weixin"><i class="passport-icon icon-weixin"></i></a><a href="' + passportUrl + '/connect/eoe" jktag="0001|0.1|91060" data-pl="eoe"><i class="passport-icon icon-eoe"></i></a></div></div></div></div></div></div></div>';

var passportLoginhtml = '<div class="passport-popup" id="login-popup">';
	passportLoginhtml += '<div class="layout-inner">';
	passportLoginhtml += '<div class="hd">';
	passportLoginhtml += '<h2>欢迎来到极客学院，请登录</h2>';
	passportLoginhtml += '<i class="close"></i></div>';
	passportLoginhtml += '<div class="bd">';
	passportLoginhtml += '<div class="quikely"><span>快速登录</span></div>'
	passportLoginhtml +='<div class="links">';
    passportLoginhtml +='<a href="' + passportUrl + '/connect/qq" jktag="0001|0.1|91061" data-pl="qq"><i class="passport-icon icon-tencent"></i></a>';
    passportLoginhtml +='<a href="' + passportUrl + '/connect/weibo" jktag="0001|0.1|91058" data-pl="weibo"><i class="passport-icon icon-weibo"></i></a>';
    passportLoginhtml +='<a href="' + passportUrl + '/connect/weixin" jktag="0001|0.1|91059" data-pl="weixin"><i class="passport-icon icon-weixin"></i></a>';
    passportLoginhtml +='<a href="' + passportUrl + '/connect/eoe" jktag="0001|0.1|91060" data-pl="eoe"><i class="passport-icon icon-eoe"></i></a>';
   passportLoginhtml += '</div>'
   passportLoginhtml += '<a class="phonedtm" href="#">手机动态码登录<i></i></a>',
	passportLoginhtml += '<div class="passport-sign">';
	passportLoginhtml += '<div class="main-form main-form-sign">';
	passportLoginhtml += '<div class="passport-tab" id="login-tabs">';
	passportLoginhtml += '<div class="tabbed">'
	passportLoginhtml += '<div class="tab-group" style="display: block;">';
	passportLoginhtml += '<form class="passport-form passport-form-sign" id="login-form-popup" action="' + passportUrl + '/submit/login" method="post">';
	passportLoginhtml += '<div class="form-item">';
	passportLoginhtml += '<div class="form-cont">';
	passportLoginhtml += '<input type="text" name="uname" class="passport-txt xl w-full" tabindex="1" placeholder="手机 / 用户名 / 邮箱"/>';
	passportLoginhtml += '</div></div>';
	passportLoginhtml += '<div class="form-item">';
	passportLoginhtml += '<div class="form-cont">';
	passportLoginhtml += '<input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码"/>';
	passportLoginhtml += '</div></div>';
	passportLoginhtml += '<div class="form-item form-imgcode mb-25" id="yzmbox">';
	
	passportLoginhtml += '</div>';
	passportLoginhtml += '<div class="form-item form-sevenday">';
	passportLoginhtml += '<div class="form-cont clearfix">';
	passportLoginhtml += '<label><input type="checkbox" class="passport-sevenday" />7天内自动登录</label>';
	passportLoginhtml += '<a href="' + passportUrl + '/sso/forget" class="forget-link" jktag="0001|0.1|91030">忘记密码</a></div>';
	passportLoginhtml += '</div>';
	passportLoginhtml += '<div class="form-item">';
	passportLoginhtml += '<div class="form-cont"><input type="button" id="login-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="4" value="登录" jktag="0001|0.1|91038" /></div></div></form>';
	passportLoginhtml +='<div class="regphone">没有账号？<a href="#">新用户注册</a></div>';
	passportLoginhtml +='<div class="getfreevideo"></div>';
	passportLoginhtml += '</div>';

var passportReghtmlold = '<div class="passport-popup" id="register-popup"><div class="layout-inner"><div class="hd"><h2>欢迎注册极客学院</h2><i class="close"></i></div><div class="bd"><div class="passport-sign"><div class="main-form"><form class="passport-form passport-form-sign" id="register-form-popup" action="' + passportUrl + '/submit/reg_phone"><div class="form-item"><div class="form-cont"><input type="text" name="phone" class="passport-txt xl w-full" tabindex="1" placeholder="请输入手机号" /></div></div><div class="form-item"><div class="form-cont"><input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码"/><ul class="passport-safely" id="safely"><li class="danger">弱</li><li class="general">中</li><li class="safe">高</li></ul></div></div><div class="form-item form-imgcode"><div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" placeholder="验证码"></div><div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91034" /></div></div></div><div class="form-item form-mcode mb-25"><div class="form-cont"><input type="text" name="verify_code" class="passport-txt xl w-full" tabindex="4" placeholder="动态码"/><div class="btn-getcode"><button type="button" class="passport-btn js-getcode" jktag="0001|0.1|91035">获取动态码</button></div><div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" jktag="0001|0.1|91044">语音动态码</a></div><div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div></div></div><div class="form-item form-treaty"><div class="form-cont"><input type="checkbox" name="treaty" checked="checked" value="treaty" /><a href="' + passportWwwUrl + '/help/service.html" target="_blank" class="treaty">极客学院用户协议</a></div></div><div class="form-item"><div class="form-cont"><input type="button" id="register-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="5" value="注册" jktag="0001|0.1|91037" /></div></div></form></div><div class="aside"><div class="passport-goto">已有帐号<a href="javascript:;" tabindex="6" class="diaLoginBtnTab" jktag="0001|0.1|91040">立即登录</a></div><div class="passport-third"><header class="hd"><div class="layout-inner"><h3>合作方帐号登录</h3></div></header><div class="links"><a href="' + passportUrl + '/connect/qq" jktag="0001|0.1|91053" data-pl="qq"><i class="passport-icon icon-tencent"></i></a><a href="' + passportUrl + '/connect/weibo" jktag="0001|0.1|91054" data-pl="weibo"><i class="passport-icon icon-weibo"></i></a><a href="' + passportUrl + '/connect/weixin" jktag="0001|0.1|91055" data-pl="weixin"><i class="passport-icon icon-weixin"></i></a><a href="' + passportUrl + '/connect/eoe" jktag="0001|0.1|91056" data-pl="eoe"><i class="passport-icon icon-eoe"></i></a></div></div><div class="passport-ad" id="reg-ad01"></div></div></div></div></div></div>';




// 判断域名，特殊设置
if(passportHostArr[0] == "e"){
	var passportCurrPage = passportDomain.currentUrl.match(/\/\w+\.html/);
	passportCurrPage = passportCurrPage[0].replace(/\.html/,'');
	passportCurrPage = passportCurrPage.substr(1);
	// var passportClose = (passportHostArr[0] == "e" && passportCurrPage == "android") ? 'close-event' : 'close';

	if(passportCurrPage == "android"){
		var passportReghtmlold = '<div class="passport-popup" id="register-popup"><div class="layout-inner"><div class="hd"><i class="close-event"></i><input type="hidden" class="close" /></div><div class="bd"><div class="passport-sign"><div class="main-form"><h2>欢迎注册极客学院</h2><form class="passport-form passport-form-sign" id="register-form-popup" action="' + passportUrl + '/submit/reg_phone"><div class="form-item"><div class="form-cont"><input type="text" name="phone" class="passport-txt xl w-full" tabindex="1" placeholder="请输入手机号" /></div></div><div class="form-item"><div class="form-cont"><input type="password" name="password" class="passport-txt xl w-full" tabindex="2" placeholder="输入6~32位密码"/><ul class="passport-safely" id="safely"><li class="danger">弱</li><li class="general">中</li><li class="safe">高</li></ul></div></div><div class="form-item form-imgcode"><div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" placeholder="验证码"></div><div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91034" /><i class="passport-icon icon-refresh refreshCode" jktag="0001|0.1|91034"></i></div></div></div><div class="form-item form-mcode mb-25"><div class="form-cont"><input type="text" name="verify_code" class="passport-txt xl w-full" tabindex="4" placeholder="动态码"/><div class="btn-getcode"><button type="button" class="passport-btn js-getcode" jktag="0001|0.1|91035">获取动态码</button></div><div class="passport-sms getVoice" style="display: none;">未收到短信？使用<a href="javascript:;" class="js-getvoice" jktag="0001|0.1|91044">语音动态码</a></div><div class="passport-sms reVoice" style="display: none;"><span class="js-revoice"></span>，请注意接听来电</div></div></div><div class="form-item form-treaty"><div class="form-cont"><input type="checkbox" name="treaty" checked="checked" value="treaty" /><a href="' + passportWwwUrl + '/help/service.html" target="_blank" class="treaty">极客学院用户协议</a></div></div><div class="form-item"><div class="form-cont"><input type="button" id="register-pop-submit" class="passport-btn passport-btn-def xl w-full" tabindex="5" value="注册" jktag="0001|0.1|91037" /></div></div></form></div><div class="aside"><div class="passport-goto">已有帐号<a href="javascript:;" tabindex="6" class="diaLoginBtnTab" jktag="0001|0.1|91040">立即登录</a></div><div class="passport-third"><header class="hd"><div class="layout-inner"><h3>合作方帐号登录</h3></div></header><div class="links"><a href="' + passportUrl + '/connect/qq" jktag="0001|0.1|91053" data-pl="qq"><i class="passport-icon icon-tencent"></i></a><a href="' + passportUrl + '/connect/weibo" jktag="0001|0.1|91054" data-pl="weibo"><i class="passport-icon icon-weibo"></i></a><a href="' + passportUrl + '/connect/weixin" jktag="0001|0.1|91055" data-pl="weixin"><i class="passport-icon icon-weixin"></i></a><a href="' + passportUrl + '/connect/eoe" jktag="0001|0.1|91056" data-pl="eoe"><i class="passport-icon icon-eoe"></i></a></div></div><div class="passport-ad" id="reg-ad01"></div></div></div></div></div></div>';
	}
}
// baidu ad
document.write("<script src='http://cbjs.baidu.com/js/m.js'></script>"); 


// sign javascript
var SIGN = {
    lock: true,
    submitLock: true,
    total: 60,
    oldval: {},
    valid: {},
    invalid: {},
    init: function() {
        var self = this;
        this.bindEle();
        this.signPop();
    },
    otherlogin:function(){
		var uid = PASSPORT.getCookie("uid");
		var ohterlogin = PASSPORT.getCookie("ohterlogin");
		var flag = PASSPORT.getCookie('closebindpop');	//关过弹出框将不再弹出
	},
    bindEle: function() {
        var self = this;
        $('body').delegate('.passport-txt', 'focus', function() {
            PASSPORT.removeHint($(this), self.hintclass());
            PASSPORT.removeInputState($(this), self.inputclass());
        });
        $('body').delegate('#register-form-popup input[name="treaty"]', 'click', function() {
            if ($('#register-form-popup input[name="treaty"]').is(':checked')) {
                PASSPORT.removeHint($(this), self.hintclass());
                PASSPORT.removeInputState($(this), self.inputclass());
            }
        });
    },
    hintclass: function() {
        return PASSPORT.toHintClass('passport-note', ['passport-error-text']);
    },
    inputclass: function() {
        return PASSPORT.toStateClass(['passport-error-input']);
    },
    hintEvent: function(elem, errhint) {
        PASSPORT.insetHint(elem, errhint, this.hintclass());
        PASSPORT.removeInputState(elem, this.inputclass());
        PASSPORT.addInputState(elem, this.inputclass());
    },
    hintArgs: {
        tag: 'div',
        hint: 'passport-note',
        state: 'passport-error-text'
    },
    submit: function(param) {
        var self = this;
        var sets = $.extend({
            'form': null,
            'button': null,
            'text': null,
            'error': null,
            'success': null
        }, param);
        var oldtext = sets.button.val();
        if (!self.submitLock) return false;
        self.submitLock = false;
        sets.button.val(sets.text);
        $.post(sets.form.attr('action') + '?is_ajax=1&jsoncallback=?', sets.form.serialize(), function(res) {
           
            if (res.status != 1) {
                PASSPORT.msgBox(0, res.msg);
                self.submitLock = true;
                sets.form.find('.verifyCode').click();
                sets.button.val(oldtext);
                if (sets.error) sets.error(res);
            } else {
                if (sets.success) sets.success(res);
                document.location.href = document.location.href;
            }
        }, 'jsonp');
    },
    resetData: function(mode) {
        this.oldval[mode] = {};
        this.valid[mode] = {};
        this.invalid[mode] = {};
    },
    required: function(param) {
        var self = this;
        var sets = $.extend({
            'elem': null,
            'val': null,
            'hint': null,
            'mode': null,
            'error': null,
            'success': null,
            'rules': null,
            'rangelength': null,
        }, param);
        var name = sets.elem.attr('name');
        var type = sets.elem.attr('type');
        var errhint;
        if (type == 'text' || type == 'password' || type == 'textarea') {
            if (!sets.val) {
                self.hintArgs.text = sets.hint;
                errhint = PASSPORT.createHint(self.hintArgs, 'span');
                self.hintEvent(sets.elem, errhint);
                self.oldval[sets.mode][name] = '';
                if (sets.error) sets.error();
                return false;
            } else {
                if (sets.success) sets.success();
            }
        } else if (type == 'checkbox' || type == 'radio') {
            if (!sets.elem.is(':checked')) {
                self.hintArgs.text = sets.hint;
                errhint = PASSPORT.createHint(self.hintArgs, 'span');
                self.hintEvent(sets.elem, errhint);
                self.oldval[sets.mode][name] = '';
                if (sets.error) sets.error();
                return false;
            } else {
                if (sets.success) sets.success();
            }
        }
        if (sets.rules && !self.rules(sets.rules)) return false;
        if (sets.rangelength && !self.rangelength(sets.rangelength)) return false;
        return true;
    },
    rules: function(param) {
        var self = this;
        var sets = $.extend({
            'elem': null,
            'val': null,
            'rules': null,
            'hint': null,
            'error': null,
            'success': null
        }, param);
        var rules = sets.rules.test(sets.val);
        var errhint;
        if (!rules) {
            self.hintArgs.text = sets.hint;
            errhint = PASSPORT.createHint(self.hintArgs, 'span');
            self.hintEvent(sets.elem, errhint);
            if (sets.error) sets.error();
            return false;
        } else {
            if (sets.success) sets.success();
        }
        return true;
    },
    rangelength: function(param) {
        var self = this;
        var sets = $.extend({
            'elem': null,
            'val': null,
            'rangelength': null,
            'hint': null
        }, param);
        var errhint, minlength = sets.rangelength[0], maxlength = sets.rangelength[1];
        if (sets.val.length < minlength || sets.val.length > maxlength) {
            self.hintArgs.text = sets.hint;
            errhint = PASSPORT.createHint(self.hintArgs, 'span');
            self.hintEvent(sets.elem, errhint);
            return false;
        }
        return true;
    },
    remote: function(args, settings) {
        var self = this;
        var sets = $.extend({
            'context': null,
            'mode': null,
            'elem': settings.elem,
            'hint': settings.hint,
            'reverse': false,
            'error': null,
            'success': null
        }, settings);
        var name = sets.elem.attr('name');
        var status, errhint;
        var param = $.extend(true, {
            type: 'post',
            dataType: 'json',
            context: sets.context,
            error: function() {
                PASSPORT.msgBox(0, '远程：网络出错了，过会再试！');
            },
            success: function(res) {
                status = sets.reverse ? 0 : 1;
                if (res.status !== status) {
                    self.hintArgs.text = sets.hint;
                    errhint = PASSPORT.createHint(self.hintArgs, 'span');
                    self.hintEvent(sets.elem, errhint);
                    self.invalid[sets.mode][name] = true;
                    delete self.valid[sets.mode][name];
                    if (sets.error) return sets.error(res);
                } else {
                    self.valid[sets.mode][name] = true;
                    delete self.invalid[sets.mode][name];
                    if (sets.success) return sets.success(res);
                }
            }
        }, args);
        return param;
    },
    getVoice: function(form, param) {
        var self = this;
        self.lock = true;

        var sets = $.extend({
            'restype': 4,
            'phoneError': null,
            'verifyError': null
        }, param);
        // 获取语音动态码
        $(form + ' .js-getvoice').unbind('click');
        $(form + ' .js-getvoice').removeClass('disabled');
        $(form + ' .js-getvoice').bind('click', function() {
            var $this = $(this);
            var $form = $(form);
            var $getBtn = $form.find('.js-getcode');
            var $phone = $form.find('input[name="phone"]');
            var $verify = $form.find('input[name="verify"]');
            var phoneNum = $.trim($phone.val());
            var verifyCode = $.trim($verify.val());
            var $getVoice = $this.parent('.getVoice');
            var $reVoice = $getVoice.siblings('.reVoice');
            var $revoice = $reVoice.find('.js-revoice');
            var data = {
                phone: phoneNum,
                verify: verifyCode,
                type: sets.restype,
            };
            var timestart = function() {
                $getVoice.hide();
                $reVoice.show();
                $getBtn.prop('disabled', true);
            };
            var timeend = function() {
                $getVoice.show();
                $reVoice.hide();
                $getBtn.removeAttr('disabled');
                self.lock = true;
            };
            $.ajax({
                type: 'post',
                url: passportUrl + '/sso/voice?is_ajax=1&jsoncallback=?',
                dataType: 'jsonp',
                data: data,
                error: function() {
                    PASSPORT.msgBox(0, '语音：网络出错了，过会再试！');
                    $revoice.passportSetBtnTimer({
                        time: 0,
                        timerstart: function() {
                            timestart();
                        },
                        timerend: function() {
                            timeend();
                        }
                    });
                },
                success: function(res) {
                    if (res.status == 1) {
                        $revoice.passportSetBtnTimer({
                            time: self.total,
                            timerstart: function() {
                                timestart();
                            },
                            timerend: function() {
                                timeend();
                            }
                        });
                    } else {
                        PASSPORT.msgBox(0, res.msg);
                        $revoice.passportSetBtnTimer({
                            time: 0,
                            timerstart: function() {
                               timestart();
                            },
                            timerend: function() {
                                timeend();
                            }
                        });
                    }
                },
            });
        });
    },
    getMcode: function(form, param) {
        var self = this;
        self.lock = false;
        var sets = $.extend({
            restype: 4,
        }, param);
        var $this = $(this);
        var $form = $(form);
        var $getBtn = $form.find('.js-getcode');
        var $phone = $form.find('input[name="phone"]');
        var $verify = $form.find('input[name="verify"]');
        var phoneNum = $.trim($phone.val());
        var verifyCode = $.trim($verify.val());

        var phoneType = passportReg.phone.test(phoneNum);
        self.hintArgs.text = passportHint.phone.required;
        var errhint = PASSPORT.createHint(self.hintArgs, 'span');

        if (!phoneNum) {
            self.hintEvent($phone, errhint);
            self.lock = true;
        } else {
            self.hintArgs.text = passportHint.phone.rules;
            errhint = PASSPORT.createHint(self.hintArgs, 'span');
            if (!phoneType) {
                self.hintEvent($phone, errhint);
                self.lock = true;
            }
        }
        self.hintArgs.text = passportHint.verify.required;
        errhint = PASSPORT.createHint(self.hintArgs, 'span');
        if (!verifyCode) {
            self.hintEvent($verify, errhint);
        }
        if (!phoneNum || !phoneType || !verifyCode) {
            self.lock = true;
            return false;
        }

        if (sets.restype == 4) {
            $.ajax({
                type: 'post',
                url: passportUrl + '/check/phone?is_ajax=1&jsoncallback=?',
                data: {phone: phoneNum},
                dataType: 'jsonp',
                error: function() {
                    PASSPORT.msgBox(0, '手机：网络出错了，过会再试！');
                    self.lock = true;
                },
                success: function(res) {
                    if (res.status == 1) {
                        $.ajax({
                            type: 'post',
                            url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                            data: {verify: verifyCode},
                            dataType: 'jsonp',
                            error: function() {
                                PASSPORT.msgBox(0, '验证：网络出错，过会再试');
                                $getBtn.passportSetBtnTimer({
                                    time: 0,
                                    callback: function() {
                                        self.lock = true;
                                    }
                                });
                            },
                            success: function(res) {
                                if (res.status == 0) {
                                    // 创建提示
                                    self.hintArgs.text = '验证码错误';
                                    var ajaxhint = PASSPORT.createHint(self.hintArgs, 'span');
                                    self.hintEvent($verify, ajaxhint);
                                    self.lock = true;
                                    if (sets.verifyError) sets.verifyError(res);
                                    return false;
                                }

                                $getBtn.addClass('passport-btn-def').text('短信发送中');

                                var data = {
                                    phone: phoneNum,
                                    verify: verifyCode,
                                    type: 4,
                                };
                                $.ajax({
                                    type: "post",
                                    url: passportUrl + '/sso/sms?is_ajax=1&jsoncallback=?',
                                    data: data,
                                    dataType: 'jsonp',
                                    error: function() {
                                        PASSPORT.msgBox(0, '短信：网络出错，过会再试');
                                        $getBtn.passportSetBtnTimer({
                                            time: 0,
                                            timerstart: function(elem) {
                                                $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                                elem.removeClass('passport-btn-def');
                                            },
                                            callback: function() {
                                                self.lock = true;
                                                // 获取语音动态码
                                                self.getVoice(form, {restype: 4});
                                            }
                                        });
                                    },
                                    success: function(res) {
                                        if (res.status == 1) {
                                            $getBtn.passportSetBtnTimer({
                                                time: self.total,
                                                timerstart: function(elem) {
                                                    $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                                    elem.removeClass('passport-btn-def');
                                                },
                                                callback: function() {
                                                    self.lock = true;
                                                    $form.find('.getVoice').show();
                                                    // 获取语音动态码
                                                    self.getVoice(form, {restype: 4});
                                                },
                                            });
                                        } else {
                                            PASSPORT.msgBox(0, res.msg);
                                            $('.verifyCode').click();
                                            $getBtn.passportSetBtnTimer({
                                                time: 0,
                                                timerstart: function(elem) {
                                                    $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                                    elem.removeClass('passport-btn-def');
                                                },
                                                callback: function() {
                                                    // 获取语音动态码
                                                    self.lock = true;
                                                    self.getVoice(form, {restype: 4});
                                                }
                                            });
                                        }
                                    },
                                });
                            }
                        });
                    } else {
                        self.hintArgs.text = passportHint.phone.remote;
                        errhint = PASSPORT.createHint(self.hintArgs, 'span');
                        self.hintEvent($phone, errhint);
                        if (sets.phoneError) sets.phoneError(res);
                        self.lock = true;
                    }
                }
            });
        } else if (sets.restype == 5) {
            $.ajax({
                type: 'post',
                url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                data: {
                    verify: verifyCode
                },
                dataType: 'jsonp',
                error: function() {
                    PASSPORT.msgBox(0, '验证：网络出错，过会再试');
                    $getBtn.passportSetBtnTimer({
                        time: 0,
                        callback: function() {
                            self.lock = true;
                        }
                    });
                },
                success: function(res) {
                    if (res.status == 0) {
                        // 创建提示
                        self.hintArgs.text = '验证码错误';
                        var ajaxhint = PASSPORT.createHint(self.hintArgs, 'span');
                        self.hintEvent($verify, ajaxhint);
                        self.lock = true;
                        return false;
                    }

                    $getBtn.addClass('passport-btn-def').text('短信发送中');

                    var data = {
                        phone: phoneNum,
                        verify: verifyCode,
                        type: 5,
                    };
                    $.ajax({
                        type: "post",
                        url: passportUrl + '/sso/sms?is_ajax=1&jsoncallback=?',
                        data: data,
                        dataType: 'jsonp',
                        error: function() {
                            PASSPORT.msgBox(0, '短信：网络出错了，请过会再试');
                            $getBtn.passportSetBtnTimer({
                                time: 0,
                                timerstart: function(elem) {
                                    $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                    elem.removeClass('passport-btn-def');
                                },
                                callback: function() {
                                    self.lock = true;
                                    // 获取语音动态码
                                    self.getVoice(form, {restype: 5});
                                }
                            });
                        },
                        success: function(res) {
                            if (res.status == 1) {
                                $getBtn.passportSetBtnTimer({
                                    time: self.total,
                                    timerstart: function(elem) {
                                        $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                        elem.removeClass('passport-btn-def');
                                    },
                                    callback: function() {
                                        self.lock = true;
                                        $form.find('.getVoice').show();
                                        // 获取语音动态码
                                        self.getVoice(form, {restype: 5});
                                    },
                                });
                            } else {
                                PASSPORT.msgBox(0, res.msg);
                                $('.verifyCode').click();
                                $getBtn.passportSetBtnTimer({
                                    time: 0,
                                    timerstart: function(elem) {
                                        $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                        elem.removeClass('passport-btn-def');
                                    },
                                    callback: function() {
                                        // 获取语音动态码
                                        self.lock = true;
                                        self.getVoice(form, {restype: 5});
                                    }
                                });
                            }
                        },
                    });
                }
            });

        } else if (sets.restype == 1) {
        	$.ajax({
                type: 'post',
                url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                data: {
                    verify: verifyCode
                },
                dataType: 'jsonp',
                error: function() {
                    PASSPORT.msgBox(0, '验证：网络出错，过会再试');
                    $getBtn.passportSetBtnTimer({
                        time: 0,
                        callback: function() {
                            self.lock = true;
                        }
                    });
                },
                success: function(res) {
                    if (res.status == 0) {
                        // 创建提示
                        self.hintArgs.text = '验证码错误';
                        var ajaxhint = PASSPORT.createHint(self.hintArgs, 'span');
                        self.hintEvent($verify, ajaxhint);
                        self.lock = true;
                        return false;
                    }

                    $getBtn.addClass('passport-btn-def').text('短信发送中');

                    var data = {
                        phone: phoneNum,
                        verify: verifyCode,
                        type: 1,
                    };
                    $.ajax({
                        type: "post",
                        url: passportUrl + '/sso/sms?is_ajax=1&jsoncallback=?',
                        data: data,
                        dataType: 'jsonp',
                        error: function() {
                            PASSPORT.msgBox(0, '短信：网络出错了，请过会再试');
                            $getBtn.passportSetBtnTimer({
                                time: 0,
                                timerstart: function(elem) {
                                    $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                    elem.removeClass('passport-btn-def');
                                },
                                callback: function() {
                                    self.lock = true;
                                    // 获取语音动态码
                                    self.getVoice(form, {restype: 1});
                                }
                            });
                        },
                        success: function(res) {
                            if (res.status == 1) {
                                $getBtn.passportSetBtnTimer({
                                    time: self.total,
                                    timerstart: function(elem) {
                                        $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                        elem.removeClass('passport-btn-def');
                                    },
                                    callback: function() {
                                        self.lock = true;
                                        $form.find('.getVoice').show();
                                        // 获取语音动态码
                                        self.getVoice(form, {restype: 1});
                                    },
                                });
                            } else {
                                PASSPORT.msgBox(0, res.msg);
                                $('.verifyCode').click();
                                $getBtn.passportSetBtnTimer({
                                    time: 0,
                                    timerstart: function(elem) {
                                        $form.find('.js-getvoice').addClass('disabled').unbind('click');
                                        elem.removeClass('passport-btn-def');
                                    },
                                    callback: function() {
                                        // 获取语音动态码
                                        self.lock = true;
                                        self.getVoice(form, {restype: 1});
                                    }
                                });
                            }
                        },
                    });
                }
            });
        }

        
    },
    register: function(form, button, flag) {
        if (!$(form).length) return;
        var self = this;
        var $form = $(form);
        var $phone = $form.find('input[name="phone"]');
        var $pwd = $form.find('input[name="password"]');
        var $verify = $form.find('input[name="verify"]');
        var $mcode = $form.find('input[name="verify_code"]');
        var $treaty = $form.find('input[name="treaty"]');
        var $submit = $form.find(button);
        self.oldval.register = {};
        self.valid.register = {};
        self.invalid.register = {};
        // 密码强度验证
        
        $pwd.passportPasswordStrong($('#safely'));

        $phone.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem: $this,
                val: val,
                hint: passportHint.phone.required,
                mode: 'register',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91046,posId: 910005});
                },
                rules: {
                    elem: $this,
                    val: val,
                    rules: passportReg.phone,
                    hint: passportHint.phone.rules,
                    error: function() {
                        if (typeof stat != 'undefined') stat.efunc({po: 91047,posId: 910005});
                    }
                }
            });
            if (check) {
                if (self.oldval.register[name] === val && self.valid.register[name]) return false;
                if (self.oldval.register[name] === val && self.invalid.register[name]) {
                    self.hintArgs.text = premote;
                    var errhint = PASSPORT.createHint(self.hintArgs, 'span');
                    self.hintEvent($this, errhint);
                    return false;
                }
                self.oldval.register[name] = val;
                $.ajax(self.remote({
                    type: 'post',
                    url: passportUrl + '/check/phone?is_ajax=1&jsoncallback=?',
                    dataType: 'jsonp',
                    data: {phone: val}
                }, {
                    context: $form,
                    mode: 'register',
                    elem: $this,
                    hint: passportHint.phone.remote,
                    error: function() {
                        if(typeof stat != 'undefined') stat.efunc({po:91048,posId: 910005});
                    },
                    success: function () {
                        if(typeof stat != 'undefined') stat.efunc({po:91091,posId: 910005});
                       
                    }
                }));
            }
        });
        $pwd.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.pwd.required,
                mode:'register',
                success: function() {
                    var $safely = $form.find('#safely');
                    if ($safely.hasClass('safely-danger')) {
                        if(typeof stat != 'undefined') stat.efunc({po:91049,posId: 910005});
                    } else if ($safely.hasClass('safely-general')) {
                        if(typeof stat != 'undefined') stat.efunc({po:91050,posId: 910005});
                    } else if ($safely.hasClass('safely-safe')) {
                        if(typeof stat != 'undefined') stat.efunc({po:91051,posId: 910005});
                    }
                    
                },
                error: function () {
                    if(typeof stat != 'undefined') stat.efunc({po:91096,posId: 910005});
                },
                rangelength: {
                    elem: $this,
                    val: val,
                    rangelength: [6, 32],
                    hint: passportHint.pwd.rangelength
                }
            });
        });
        $verify.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.verify.required,
                mode:'register',
                error: function () {
                    if(typeof stat != 'undefined') stat.efunc({po:91097,posId: 910005});
                }
            });
            if (check) {
                if (self.oldval.register[name] === val && self.valid.register[name]) return false;
                if (self.oldval.register[name] === val && self.invalid.register[name]) {
                    self.hintArgs.text = passportHint.verify.remote;
                    var errhint = PASSPORT.createHint(self.hintArgs, 'span');
                    self.hintEvent($this, errhint);
                    return false;
                }
                self.oldval.register[name] = val;
                $.ajax(self.remote({
                    type: 'post',
                    url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                    dataType: 'jsonp',
                    data: {verify: val}
                }, {
                    centext: $form,
                    mode: 'register',
                    elem: $this,
                    hint: passportHint.verify.remote,
                    error: function() {
                        if(typeof stat != 'undefined') stat.efunc({po:91033,posId: 910005});
                        $form.find('.verifyCode').click();
                    },
                    success: function () {
                        if(typeof stat != 'undefined') stat.efunc({po:91094,posId: 910005});
                        
                    }
                }));
            }
        });
        $mcode.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem: $this,
                val: val,
                hint: passportHint.mobile.required,
                mode: 'register',
                error: function () {
                    if(typeof stat != 'undefined') stat.efunc({po:91098,posId: 910005});
                }
            });
        });
        $treaty.bind('click', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.treaty.required,
                mode:'register'
            });
        });
        $submit.bind('click', function() {
            PASSPORT.efunc({po:91037,posId: 910005});
            var phoneVal = $.trim($phone.val());
            var phoneCheck = self.required({
                elem:$phone,
                val:phoneVal,
                hint:passportHint.phone.required,
                mode:'register',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91046,posId: 910005});
                },
                rules: {
                    elem:$phone,
                    val:phoneVal,
                    rules:passportReg.phone,
                    hint:passportHint.phone.rules,
                    error: function() {
                        if(typeof stat != 'undefined') stat.efunc({po:91047,posId: 910005});
                    }
                }
            });
            var pwdVal = $.trim($pwd.val());
            var pwdCheck = self.required({
                elem:$pwd,
                val:pwdVal,
                hint:passportHint.pwd.required,
                mode:'register',
                rangelength: {
                    elem: $pwd,
                    val: pwdVal,
                    rangelength: [6, 32],
                    hint: passportHint.pwd.rangelength
                }
            });
            var verifyVal = $.trim($verify.val());
            var verifyCheck = self.required({
                elem:$verify,
                val:verifyVal,
                hint:passportHint.verify.required,
                mode:'register'
            });
            var mcodeVal = $.trim($mcode.val());
            var mcodeCheck = self.required({
                elem:$mcode,
                val:mcodeVal,
                hint:passportHint.mobile.required,
                mode:'register'
            });
            var treatyVal = $.trim($treaty.val());
            var treatyCheck = self.required({
                elem:$treaty,
                val:treatyVal,
                hint:passportHint.treaty.required,
                mode:'register'
            });
            if(flag){	// 绑定手机
            	if (phoneCheck && verifyCheck && mcodeCheck && treatyCheck) {
	                 $.ajax(self.remote({
	                    type: 'post',
	                    url: passportUrl + '/check/phone?is_ajax=1&jsoncallback=?',
	                    dataType: 'jsonp',
	                    data: {phone: phoneVal}
	                }, {
	                    context: $form,
	                    mode: 'register',
	                    elem: $phone,
	                    hint: passportHint.phone.remote,
	                    error: function() {
	                        if(typeof stat != 'undefined') stat.efunc({po:91048,posId: 910005});
	                    },
	                    success: function() {
	                        $.ajax(self.remote({
	                                type: 'post',
	                                url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
	                                dataType: 'jsonp',
	                                data: {verify: verifyVal}
	                            }, {
	                                context: $form,
	                                mode: 'register',
	                                elem: $verify,
	                                hint: passportHint.verify.remote,
	                                error: function() {
	                                    if(typeof stat != 'undefined') stat.efunc({po:91033,posId: 910005});
	                                },
	                                success: function() {
	                                    self.resetData('register');
	                                    self.submit({
	                                        form: $form,
	                                        button: $submit,
	                                        text: '绑定中',
	                                        error: function(res) {
	                                        	// console.log('err',res);
	                                            // if (res.msg == '手机验证码错误或过期') {
	                                            //     if(typeof stat != 'undefined') stat.efunc({po:91036,posId: 910005});
	                                            // }
	                                        },
	                                        success: function(res) {
	                                        	 // console.log('succ',res);
	                                            // if (typeof stat != 'undefined') stat.efunc({po:91052,posId: 910005});
	                                            
	                                        }
	                                    });
	                                }
	                            })
	                        );
	                    }
	                }));
	            }
            }else{
            	 if (phoneCheck && pwdCheck && verifyCheck && mcodeCheck && treatyCheck) {
	                 $.ajax(self.remote({
	                    type: 'post',
	                    url: passportUrl + '/check/phone?is_ajax=1&jsoncallback=?',
	                    dataType: 'jsonp',
	                    data: {phone: phoneVal}
	                }, {
	                    context: $form,
	                    mode: 'register',
	                    elem: $phone,
	                    hint: passportHint.phone.remote,
	                    error: function() {
	                        if(typeof stat != 'undefined') stat.efunc({po:91048,posId: 910005});
	                    },
	                    success: function() {
	                        $.ajax(self.remote({
	                                type: 'post',
	                                url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
	                                dataType: 'jsonp',
	                                data: {verify: verifyVal}
	                            }, {
	                                context: $form,
	                                mode: 'register',
	                                elem: $verify,
	                                hint: passportHint.verify.remote,
	                                error: function() {
	                                    if(typeof stat != 'undefined') stat.efunc({po:91033,posId: 910005});
	                                },
	                                success: function() {
	                                    self.resetData('register');
	                                    self.submit({
	                                        form: $form,
	                                        button: $submit,
	                                        text: '注册中',
	                                        error: function(res) {
	                                            if (res.msg == '手机验证码错误或过期') {
	                                                if(typeof stat != 'undefined') stat.efunc({po:91036,posId: 910005});
	                                            }
	                                        },
	                                        success: function() {
	                                            if (typeof stat != 'undefined') stat.efunc({po:91052,posId: 910005});
	                                            
	                                        }
	                                    });
	                                }
	                            })
	                        );
	                    }
	                }));
	            }
            }
           
        });
    },
    login: function(form, button) {
        if (!$(form).length) return;
        var self = this;
        var $form = $(form);
        var $uname = $form.find('input[name="uname"]');
        var $pwd = $form.find('input[name="password"]');
        var $verify = $form.find('input[name="verify"]');
        var $expire = $form.find('input[name="expire"]');
        var $submit = $form.find(button);
        var day = 7;
        self.oldval.login = {};
        self.valid.login = {};
        self.invalid.login = {};

        $('body').delegate(form + ' input[name="expire"]', 'click', function() {
            if ($expire.prop('checked')) {
                day = 7;
            } else {
                day = 0;
            }
            $('#expire').val(day);
        });

        $uname.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.uname.required,
                mode:'login',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91062,posId: 91095});
                }
            });
            
        });
        $pwd.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.pwd.required,
                mode:'login',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91063,posId: 91095});
                }
            });
            
        });
        $verify.bind('blur', function() {
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.verify.required,
                mode:'login',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91064,posId: 91095});
                }
            });
            if (check) {
                if (self.oldval.login[name] === val && self.valid.login[name]) return false;
                if (self.oldval.login[name] === val && self.invalid.login[name]) {
                    self.hintArgs.text = passportHint.verify.remote;
                    var errhint = PASSPORT.createHint(self.hintArgs, 'span');
                    self.hintEvent($this, errhint);
                    return false;
                }
                self.oldval.login[name] = val;
//              $.ajax(self.remote({
//                  type: 'post',
//                  url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
//                  dataType: 'jsonp',
//                  data: {verify: val}
//              }, {
//                  centext: $form,
//                  mode: 'login',
//                  elem: $this,
//                  hint: passportHint.verify.remote,
//                  error: function() {
//                      if(typeof stat != 'undefined') stat.efunc({po:91065,posId: 91095});
//                      $form.find('.verifyCode').click();
//                  },
//                  success: function () {
//                      if(typeof stat != 'undefined') stat.efunc({po:91093,posId: 91095});
//                  }
//              }));
            }
        });

        $submit.bind('click', function() {
            PASSPORT.efunc({po:91038,posId: 91095});
           
            
            var $this = $(this);
            var unameVal = $.trim($uname.val());
            var unameCheck = self.required({
                elem:$uname,
                val:unameVal,
                hint:passportHint.uname.required,
                mode:'login',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91062,posId: 91095});
                }
            });
            var pwdVal = $.trim($pwd.val());
            var pwdCheck = self.required({
                elem:$pwd,
                val:pwdVal,
                hint:passportHint.pwd.required,
                mode:'login',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91063,posId: 91095});
                }
            });

			var loginOverflow = $('#yzmbox>div')
			if(loginOverflow.length != 0){
		        var $verify = $form.find('input[name="verify"]');
	            var verifyVal = $.trim($verify.val());
	            var verifyCheck = self.required({
	                elem:$verify,
	                val:verifyVal,
	                hint:passportHint.verify.required,
	                mode:'login',
	                error: function() {
	                    if(typeof stat != 'undefined') stat.efunc({po:91064,posId: 91095});
	                }
	            });
	                                // 刷新图片验证码
                    $('#login-popup .refreshCode, #login-popup .verifyCode').bind('click', function() {
                        PASSPORT.efunc({po:91029, posId:91095});
                        PASSPORT.getImgcode($('#login-popup .verifyCode'));
                    });
				 PASSPORT.getImgcode($('#login-popup .verifyCode'));
				if (unameCheck && pwdCheck && verifyCheck) {
	               $.ajax(self.remote({
	                    type: 'post',
	                    url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
	                    dataType: 'jsonp',
	                    data: {verify: verifyVal}
	                }, {
	                    centext: $form,
	                    mode: 'login',
	                    elem: $verify,
	                    hint: passportHint.verify.remote,
	                    error: function() {
	                        if(typeof stat != 'undefined') stat.efunc({po:91065,posId: 91095});
	                        $form.find('.verifyCode').click();
	                    },
	                    success: function() {
	                        self.resetData('login');
	                        self.submit({
	                            form: $form,
	                            button: $submit,
	                            text: '登录中',
	                            success: function(data) {
	                                if (typeof stat != 'undefined') stat.efunc({po:91066,posId: 91095});
	                            }
	                        });
	                    }
	                }));
	            }
			}else{
				if (unameCheck && pwdCheck) {
//	               $.ajax(self.remote({
//	                    type: 'post',
//	                    url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
//	                    dataType: 'jsonp',
//	                    data: {verify: verifyVal}
//	                }, {
//	                    centext: $form,
//	                    mode: 'login',
//	                    elem: $verify,
//	                    hint: passportHint.verify.remote,
//	                    error: function() {
//	                        if(typeof stat != 'undefined') stat.efunc({po:91065,posId: 91095});
//	                        $form.find('.verifyCode').click();
//	                    },
//	                    success: function() {
	                        self.resetData('login');
	                        self.submit({
	                            form: $form,
	                            button: $submit,
	                            text: '登录中',
	                            error:function(data){
                            			if(data.loginOverflow == 1){
                            				var yzmhtml = '<div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" placeholder="验证码" /></div>';
											yzmhtml += '<div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91029" /><i class="passport-icon2 icon-refresh refreshCode" jktag="0001|0.1|91029"></i></div></div>';
        									$('#yzmbox').html(yzmhtml);	
        									var boxHeight = $('#login-popup').height();
	        									var windowHeight = $(window).height();
	        									var boxTop = (windowHeight-boxHeight)/2;
	        								
	        									$('#login-popup').css("top",boxTop);
        									 PASSPORT.getImgcode($('#login-popup .verifyCode'));
        									// 刷新图片验证码
						                    $('#login-popup .refreshCode, #login-popup .verifyCode').bind('click', function() {
						                        PASSPORT.efunc({po:91029, posId:91095});
						                        PASSPORT.getImgcode($('#login-popup .verifyCode'));
						                    });
                            			}
	                            },
	                            success: function(data) {

	                                if (typeof stat != 'undefined') stat.efunc({po:91066,posId: 91095});
	                            }
	                        });
//	                    }
//	                }));
	            }
			}
        });
    },
    fastlogin: function(form, button) {
        if (!$(form).length) return;
        var self = this;
        var $form = $(form);
        var $phone = $form.find('input[name="phone"]');
        var $verify = $form.find('input[name="verify"]');
        var $mcode = $form.find('input[name="verify_code"]');
        var $hold = $form.find('#remember');
        var $submit = $form.find(button);
        var phone = PASSPORT.getCookie('hold_phone', $phone);
        self.oldval.fastlogin = {};
        self.valid.fastlogin = {};
        self.invalid.fastlogin = {};

        if (phone) $hold.prop('checked', true);

        $phone.bind('blur', function() {
        	
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem: $this,
                val: val,
                hint: passportHint.phone.required,
                mode: 'fastlogin',
                error: function() {
                    if (typeof stat != 'undefined') stat.efunc({
                        po: 91083,
                        posId: 91095
                    });
                },
                rules: {
                    elem: $this,
                    val: val,
                    rules: passportReg.phone,
                    hint: passportHint.phone.rules,
                    error: function() {
                        if (typeof stat != 'undefined') stat.efunc({
                            po: 91084,
                            posId: 91095
                        });
                    },
                    success: function () {
                        if (typeof stat != 'undefined') stat.efunc({
                            po: 91092,
                            posId: 91095
                        });
                    }
                }
            });
        });
        $verify.bind('blur', function() {
        	
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.verify.required,
                mode:'fastlogin',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91085, posId: 91095});
                }
            });
            if (check) {
                if (self.oldval.fastlogin[name] === val && self.valid.fastlogin[name]) return false;
                if (self.oldval.fastlogin[name] === val && self.invalid.fastlogin[name]) {
                    self.hintArgs.text = passportHint.verify.remote;
                    var errhint = PASSPORT.createHint(self.hintArgs, 'span');
                    self.hintEvent($this, errhint);
                    return false;
                }
                self.oldval.fastlogin[name] = val;
                $.ajax(self.remote({
                    type: 'post',
                    url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                    dataType: 'jsonp',
                    data: {verify: val}
                }, {
                    centext: $form,
                    mode: 'fastlogin',
                    elem: $this,
                    hint: passportHint.verify.remote,
                    error: function() {
                        if(typeof stat != 'undefined') stat.efunc({po:91086, posId: 91095});
                        $form.find('.verifyCode').click();
                    }
                }));
            }
        });
        $mcode.bind('blur', function() {
        	
            var $this = $(this);
            var name = $this.attr('name');
            var val = $.trim($this.val());
            var check = self.required({
                elem:$this,
                val:val,
                hint:passportHint.mobile.required,
                mode:'fastlogin',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91087, posId: 91095});
                }
            });
        });
        $submit.bind('click', function() {
            PASSPORT.efunc({po:91043, posId: 91095});
            var $this = $(this);
            var phoneVal = $.trim($phone.val());
            var phoneCheck = self.required({
                elem: $phone,
                val: phoneVal,
                hint: passportHint.phone.required,
                mode: 'fastlogin',
                error: function() {
                    if (typeof stat != 'undefined') stat.efunc({
                        po: 91083
                    });
                },
                rules: {
                    elem: $phone,
                    val: phoneVal,
                    rules: passportReg.phone,
                    hint: passportHint.phone.rules,
                    error: function() {
                        if (typeof stat != 'undefined') stat.efunc({
                            po: 91084
                        });
                    }
                }
            });
            var verifyVal = $.trim($verify.val());
            var verifyCheck = self.required({
                elem:$verify,
                val:verifyVal,
                hint:passportHint.verify.required,
                mode:'fastlogin',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91085, posId: 91095});
                }
            });
            var mcodeVal = $.trim($mcode.val());
            var mcodeCheck = self.required({
                elem:$mcode,
                val:mcodeVal,
                hint:passportHint.mobile.required,
                mode:'fastlogin',
                error: function() {
                    if(typeof stat != 'undefined') stat.efunc({po:91087, posId: 91095});
                }
            });

            if (phoneCheck && verifyCheck && mcodeCheck) {
               $.ajax(self.remote({
                    type: 'post',
                    url: passportUrl + '/check/verify?is_ajax=1&jsoncallback=?',
                    dataType: 'jsonp',
                    data: {verify: verifyVal}
                }, {
                    centext: $form,
                    mode: 'fastlogin',
                    elem: $verify,
                    hint: passportHint.verify.remote,
                    error: function() {
                        if(typeof stat != 'undefined') stat.efunc({po:91086, posId: 91095});
                        $form.find('.verifyCode').click();
                    },
                    success: function() {
                        self.resetData('fastlogin');
                        if ($hold.prop('checked')) {
                            PASSPORT.setCookie('hold_phone', $phone.val(), 7);
                        } else {
                            PASSPORT.setCookie('hold_phone', '', 7);
                        }
                        self.submit({
                            form: $form,
                            button: $submit,
                            text: '登录中',
                            success: function(data) {
	                            		if(data.loginOverflow == 1){
	                            			var yzmhtml = '<div class="form-cont"><div class="layout-inner"><input type="text" name="verify" class="passport-txt xl w-lg" tabindex="3" placeholder="验证码" /></div>';
											yzmhtml += '<div class="imgcode"><img src="" alt="" class="verifyCode" jktag="0001|0.1|91029" /><i class="passport-icon2 icon-refresh refreshCode" jktag="0001|0.1|91029"></i></div></div>';
	        									$('#yzmbox').html(yzmhtml);
	        									var boxHeight = $('#login-popup').height();
	        									var windowHeight = $(window).height();
	        									var boxTop = (windowHeight-boxHeight)/2;
	        									$('#login-popup').css("top",boxTop);
	                            		}
                                if (typeof stat != 'undefined') stat.efunc({po:91066, posId: 91095});
                                
                            }
                        });
                    }
                }));
            }
        });
    },
    signPop: function() {
        var self = this;
        var registerPop = function(fn) {
            // 调用注册弹层请使用.diaRegBtn, 不要使用其他 class 或 id
            $(this).passportPopup({
                popupId: 'register-popup',
                string: passportReghtmlold,
                zindex: 9999,
                fn: function() {
                	
                	
                    // 埋点
                    PASSPORT.efunc({posId:910005});
                    PASSPORT.getImgcode($('#register-form-popup .verifyCode'));
                    // placeholder
                    $('.passport-txt').passportPlaceholder('placeholder');
                    // $('input[name="password"]').passportPasswordStrong($('#safely'));

                    self.register('#register-form-popup', '#register-pop-submit');

                    // 刷新图片验证码
                    $('#register-form-popup .refreshCode, #register-form-popup .verifyCode').bind('click', function() {
                        PASSPORT.efunc({po:91034, posId:910005});
                        PASSPORT.getImgcode($('#register-form-popup .verifyCode'));
                    });
                    $('#register-form-popup .verifyCode').click();

                    // 获取动态码
                    $('#register-form-popup .js-getcode').bind('click', function() {
                        PASSPORT.efunc({po:91035, posId:910005});
                        if (self.lock) self.getMcode('#register-form-popup');
                    });

                    // 第三方登录埋点
                    $('#register-popup [data-pl]').click(function() {

                        var $this = $(this);
                        var val = $this.attr('data-pl');

                        switch(val) {
                            case 'qq':
                           		 PASSPORT.setCookie('ohterlogin','qq',1);
                                PASSPORT.efunc({po:91053, posId:910005});
                                break;
                            case 'weibo':
                           		  PASSPORT.setCookie('ohterlogin','weibo',1);
                                PASSPORT.efunc({po:91054, posId:910005});
                                break;
                            case 'weixin':
                           		PASSPORT.setCookie('ohterlogin','weixin',1);
                                PASSPORT.efunc({po:91055, posId:910005});
                                break;
                            case 'eoe':
                            	 PASSPORT.setCookie('ohterlogin','eoe',1);
                                PASSPORT.efunc({po:91056, posId:910005});
                                break;
                        };
                    });

                    $(document).bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            $('#register-pop-submit').click();
                        }
                    });
                    if (fn) fn();
                    // ad
                    BAIDU_CLB_fillSlotAsync('1170455', 'reg-ad01');
                },
                callback: function() {
                    // 埋点
                    PASSPORT.efunc({po:91088, posId:910005});
                   
                    
                }
            });
        };
        
        
        var loginPop = function(fn) {
            // 调用登录弹层请使用.diaLoginBtn, 不要使用其他 class 或 id
            $(this).passportPopup({
                popupId: 'login-popup',
                string: passportLoginhtml,
                zindex: 9999,
                fn: function() {
                       $('.regphone>a').on("click",function(){
                       
                       	 document.location.href=passportUrl+"/sso/reg_phone";
                       	 // document.location.href="/sso/reg_phone";
                       });
                       $('.phonedtm').on("click",function(){
                       
                       	 document.location.href=passportUrl+"/sso/login?d=2";
                       	 // document.location.href="/sso/login?d=2";
                       })
                       $('#login-popup .close').on("click",function(){
                       		
                       })
                       	
                    // 埋点
                    PASSPORT.efunc({posId:91095});
                    

                    
                    PASSPORT.getImgcode($('#login-popup .verifyCode'));
                   
                    // placeholder
                    $('.passport-txt').passportPlaceholder('placeholder');
                    PASSPORT.tabs($('#login-tabs'), function(event) {
                        var val = event.attr('data-tab');
                        switch (val) {
                            case 'login':
                                PASSPORT.efunc({po: 91031, posId:91095});
                                break;
                            case 'fastlogin':
                                PASSPORT.efunc({po: 91028, posId:91095});
                                break;
                        }
                    });

                    // 刷新图片验证码
                    $('#login-popup .refreshCode, #login-popup .verifyCode').bind('click', function() {
                        PASSPORT.efunc({po:91029, posId:91095});
                        PASSPORT.getImgcode($('#login-popup .verifyCode'));
                    });
                    $('#login-popup .verifyCode').click();

                    // 获取动态码
                    $('#fastlogin-form-popup .js-getcode').bind('click', function() {
                        PASSPORT.efunc({po:91039, posId:91095});
                        if (self.lock) self.getMcode('#fastlogin-form-popup', {
                            restype: 5
                        });
                    });
                    $('#login-popup .forget-link').bind('click', function() {
                        PASSPORT.efunc({po:91030, posId:91095});
                    });
                    // 第三方登录埋点
                    $('#login-popup [data-pl]').bind('click', function() {
                        var $this = $(this);
                        var val = $this.attr('data-pl');
                        // alert(val);
                        switch(val) {
                            case 'qq':
                            PASSPORT.setCookie('ohterlogin','qq',1);
                                PASSPORT.efunc({po:91061, posId:91095});
                                break;
                            case 'weibo':
                            PASSPORT.setCookie('ohterlogin','weibo',1);
                                PASSPORT.efunc({po:91058, posId:91095});
                                break;
                            case 'weixin':
                            PASSPORT.setCookie('ohterlogin','weixin',1);
                                PASSPORT.efunc({po:91059, posId:91095});
                                break;
                            case 'eoe':
                             PASSPORT.setCookie('ohterlogin','eoe',1);
                                PASSPORT.efunc({po:91060, posId:91095});
                                break;
                        };
                    });
                    // 登录
                    self.login('#login-form-popup', '#login-pop-submit');
                    // 免注册登录
                    self.fastlogin('#fastlogin-form-popup', '#fastlogin-pop-submit');

                    $(document).bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            // 登录
                            if ($('#login-pop-submit').is(':visible')) $('#login-pop-submit').click();
                            // 免注册登录
                            if ($('#fastlogin-pop-submit').is(':visible')) $('#fastlogin-pop-submit').click();
                        }
                    });
                    if (fn) fn();
                },
                callback: function() {
                    // 埋点
                    PASSPORT.efunc({po:91089, posId:91095});
                }
            });
        }
        $('body').delegate('.diaRegBtn, .regnow, #regnow, #diaregBtn', 'click', function() {
            // PASSPORT.efunc({po:91032, posId: 91095});
            registerPop();
            return false;
        });
        
        $('body').delegate('.diaLoginBtn, .loginnow, #loginnow, #diaLoginBtn', 'click', function() {
            // PASSPORT.efunc({po:91040, posId: 910005});
            loginPop();
            return false;
        });
        $('body').delegate('.diaRegBtnTab', 'click', function() {
            PASSPORT.efunc({po:91032, posId: 91095});
            registerPop();
            return false;
        });
        $('body').delegate('.diaLoginBtnTab', 'click', function() {
            PASSPORT.efunc({po:91040, posId: 910005});
            loginPop();
            return false;
        });

        return {login: loginPop, register: registerPop};
    }
};

$(function() {
    SIGN.init();
})