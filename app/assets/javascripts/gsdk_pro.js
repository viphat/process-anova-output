//= require gsdk_pro/jquery-ui-1.10.4.custom.min
//= require bootstrap3/bootstrap
//= require gsdk_pro/gsdk-checkbox
//= require gsdk_pro/gsdk-morphing
//= require gsdk_pro/gsdk-radio
//= require gsdk_pro/gsdk-bootstrapswitch
//= require gsdk_pro/bootstrap-select
//= require gsdk_pro/bootstrap-datepicker
//= require gsdk_pro/chartist.min
//= require gsdk_pro/jquery.tagsinput
//= require gsdk_pro/retina.min
//= require gsdk_pro/jquery.flexisel
//= require gsdk_pro/get-shit-done
//= require gsdk_pro/demo
//= require gsdk_pro/init
//
// Dynamic load the javascript init based on features specified from view
// Combine the best practice to handle javascript invocation in rails
// http://brandonhilkert.com/blog/organizing-javascript-in-rails-application-with-turbolinks/
// https://viget.com/extend/javascript-execution-patterns-for-non-web-apps
//
// You have two methods to load your custom javascript init
//
// Method one:
// -----------------------------------------------------------------------------
// Uncomment the following lines to load your custom init in here
//
// $(document).on("page:change", function() {
//   if ($.inArray('feature1',App.features()) >= 0) {
//     Write your feature1 init script here ...
//   }
// });
//
// Method two:
// -----------------------------------------------------------------------------
// Put the above script from method one in separate js file, then require it
// from application.js or gsdk_pro.js. Let say if you have 3 feature init
// scripts with file name app.feature1.js, app.feature2.js and app.feature3.js.
// You can place the `=` sign in front of the require statement to init that
// particular feature.
//
// require app.feature1
// require app.feature2
// require app.feature3
//
// After you done, please remember to add the content_for to specify the feature
// you want to add in your view. For example, if i want to add the feature1 and
// feature2, it will be <% content_for :features, "feature1 feature2" %>
