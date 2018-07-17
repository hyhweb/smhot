// pages/hotsale/collect/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  _getCollectList: function (id) {
    var param = {
      url: '/collect/getPageList',
      method: 'post',
      data: { id: id},
      success: (res) => {
        if (res.success) {

          this.setData({
            list: res.result.list
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
    this._getCollectList(1)
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