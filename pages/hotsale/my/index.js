// pages/hotsale/my/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userInfo:{}
  },

  _getUserInfo:function(id){
    var param = {
      url: '/user/select/'+id,
      method: 'get',
      success: (res) => {
        if (res.success) {
          
          this.setData({
            userInfo: res.result
          })
        }
      }
    }
    app.request(param);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this._getUserInfo(1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})