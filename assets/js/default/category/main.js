$(function () {
    var bar = '';
    bar += '<div class="sidebar-item categories">';
        bar += '<h3 class="sidebar-title">Category</h3>';
        bar += '<ul class="mt-3">';
            bar += '<li><a href="/m/category/popular/">Popular <span>(7)</span></a></li>';
            bar += '<li><a href="/m/category/3d/">3D <span>(0)</span></a></li>';
            bar += '<li><a href="/m/category/education/">Education <span>(2)</span></a></li>';
            bar += '<li><a href="/m/category/business/">Business <span>(0)</span></a></li>';
            bar += '<li><a href="/m/category/post-instagram/">Post Instagram <span>(2)</span></a></li>';
        bar += '</ul>';
    bar += '</div>';


    $("#categories-detail").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('categories').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}