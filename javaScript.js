/**
 * Created by luopengfei on 15/11/23.
 */

window.onload = function() {

    var  rightDiv = document.getElementById("right");
    var  mainDiv = document.getElementById("main");

    var  ifKeyDown = false; //

    rightDiv.onmousedown = function() {
        ifKeyDown = true;
    }

    rightDiv.onmouseup = function() {
        ifKeyDown = false;
    }


    window.onmousemove =  function(e) {

        if (ifKeyDown == true) {
            var  x = e.clientX;
            var addWidth ="";// 新增宽度
            var  widthBefore = mainDiv.offsetWidth - 2;// 选取框变化前的宽度
            addWidth = x - getLeftOffset(mainDiv).left - widthBefore; // 鼠标移动后宽度
            mainDiv.style.width = addWidth + widthBefore + "px";// 选取框变化后
        }


    }
}

function getLeftOffset(node) {
    var  parent = node.offsetParent;
    var  left = node.offsetLeft;
    while (parent != null) {
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    return left;
}

