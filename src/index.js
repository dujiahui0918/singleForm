$(function(){
    $(".check").on("click",function(){
        var _that = $(this);
        var val = _that.prev().val();
        if(!val){
            _that.next().text("姓名不能为空");
        }else if(val.length<4||val.length>16){ 
            _that.next().text("必填，长度为4~16个字符");
        }else{
            _that.next().text("格式正确");
        }
    })
})