!function (){
var lock=false;
// 新增一个条件
$('body').on('click','.newItem',function(){
		var str='<div class="contains laterSelect">'+
	'<select name="" id="" class="firstSelect">'+
	'	<option value="" >1级标签</option>'+
	'	<option value="" >1级标签1</option>'+
	'</select>'+
	'<select name="" id="" class="secondSelect">'+
	'	<option value="" >2级标签</option>'+
	'	<option value="" >2级标签1</option>'+
	'</select>'+
	'<select name="" id="" class="thirdSelect">'+
	'	<option value="" >3级标签</option>'+
	'	<option value="" >3级标签1</option>'+
	'</select>'+
	'<span class="delete"><a href="javascript:;">&times;</a></span>'+
	'</div>'
	$(this).before(str);
	var h=$(this).parent().height();
	$(this).siblings('.line').css('height',h-50+'px');
	$(this).siblings('.line').removeClass('hide');
	$(this).parent().css('padding-left','90px')
	$(this).siblings('.cell-right').removeClass('hide');
	$(this).siblings('.cell-right').css('top',(h-20)/2+'px')
	bigLineChange()
	$(this).parent().css('width','630px')
})
// 新增一组条件
$('body').on('click','.newTerm',function(){
	lock=true;
		var str='<div class="term">'+
		'<div class="line hide"></div>'+
		'<div class="cell-right hide"><span class="switch-on"></span></div>'+
		'<div class="contains laterSelect">'+
	'<select name="" id="" class="firstSelect">'+
	'	<option value="" >1级标签</option>'+
	'	<option value="" >1级标签1</option>'+
	'</select>'+
	'<select name="" id="" class="secondSelect">'+
	'	<option value="" >2级标签</option>'+
	'	<option value="" >2级标签1</option>'+
	'</select>'+
	'<select name="" id="" class="thirdSelect">'+
	'	<option value="" >3级标签</option>'+
	'	<option value="" >3级标签1</option>'+
	'</select>'+
	'<span class="delete"><a href="javascript:;">&times;</a></span>'+
	'</div><div class="newItem"><a href="javascript:;">+ 新加一个条件</a></div></div>'
	$('.filterGroup').append(str);
	bigLineChange()
	honeySwitch.init();

})

// 删除item
$('body').on('click','.delete',function(){
	if($(this).parents('.term').find('.delete').length>1){
		if($(this).parents('.term').find('.delete').length<=2){
			$(this).parents('.term').css('width','700px');
			$(this).parent().siblings('.line').addClass('hide');
			$(this).parent().siblings('.cell-right').addClass('hide');
			$(this).parents('.term').css('padding-left','20px')
		}else{
			$(this).parents('.term').css('width','630px');
			var h=$(this).parents('.term').height();
			$(this).parent().siblings('.line').css('height',h-90+'px');
			$(this).parent().siblings('.line').removeClass('hide');
			$(this).parents('.term').css('padding-left','90px')
			$(this).parent().siblings('.cell-right').css('top',(h-60)/2+'px')
		}
		$(this).parent().remove();
		bigLineChange()

	}else{
		if($('.filterGroup .term').length<2){
			alert('仅剩一组条件，不能删除哦！')
		}else{
			$(this).parents('.term').remove();
			bigLineChange();
		}

	}

})

function bigLineChange(){
	if(lock){
		if($('.term').length<=1){
			$('.bigLine').addClass('hide');
			$('.bigLine').siblings('.cell-right').addClass('hide');
			$('.filterGroup').css('padding-left','0px')
		}else{
			var h=$('.filterGroup').height();
			$('.filterGroup .bigLine').css('height',h-25+'px');
			$('.filterGroup .bigLine').removeClass('hide');
			$('.filterGroup').css('padding-left','90px');
			$('.bigLine').siblings('.cell-right').removeClass('hide');
			$('.bigLine').siblings('.cell-right').css('top',(h-60)/2+'px');
		}

	}

}
}();


