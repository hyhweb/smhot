const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    tabs: ["上架", "下架"],
    activeIndex: 0,
    sliderOffset: 0,
    pageF: 1,
    pageS: 1
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    if (this.data.activeIndex == 0) {
      this.getList({ status: 1 })
    } else if (this.data.activeIndex == 1) {
      this.getList({ status: 0 })
    }
  },
  getList: function (arg) {
    var param = {
      url: '/product/pageList',
      method: 'post',
      data: arg,
      success: (res) => {
        if (res.success) {
          console.log(arg.loadMore, 'param.loadMore')
          var list = (arg.loadMore == true ? this.data.list : []);
          this.setData({
            list: list.concat(res.result.list)
          })
        }
      }
    }
    app.request(param);
  },
  loadMore: function () {
    var param = { pageSize: 10, loadMore: true };
    if (this.data.activeIndex == 0) {
      param.status = 1;
      param.page = this.data.pageF + 1;
      this.setData({
        pageF: param.page
      })
      this.getList(param);
    } else if (this.data.activeIndex == 1) {
      param.status = 0;
      param.page = this.data.pageS + 1;
      this.setData({
        pageS: param.page
      })
      this.getList(param);
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList({ status: 1 })
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
    //       sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
    //     });
    //     console.log(res,'res')
    //   }
    // });
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