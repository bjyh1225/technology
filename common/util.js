// 原型：https://app.mockplus.cn/run/bL8ERVsf6a
// https://lanhuapp.com/web/#/item/project/board?pid=79ea066d-e20a-4388-b708-95c00a56ef15

const PAGE_SIZE=10;
const EMPTY='~~~ 暂无相关数据 ~~~';
const NOMORE='~~~ 没有更多了 ~~~';

const HOST='http://haoyuyue.whmnx.com'
const API_HOST=HOST+'/Api'
const route={
	getValidCode:'/api/user/SendCode',  // 发送验证码
	validCode:'/api/user/CheckCode',  // 校验验证码
	register:'/api/user/RegisterUserInfo',  // 用户注册
	login:'/api/user/LoginUser',  // 用户登录
	updateUser:'/api/user/UpdUserInfo',  // 完善用户信息
	upload:'/api/file/upload/uploadfilepublic', // 上传普通图片
	banner:'/api/config/SlideShow', // 轮播图
	protocol:'/api/config/Agreement', // 协议管理
	information:'/api/hospital/InformationList', // 资讯列表
	doctorRecommend:'/api/hospital/EliteDoctorList', // 精选推荐医生列表
	message:'/api/hospital/NoticeList', // 消息列表
	specail:'/api/hospital/DepartmentList', // 科室列表
	informationType:'/api/hospital/CategoryList', // 栏目列表
	patient:'/api/user/FamilyList',  // 亲属列表
	addPatient:'/api/user/AddFamilyInfo', // 新增亲属
	editPatient:'/api/user/UpdFamilyInfo', // 编辑亲属
	delPatient:'/api/user/DelFamilyInfo',  // 删除亲属
	health:'/api/user/HealthManage',  // 健康管理
	help:'/api/hospital/HelpCenterList', // 帮助中心
	feedback:'/api/hospital/FeedBack', // 反馈
	satisfaction:'/api/hospital/SelQuestionnaireUList', // 用户-问卷调查
	submitSatisfaction:'/api/hospital/QuestionnaireU',  // 问卷调查
	searchResult:'/api/hospital/SelList', // 查询(优先级：科室》医生》资讯)
	config:'/api/config/ConfigInfo',  // 公共信息(0:客服电话;1:可预约天数;2:平台介绍;)
	doctor:'/api/hospital/JobPlacementList', // 排班列表
	makeAppointment:'/api/order/AddOrder', // 预约
	appointmentList:'/api/order/OrderList', // 我的预约
	messageDetail:'/api/hospital/InformationDetail', // 资讯详情
	noticeDetail:'/api/hospital/NoticeDetail',  // 消息详情
	doctorDetail:'/api/hospital/DoctorDetail', // 医生详情
	appointmentInfo:'/api/order/OrderInfo', // 预约信息
	userInfo:'/api/user/UserInfo'  // 用户信息
}

function request(url,data,method,successFn,failFn,comFn){
	method=method || 'POST';
	data=data || {};
	// var commonData={
	// 	Sing:'string',
	// 	Timestamp:'string'
	// };
	// var da=method=='POST'?(Object.assign(data,commonData)):data;
	uni.request({
		url:API_HOST+url,
		data:data,
		method:method,
		success(data){
			// TODO 根据返回的状态码，跳转到注册页面
			successFn && successFn(data.data)
		},
		fail(err){
			console.log('请求错误~~~')
			showToast('请求错误:::'+err.errMsg)
			failFn && failFn(err)
		},
		complete() {
			comFn && comFn()
		}
	})
}
function showToast(msg, fn, icon) {
	uni.showToast({
		title: msg || '发生了未知错误~~~',
		icon: icon || 'none',
		duration: 2500,
		success() {
			setTimeout(() => {
				fn && fn();
			}, 2500);
		}
	});
}
function showModal(msg, fn, cancel,title) {
	uni.showModal({
		title: title || '提示',
		content: msg || '',
		success(res) {
			if (res.confirm) {
				fn && fn();
			}else{
				cancel && cancel();
			}
		}
	});
}
function showLoading(msg) {
	uni.showLoading({
		title: msg || '加载中...',
		mask: true
	});
}
function hideLoading() {
	uni.hideLoading();
}
function setLocalStorage(key,value){
	uni.setStorage({
		key:key,
		data:value
	})
}
function getLocalStorage(key){
	try{
		return uni.getStorageSync(key)
	}catch(e){}
}
function removeLocalStorage(key) {
	uni.removeStorage({
		key: key
	});
}
/**
 * 获取验证码 按钮
 * obj {text:['开始文字','倒计时文字(30)'],status:0} // status 0可以点击 1不能点击
 * duration 秒数
 */
function setValidBtn(obj, duration) {
	var type=0;  // 0秒数在后面 1秒数在前面
	var text0 = obj.text[0];
	var text1 = '';
	var countdownText=obj.text[1];
	var sec=parseInt(countdownText);
	if(~countdownText.indexOf('(') && countdownText.split('(')[0]){
		// 秒数在后面(有括号)
		text1 = countdownText.split('(')[0];
		obj.text = [text0, `${text1}(${duration}s)`];
		type=0;
	}else if(!isNaN(sec)){
		// 秒数在前面(无括号)
		text1 = countdownText.slice((''+sec).length);
		obj.text = [text0, `${duration}${text1}`];
		type=1;
	}else{
		console.log('格式错误');
		return;
	}
	var timer = null;
	var second = duration - 1;
	timer = setInterval(() => {
		if(type==0){
			obj.text = [text0, `${text1}(${second}s)`];
		}else{
			obj.text = [text0, `${second}${text1}`];
		}
		// console.log(obj.text[1]);
		if (--second < 0) {
			clearInterval(timer);
			obj.status = 0;
		}
	}, 1000);
}
/**
 * 检查是否为空 --true为空 false不为空
 * @param {Object} val 要检查的值
 * @param {Object} msg 需要展示的文本
 */
function validNullStr(val, msg) {
	if (val == '') {
		showToast(msg);
		return true;
	}
	return false;
}
function getValidCode(phone,validBtn){
	if(validNullStr(phone,'请输入手机号~')) return;
	if(phone.length!=11){
		showToast('请输入正确的手机号~');
		return;
	}
	if(validBtn.status==0){
		// validBtn.status=1;
		// todo 请求接口
		var url=route.getValidCode;
		var data={
			UserInfo_Account:phone
		};
		showLoading();
		request(url,data,'',data => {
			console.log('获取验证码：',data);
			hideLoading();
			if(data.Status==1){
				validBtn.status=1;
				setValidBtn(validBtn,120);
			}else{
				showToast(data.Message);
				// validBtn.status=0;
			}
		},() => {
			hideLoading();
			// validBtn.status=0;
		});
	}
}
function setPageTitle(title){
	uni.setNavigationBarTitle({
		title:title || ''
	})
}
function back(animation,delta){
	uni.navigateBack({
		delta:delta || 1,
		animationType:animation || 'pop-out'
	})
}
/**
 * 返回日期(不传参数则是今天的日期)
 * 注意：调用了后面的函数formatNum()
 * @param {Object} da 格式2020-01-01 或 时间戳
 * @param {Object} whole 是否带上 时分
 */
function formatDate(da,whole) {
	let date = new Date();
	if (da) {
		date = new Date(da);
	}
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	month = formatNum(month);
	day = formatNum(day);
	if(whole){
		let hour=formatNum(date.getHours());
		let minute=formatNum(date.getMinutes());
		return `${year}-${month}-${day} ${hour}:${minute}`;
	}
	return `${year}-${month}-${day}`;
}
function formatNum(n) {
	n = n.toString();
	return n[1] ? n : ('0' + n);
}
/**
 * 计算距离特定日期指定天数的日期(如果什么都不传,就是返回昨天的日期)
 * @param {Object} days 间隔的天数,默认1天
 * @param {Object} date 指定的日期 2020-01-01,默认今天
 * @param {Object} backward 默认向前推,传了就向后推
 */
function diffDate(days, date, backward) {
	var timestamp = date ? Date.parse(date) : Date.now();
	if(days==undefined){
		days=1;
	}
	var deltaTimestamp = days * 24 * 3600 * 1000;
	var res = timestamp - deltaTimestamp;
	if (backward) {
		res = timestamp + deltaTimestamp;
	}
	return formatDate(res);
}
function validCode(phone,code,fn){
	var url=route.validCode;
	var data={
		UserInfo_Account:phone,
		Code:code
	};
	request(url,data,'',data => {
		console.log('验证码是否正确：',data);
		if(data.Status==1){
			fn && fn();
		}else{
			showToast(data.Message);
		}
	});
}
function updateUserInfo(type,info,fn,failFn,phone,pwd){
	// type 0:头像;1:昵称;2:密码;3:手机号;
	var mix=getLocalStorage('userId');
	if(type==2 && phone){
		mix=phone;
	}
	var url=route.updateUser;
	var data={
		UserInfo_Id:mix, // (其他) / 手机号(忘记密码)
		Identifying:type, // 标识(0:头像;1:昵称;2:密码;3:手机号;)
		Content:info,  // 被修改的内容(忘记密码：传空)
		Pwd:pwd || ''  // 当前密码(修改手机号，修改密码)
	};
	console.log('传参：',data);
	request(url,data,'',data => {
		fn && fn(data);
	},() => {
		failFn && failFn();
	});
}
function getInformation(id,type,pageNum,pageSize,fn){
	// id  栏目Id（备注：首页 传""或null）
	// type 精选推荐（备注：1）
	var url=route.information;
	var data={
		Information_CategoryId:id,
		Information_Elite:type,
		PageIndex:pageNum,
		PageSize:pageSize
	};
	request(url,data,'',data => {
		console.log('资讯列表：',data);
		if(data.Status==1){
			fn && fn(data.Result,data.TotalCount);
		}else{
			showToast(data.Message);
		}
	});
}
function getSpecail(type,fn){
	// type 0 特色专科（备注：1）
	var url=route.specail;
	var data={
		Department_Elite:type
	};
	showLoading();
	request(url,data,'',data => {
		console.log('科室列表：',data);
		hideLoading();
		if(data.Status==1){
			fn && fn(data.Result);
		}else{
			setTimeout(() => {
				showToast(data.Message);
			},50);
		}
	},() => {
		hideLoading();
	});
}
function getConfig(type,fn){
	// type 类型(0:客服电话;1:可预约天数;2:平台介绍;)
	var url=route.config;
	var data={
		Config_Type:type
	};
	request(url,data,'',data => {
		console.log('公共信息：',data);
		if(data.Status==1){
			fn && fn(data.Result);
		}else{
			showToast(data.Message);
		}
	});
}
function getMessage(type,id,pageNum,pageSize,fn){
	// type (0:公告;1:预约;2:系统;)
	var url=route.message;
	var data={
		Notice_Type:type,
		Notice_UserId:id,
		PageIndex:pageNum,
		PageSize:pageSize
	};
	request(url,data,'',data => {
		console.log('消息列表：',data);
		if(data.Status==1){
			fn && fn(data.Result);
		}else{
			showToast(data.Message);
		}
	});
}
function getDetail(type,id,fn){
	// type 1医生 2资讯 3通知
	var url='';
	if(type==1){
		url=route.doctorDetail;
	}else if(type==2){
		url=route.messageDetail;
	}else{
		url=route.noticeDetail;
	}
	var data={
		Id:id
	};
	showLoading();
	request(url,data,'',data => {
		console.log('详情：',data);
		hideLoading();
		if(data.Status==1){
			fn && fn(data.Result);
		}else{
			showToast(data.Message);
		}
	});
}
function getUserInfo(fn){
	var url=route.userInfo;
	var data={
		UserInfo_Id:getLocalStorage('userId')
	};
	request(url,data,'',data => {
		console.log('用户信息：',data);
		if(data.Status==1){
			fn && fn(data.Result);
		}else{
			showToast(data.Message);
		}
	});
}

export default {
	PAGE_SIZE,
	EMPTY,
	NOMORE,
	HOST,
	API_HOST,
	route,
	request,
	showToast,
	showModal,
	showLoading,
	hideLoading,
	setLocalStorage,
	getLocalStorage,
	removeLocalStorage,
	setValidBtn,
	validNullStr,
	getValidCode,
	setPageTitle,
	back,
	formatDate,
	diffDate,
	validCode,
	updateUserInfo,
	getInformation,
	getSpecail,
	getConfig,
	getMessage,
	getDetail,
	getUserInfo
}