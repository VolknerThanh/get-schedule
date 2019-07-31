/*
READ ME

tool 					: GET SCHEDULE
description 	: cào dữ liệu từ trang daotao để lấy thời khóa biểu của các khoa
author				: RainSilver
contributer		: Giấy Nháp
github				: https://github.com/VolknerThanh
NOTE 					: tool thao tác trên nền front-end, chỉ get dữ liệu, không tác động đến cơ sở dữ liệu

===========================================
RUNNING
===========================================
1. mở trang đào tạo và đăng nhập.
2. vào tab đăng ký môn.
3. bấm Ctrl+Shift+J để mở cửa sổ console ở devtool.
4. copy toàn bộ code dưới đây và paste vào console đó và nhấn Enter.
5. Sau đó gõ " runLoop(so_luong) " với so_luong là số lượng dòng muốn cào trong dropdown list.
6. Đợi nó chạy xong.
7. Gõ " downloadData() " để tải file về máy.

*/

dsLop = []

function getInfo(i) {
	// get select drop down list
	var allLop = document.getElementById("selectLop").options;
	// "select" option at 'i' time steps
	allLop[i].selected=true;
	// change data table after select option
	selectLop_changed();

	var dsMon = [];
	// get entire schedule in table
	var TKB_table = document.getElementById("divTDK").children;
	for(var i = 0; i < TKB_table.length; i++) {
	  dsMon.push(TKB_table[i]);
	}

	// get current class ID
	var tenlop = document.getElementsByClassName('body-table')[0].getElementsByTagName('td')[7].innerHTML;

	// push into dictionary with current class ID and current schedule
	dsLop.push({
		malop: tenlop,
		tkb: dsMon
	})	
}

function runLoop(maxRow) {
	// maxRow is the limit integer to get n-th row in select drop down list
	var i = 0; star = "*"; startSTR = "["; endSTR = "]"; empty = ".";
	// run loop, use setInterval instead of for loop because it has a break time
	var interval = setInterval(function(){
		// get data and push to dictionary
		getInfo(i);
    console.log(startSTR + star.repeat(i) + empty.repeat(maxRow-i) + endSTR);
    // stop condition
		if (i>(maxRow-1)){
			clearInterval(interval); // stop loop
			console.info("DONE");
		}
		else
			i++
	}, 800)
}

// download into file with crawled data
function downloadData(){
	var str = `
	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
	</head>
	<body>
	`;
	// loop each class
	for (var i = 0; i < dsLop.length; i++) {
		str += '<h1>Ten Lop: ' + dsLop[i]["malop"] + '</h1>';
		// inside each class, loop the class ID and its schedule
		for (var j = 0; j < dsLop[i]["tkb"].length; j++) {
			str += dsLop[i]["tkb"][j].outerHTML;
			str += '<br/>';
		}
		str += '<hr>';
	}
	str += '</body></html>';

	// trigger download file
	saveText(str);
}

function saveText(text,fileName="thoikhoabieu.html"){
	// create an 'a' selector
  const a = document.createElement("a");
 	// a.href =  "data:text/plain;charset=UTF-8,"+encodeURI(text);
 	// create URL
  a.href = window.URL.createObjectURL(
      new Blob([text],{type:"text/plain;charset=UTF-8"})
  	)
  // set attribute to download type
  a.setAttribute("download", fileName);
  // trigger click event
  a.click();
  window.URL.revkeObjectURL(a.href);
}
