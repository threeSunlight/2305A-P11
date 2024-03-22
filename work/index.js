
// // 列

// const students = [
// { name: "韩昊天", sex: "男" }, { name: "姚新奇", sex: "男" }, { name: "杨文航", sex: "男" }, { name: "马浩阳", sex: "男" }, { name: "刘东宇", sex: "男" },
// { name: "黄文龙", sex: "男" }, { name: "孙晨  ", sex: "男" }, { name: "杨名迪", sex: "男" }, { name: "肖复兴", sex: "男" }, { name: "邓恒智", sex: "男" },
// { name: "刘豪然", sex: "男" }, { name: "白颖帆", sex: "男" }, { name: "李洋  ", sex: "男" }, { name: "俎召铃", sex: "男" }, { name: "米子奇", sex: "男" },
// { name: "卢孟磊", sex: "男" }, { name: "侯婉如", sex: "女" }, { name: "孙泽森", sex: "男" }, { name: "徐政田", sex: "男" }, { name: "胡雅茜", sex: "女" },
// { name: "李周硕", sex: "男" }, { name: "王子默", sex: "男" }, { name: "石海斌", sex: "男" }, { name: "孙小云", sex: "女" }, { name: "刘乐  ", sex: "男" },
// { name: "王震霆", sex: "男" }, { name: "胡明言", sex: "男" }, { name: "贾亚锐", sex: "男" }, { name: "李金阳", sex: "女" }, { name: "胡星宇", sex: "男" },{ name: "黄金祥", sex: "男" },]


// const copyStudents = [...students]
// /***
//  * 
//  *将真实数据渲染到dom元素上
//  *  动态生成li标签,将li变迁插入到ul标签里
//  * 
//  */
// // 随机数最大和最小的限制 Math.random() * (maxs - mins) + mins

// /***获取日期的span标签 */
// const dataSPan = document.querySelector('.container_time span')

// /***获取ul标签 */
// const ulDom = document.getElementsByTagName('ul')[0]

// /**获取单人点名的dom元素 */
// const oneButton = document.getElementById('one')


// /***获取放置天选之人的dom元素 */
// const tianxuanDOm = document.getElementById('selected')



// /**将日期放在dom元素 */
// function setDate () {
// 	let data = dateFormat()
// 	dataSPan.innerText = '时间: ' + data
// }


// /**渐变颜色随机数 
//  * 
//  * 颜色: red
//  * rgb(255,0,255)
//  * 随机数生成的时候 需要限制随机数的大小,最大只能到255, 最小是0,必须要保证随机数生成以后是一个整数
//  * Math.random()
//  * 最大只能255,所以最终只能向下取整 Math.floor()
//  * */

// /**生成随机数 */
// function randomParams() {
// 	return Math.floor(Math.random() * (255 - 0) + 0)  
// }

// function randomColor() {
// 	var start = randomParams();
//     var end = randomParams();
// 	// rgb(255,124,125)
//     var color = "linear-gradient(to right, rgb(".concat(start, ",").concat(randomParams(), ",").concat(randomParams(), "), rgb(").concat(end, ",").concat(randomParams(), ",").concat(randomParams(), "))");
//     return color;
// }


// /**生成li标签,渲染dom元素 */
// function renderDom() {
// 	ulDom.innerHTML= ''
// 	for (let index = 0; index < students.length; index++) {
// 		const element = students[index];
// 		// 原生创建li标签
// 		let li = document.createElement('li');
// 		// 给li标签添加内容
// 		li.innerText = element.name;
// 		li.style.background = randomColor()
// 		ulDom.appendChild(li);
// 	}
// }
// // 调用函数,生成子节点
// renderDom()



// /**单人点名 
//  * 
//  *在全部点名结束之前,已经点过名的不在进行出现
//  * 复制一个新的数组,在新的数组里面进行获取数据,然后把点过明的切割掉
//  * 1. 点击单人单名的时候 开启定时器,按钮名字变成停止,
//  * 	  点击停止结束定时器 
//  * 如果按钮名称是 单人点名--开启
//  * 如果不是 关闭
//  * 2. 定时器开始的时候,随机数生成,生成选择的人
//  *    停止的时候,将生成的人,放在天选之人的内容上
//  * 随机数的生成要求: 最小是0,最大不能大于数组的长度
//  * 
// */


// let timer

// function oneSelected() {
// 	if(oneButton.innerText === '单人点名') {
// 		timer = setInterval(() => {
// 			renderDom()
// 		}, 500);
// 		oneButton.innerText = '停止'
// 	} else if(oneButton.innerText === '停止') {
// 		// 清空定时器 
// 		/**抽离出去 切除一个数据* */
// 		copyStudents.splice(result,1) // filter
// 		tianxuanDOm.innerText = selectedName(copyStudents)
// 		clearInterval(timer)
// 		oneButton.innerText = '单人点名'
// 	}
// }

// // 天选之人选中抽离
// function selectedName(students) {
// 	let result = Math.floor(Math.random() * (students.length - 0) + 0)  
// 	let selectedName = students[result].name
// 	return selectedName
// }



// /**循环让时间生效 */
// setInterval(() => {
// 	setDate()
// }, 1000)



// /**封装日期的函数 */
// function dateFormat () {
// 	// 当前时间
// 	var dt = new Date();
// 	var y = dt.getFullYear();
// 	var m = (dt.getMonth() + 1 + '').padStart(2, '0');
// 	var d = (dt.getDate() + '').padStart(2, '0');
// 	var hh = (dt.getHours() + '').padStart(2, '0');
// 	var mm = (dt.getMinutes() + '').padStart(2, '0');
// 	var ss = (dt.getSeconds() + '').padStart(2, '0');
// 	// yy-mm-dd hh:mm:ss
// 	// 可以根据需要输出相对应的时间格式
// 	return ''
// 		.concat(y, '/')
// 		.concat(m, '/')
// 		.concat(d, ' ')
// 		.concat(hh, ':')
// 		.concat(mm, ':')
// 		.concat(ss);
// }


// class Date{
// 	constructor(date) {
// 		this.date = new Date()
// 	}
// 	call() {
// 		console.log();
// 	}
// }

// let array = [1,2,3,3,4,[2,3,4,4,5]]
// let result = []
// digui(array)
// function digui(array) {
// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 		if(Array.isArray(element)) {
// 			digui(element)
// 		} else {
// 			result.push(element)
// 		}
// 	}
// }
// result = Array.from(new Set(result.sort((a,b)=> a-b)))
// console.log(result);
// async function async1 () {
// 	console.log(1)
// 	const result = await async2();

// };
// async1();
// console.log(3);
// async function async2 () {
// 	console.log(2)
// };

// Promise.resolve().then(() => {
// 	console.log(4)
// });
// setTimeout(() => {
// 	console.log(5);
// });

// console.log(6);
//  // 

 var a = []
 console.log(a, 'aß');
 for (var i = 0; i < 10; i++) {
	 a[i] = function () {
		 console.log(i);
	 }
	 console.log(a[i]);
 }
 console.log(i);
 console.log(a[i]);
 a[6]()