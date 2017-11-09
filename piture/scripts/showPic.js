/**
 * Created by Administrator on 2017/11/9.
 */
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var oDefault = document.getElementById("default");
    oDefault.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var oDes = document.getElementById("des");
    oDes.firstChild.nodeValue = text;
}
