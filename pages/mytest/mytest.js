//测试列表
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testArray:[{
        title:'事件',
        message:'../mytest/eventTest/eventTest'
      },{
        title: '快递查询',
        message:'../mytest/expressQueryTest/expressQuery'
      }, {
        title: '布局基础',
        message: '../mytest/layoutTest/layoutTest'
      }
    ]
    
  },

  /**
   * 点击监听
   */
  testItemClick: function(options){
    var tUrl = options.currentTarget.dataset.url;
    //添加参数，eg ：  ../mytest/expressQueryTest / expressQuery ? title = 快递查询
    tUrl = tUrl + "?title=" + options.currentTarget.dataset.title;
    console.log("shuchu:" + tUrl);
    wx.navigateTo({
      url: tUrl
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:options.title
    })
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