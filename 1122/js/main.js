var str1 = '今天是' + year + '年' + month + '月' + day + '日';
var str2 = '我依然想你';
var str3 = '我不想再失去机会了';
var str4 = '抑或从来没有过机会';
var str5 = '就算从来没有过机会';
var str6 = '我也不该放弃';
var str7 = '不是吗?';
var str8 = '所以希望在这一刻';
var str9 = '你可以给我一个机会';
var str10 = '我已经藏得够久了';
var str11 = '陈心怡';
var str12 = '我喜欢你';
var str13 = '不管结果如何';
var str14 = '谢谢你愿意花';
var str15 = '那么久的时间';
var str16 = '倾听我的心声';
var str17 = '谢谢';
var str18 = '我已经非常开心了';
var oShow1 = document.getElementById('show1');
var oShow2 = document.getElementById('show2');
var oShow3 = document.getElementById('show3');
var oShow4 = document.getElementById('show4');
var oShow5 = document.getElementById('show5');
var oShow6 = document.getElementById('show6');
var oShow7 = document.getElementById('show7');
var oShow8 = document.getElementById('show8');
var oShow9 = document.getElementById('show9');
var oShow10 = document.getElementById('show10');
var oShow11 = document.getElementById('show11');
var oShow12 = document.getElementById('show12');
var oShow13 = document.getElementById('show13');
var oShow14 = document.getElementById('show14');
var oShow15 = document.getElementById('show15');
var oShow16 = document.getElementById('show16');
var oShow17 = document.getElementById('show17');
var oShow18 = document.getElementById('show18');
var oBtns = document.getElementById('btn');
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
var r = 0;
var s = 0;
var t = 0;
var u = 0;
var v = 0;
var w = 0;
var x = 0;
var y = 0;
var z = 0;
//展开
oBtns.onclick = function() {
	tishi.style.color = "rgba(0,0,0,0)";
	//如果所有的字出来了,点击展开不操作
	//		if(i == str.length){
	//			return;
	//		}
	if(i == str1.length) return;
	var timer1 = setInterval(function() {
		oShow1.innerHTML += str1.charAt(i++);
		if(i == str1.length) {
			clearInterval(timer1);
			if(j == str2.length) return;
			var timer2 = setInterval(function() {
				oShow2.innerHTML += str2.charAt(j++);
				if(j == str2.length) {
					clearInterval(timer2);
					if(k == str3.length) return;
					var timer3 = setInterval(function() {
						oShow3.innerHTML += str3.charAt(k++);
						if(k == str3.length) {
							clearInterval(timer3);
							if(l == str4.length) return;
							var timer4 = setInterval(function() {
								oShow4.innerHTML += str4.charAt(l++);
								if(l == str4.length) {
									clearInterval(timer4);
									if(m == str5.length) return;
									var timer5 = setInterval(function() {
										oShow5.innerHTML += str5.charAt(m++);
										if(m == str5.length) {
											clearInterval(timer5);
											if(n == str6.length) return;
											var timer6 = setInterval(function() {
												oShow6.innerHTML += str6.charAt(n++);
												if(n == str6.length) {
													clearInterval(timer6);
													if(o == str7.length) return;
													var timer7 = setInterval(function() {
														oShow7.innerHTML += str7.charAt(o++);
														if(o == str7.length) {
															clearInterval(timer7);
															$("#show1").hide(500);
															$("#show2").hide(500);
															$("#show3").hide(500);
															$("#show4").hide(500);
															$("#show5").hide(500);
															$("#show6").hide(500);
															$("#show7").hide(500);

															if(p == str8.length) return;
															var timer8 = setInterval(function() {
																oShow8.innerHTML += str8.charAt(p++);
																if(p == str8.length) {
																	clearInterval(timer8);

																	if(q == str9.length) return;
																	var timer9 = setInterval(function() {
																		oShow9.innerHTML += str9.charAt(q++);
																		if(q == str9.length) {
																			clearInterval(timer9);

																			if(r == str10.length) return;
																			var timer10 = setInterval(function() {
																				oShow10.innerHTML += str10.charAt(r++);
																				if(r == str10.length) {
																					clearInterval(timer10);

																					if(s == str11.length) return;
																					var timer11 = setInterval(function() {
																						oShow11.innerHTML += str11.charAt(s++);
																						if(s == str11.length) {
																							clearInterval(timer11);
																							if(t == str12.length) return;
																							var timer12 = setInterval(function() {
																								oShow12.innerHTML += str12.charAt(t++);
																								if(t == str12.length) {
																									clearInterval(timer12);
																									if(u == str13.length) return;
																									var timer13 = setInterval(function() {
																										oShow13.innerHTML += str13.charAt(u++);
																										if(u == str13.length) {
																											clearInterval(timer13);
																											if(v == str14.length) return;
																											var timer14 = setInterval(function() {
																												oShow14.innerHTML += str14.charAt(v++);
																												if(v == str14.length) {
																													clearInterval(timer14);
																													$("#show8").hide(500);
																													$("#show9").hide(500);
																													$("#show10").hide(500);
																													$("#show11").hide(500);
																													$("#show12").hide(500);
																													$("#show13").hide(500);
																													$("#show14").hide(500);
																													if(w == str15.length) return;
																													var timer15 = setInterval(function() {
																														oShow15.innerHTML += str15.charAt(w++);
																														if(w == str15.length) {
																															clearInterval(timer15);
																															if(x == str16.length) return;
																															var timer16 = setInterval(function() {
																																oShow16.innerHTML += str16.charAt(x++);
																																if(x == str16.length) {
																																	clearInterval(timer16);
																																	if(y == str17.length) return;
																																	var timer17 = setInterval(function() {
																																		oShow17.innerHTML += str17.charAt(y++);
																																		if(y == str17.length) {
																																			clearInterval(timer17);
																																			if(z == str18.length) return;
																																			var timer18 = setInterval(function() {
																																				oShow18.innerHTML += str18.charAt(z++);
																																				if(z == str18.length) {
																																					clearInterval(timer18);
																																					setTimeout(function() {
																																						$("#zhezhao2").show(1500);
																																					}, 1500);
																																				}
																																			}, 200);
																																		}
																																	}, 200);
																																}
																															}, 200);
																														}
																													}, 200);
																												}
																											}, 200);
																										}
																									}, 200);
																								}
																							}, 200);
																						}
																					}, 200);
																				}
																			}, 200);
																		}
																	}, 200);
																}
															}, 200);
														}
													}, 200);
												}
											}, 200);
										}
									}, 200);
								}
							}, 200);
						}
					}, 200);
				}
			}, 200);
		}
	}, 200);
}