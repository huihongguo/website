// 系统全局
$(function(){ 
 //导航条事件绑定
 $("#menu li[id^='mm']").each(function(){
								           var i=($(this).attr("id")).substr(2);
								            var id="#mm"+i;
											var tab="#tab"+i;
								            $(id).hover(
					                                   function () {
					                                   $(tab).slideDown(400);
					                                    },
					                                   function () {
					                                   $(tab).slideUp(400);
					                                     })
										   }
			                    ); 
 
 //点击新闻次数		
if($("#newsHits").attr("title")!=undefined)		
  $("#newsHits").load("/ajax/newsHits.aspx?ID="+$("#newsHits").attr("title"));	
if($("#productHits").attr("title")!=undefined)	
{	
  $("#productHits").load("/ajax/productHits.aspx?ID="+$("#productHits").attr("title"));
}	

  $("#wx").hover(
					                                   function () {
					                                  $("#wxSS").show();;
					                                    },
					                                   function () {
					                                   $("#wxSS").hide();
					                                     })
		   });

