//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  apiUrl: 'http://192.168.56.1:7001',
  request: function (option) {
    wx.request({
      url: this.apiUrl+option.url, //仅为示例，并非真实的接口地址
      method: option.method,
      data: option.data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        if (option.success){
          option.success(res.data);
        }
        console.log(res.data)
      }
    })
  },

  globalData: {
    
    userInfo: null
  }
})