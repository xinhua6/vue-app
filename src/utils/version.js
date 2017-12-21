import store from '../vuex/store'
import cache from './cache'

const version = {
	ready(){
		document.addEventListener("deviceready", () => {
			this.check()
			this.update()
			this.bindEvent()
		}, false)
	},
	check(){
		chcp.getVersionInfo((err, data) => {
			if(store.state.common.app.version != data.currentWebVersion){
				store.commit('UPDATE_VERSION', data.currentWebVersion)
			}
			var webVersion = data.currentWebVersion
			var nativeVersion = window.NativeVersion
			if(webVersion.indexOf(nativeVersion+'.') == -1){
				alert('当前版本过低，请安装最新版本')
				window.open('https://chenjia.github.io/vue-app/demo/index.html');
			}
		})
	},
	update(){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在获取新版本'})
		chcp.fetchUpdate((error, data) => {
			alert(error+":"+JSON.stringify(data))
			if (error) {
				console.log(error.code+':'+error.description);
				store.commit('TOGGLE_POPUP', {visible: true, text: '获取更新包失败'})
	    } else {
	      this.install()
	    }
		}, {
			'config-file': Config.chcpUrl
		})
	},
	install(){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在安装新版本'})
		chcp.installUpdate(error => {
			if (error) {
				console.log(error.code+':'+error.description);
				store.commit('TOGGLE_POPUP', {visible: true, text: '更新包安装失败'})
	    } else {
	      store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本'})
				setTimeout(()=>{
					store.commit('TOGGLE_POPUP', {visible: false, text: ''})
				},1000)
	    }
		})
	},
	bindEvent(){
		// document.addEventListener('chcp_nothingToUpdate', () => {
		// 	store.commit('TOGGLE_POPUP', {visible: true, text: '已经更新为最新版本'})
		// 	setTimeout(()=>{
		// 		store.commit('TOGGLE_POPUP', {visible: false, text: ''})
		// 	},1000)
		// }, false)
	}
};

version.ready()

export default version