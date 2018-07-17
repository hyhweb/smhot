// pages/hotsale/detail/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },
  getDetail:function(id){
    var param = {
      url: '/product/select/'+id,
      method: 'get',
      success: (res) => {
        if (res.success) {
          this.setData({
            detail: res.result
          })
        }
      }
    }
    app.request(param);
  },
  collectHandle: function (event) {
    console.log(event,'event');
    var product_id = event.currentTarget.dataset.id;
    var param = {
      url: '/collect/insert',
      method: 'post',
      data: { 'user_id': 1, 'product_id': product_id},
      success: (res) => {
        if (res.success) {
          wx.showToast({
            title: '收藏成功'
          })
        }else{
          wx.showToast({
            title: '不能重复收藏'
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
    this.getDetail(options.id);
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