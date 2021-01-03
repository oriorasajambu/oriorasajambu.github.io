$(function(){
  $.get("tools/sidebar.html", '', function (data) { $("#content-wrapper").before(data); });
  $.get("tools/topbar.html", '', function (data) { $(".container-fluid").before(data); });
  $.get("tools/footer.html", '', function (data) { $("#content").after(data); });
  $.get("tools/logoutmodal.html", '', function (data) { $("#page-top").after(data); });
  var split = location.search.replace('?', '').split('&').map(function(val){
    if(val.length <= 0) return "null";
    return val.split('=');
  });
  if(split != "null"){
    if(split[0][1] && split[0][1] != 'u'){
      var pages = split[0][1];
      alert('pages:'+pages);
      $.get("pages/"+pages+".html", '', function (data) {
        $(".container-fluid").empty();
        $(".container-fluid").append(data);
      });
    }
    else $.get("pages/404.html", '', function (data) { $(".container-fluid").append(data); });
  }
  else $.get("pages/dashboard.html", '', function (data) { $(".container-fluid").append(data); });
});
