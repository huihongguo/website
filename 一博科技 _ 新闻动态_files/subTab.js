// 系统全局
$(function(){ 
 //导航条事件绑定
 $("#subRightBox div[id^='subRightTitleTab']").each(function(){
								           var i=($(this).attr("id")).substr(16);
								            var id="#subRightTab"+i;
											var tab="#tab"+i;
											 $(this).mouseover(function () {
																		  if($(this).attr("class").substr(19,1) ==3)
																		  {
																			  $("#subRightBox div[id^='subRightTitleTab']").removeClass('subRightTitleTxtTab3Over')
																			  $("#subRightBox div[id^='subRightTitleTab']").addClass('subRightTitleTxtTab3')
																			  $(this).removeClass('subRightTitleTxtTab3')
																			  $(this).addClass('subRightTitleTxtTab3Over')
																		  }
																		  else
																		  {
																			    $("#subRightBox div[id^='subRightTitleTab']").removeClass('subRightTitleTxtTab2Over')
																				$("#subRightBox div[id^='subRightTitleTab']").addClass('subRightTitleTxtTab2')
																				$(this).removeClass('subRightTitleTxtTab2')
																				$(this).addClass('subRightTitleTxtTab2Over')
																		  }
																		  $("#subRightContent div[id^='subRightTab']").hide()
																		  $(id).show();
																			 })
								        
										   }
			                    ); 
		   });
