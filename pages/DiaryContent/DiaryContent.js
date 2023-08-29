// pages/DiaryInner.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title:'',
    DateTime:'',
    Mood:'1',
    Value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let nowdata=app.globalData.NowData;
    this.setData({
      Title:"[ "+nowdata.title+" ]",
      DateTime:nowdata.datetime,
      Mood:nowdata.mood,
      Short:nowdata.short,
      Long:nowdata.long,

    })
  },
  OnBtnTapped:function(e) {
    wx.redirectTo({
      url: '../DiaryList/DiaryList',
    })
  }
})