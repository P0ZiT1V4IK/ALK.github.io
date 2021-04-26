document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, open);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, 300);
  });

goods=[]
 $.getJSON('goods.json', function(data) {
  $.each(data, function(key, val) {
      goods.push(val);
    });
});
console.log(goods)
