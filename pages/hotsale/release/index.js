const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:[],
    categorysIndex:"",
    files:[],
    images_list_arr:[]
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
            var tempFilePaths = res.tempFilePaths
         
                wx.uploadFile({
                  url: app.apiUrl + '/upload/multipart', //仅为示例，非真实的接口地址
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {},
                  success: function (res) {
                    var data = JSON.parse(res.data);
                    console.log(data.result.url, 'data');
                    that.setData({
                      images_list_arr:that.data.images_list_arr.concat(data.result.url)
                    });
                  }
                })

      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  _bindcategorysChange:function(e){
    console.log(e.detail.value)
    this.setData({
      categorysIndex: e.detail.value
    })
  },
  _getCategory:function(){
    
    var param = {
      url: '/common/categoryList',
      method: 'get',
      data: param,
      success: (res) => {
        if (res.success) {
          var categorys = res.result.map((item)=>{
            return item.text;
          })
          this.setData({
            categorys: categorys
          })
          

        } else {
          wx.showToast({
            title: res.message,
          })
        }
      }
    }
    app.request(param);
  },
  _createProduct: function (param) {
    var param = {
      url: '/product/insert',
      method: 'post',
      data: param,
      success: (res) => {
          wx.showToast({
            title: res.message,
          })
          if (res.success){
            console.log(res,'res')
            wx.navigateTo({
              url: '/pages/hotsale/release_success/index?id=' + res.result.insertId,
            })
          }
      }
    }
    app.request(param);
  },
  formSubmit: function (e) {
   
    var param = e.detail.value;
    if (param.title == "") {
      wx.showToast({
        title: '新品标题不能为空',
        icon:'none'
      })
      return;
    }
    if (param.description == "") {
      wx.showToast({
        title: '新品描述不能为空',
        icon: 'none'
      })
      return;
    }
    if (param.price == "") {
      wx.showToast({
        title: '新品原价不能为空',
        icon: 'none'
      })
      return;
    }
    if (param.discount_price == "") {
      wx.showToast({
        title: '新品折后价不能为空',
        icon: 'none'
      })
      return;
    }
    if (param.category_id =="") {
      wx.showToast({
        title: '新品分类不能为空',
        icon: 'none'
      })
      return;
    }
    if (this.data.images_list_arr.length==0){
      wx.showToast({
        title: '新品详图不能为空',
        icon: 'none'
      })
      return;
    }
    if (this.data.images_list_arr.length >=5) {
      wx.showToast({
        title: '新品详图不能多于5张',
        icon: 'none'
      })
      return;
    }
    param.user_id = 1;
    param.store_id = 1;
    param.status = 1;
    param.images_list = this.data.images_list_arr.join();
    param.pre_img = this.data.images_list_arr[0]
    console.log(param);
    this._createProduct(param);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory();
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