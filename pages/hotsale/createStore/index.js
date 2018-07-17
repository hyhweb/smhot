const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  _createStore: function(param) {
    var param = {
      url: '/store/insert',
      method: 'post',
      data: param,
      success: (res) => {
        if (res.success) {
          wx.showToast({
            title: res.message,
          })

        }else{
          wx.showToast({
            title: '不能重复创建店铺',
          })
        }
      }
    }
    app.request(param);
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var param = e.detail.value;
    param.user_id = 1;
    this._createStore(param);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})