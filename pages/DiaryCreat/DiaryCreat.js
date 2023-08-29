const app = getApp()

Page({
  data: {
    Time:'',
    Text:'',
    Mood:'1',
    Title:'',
  },
  getCurrentDate: function(e) {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth(); //得到月份
    var date = now.getDate(); //得到日期
    var day = now.getDay(); //得到周几
    var hour = now.getHours(); //得到小时
    var minu = now.getMinutes(); //得到分钟
    var sec = now.getSeconds(); //得到秒
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var time = "";
    if(e==0){
      time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;
    }
    if(e==1){
      time = year + "-" + month + "-" + date;
    }
    if(e==2){
      time = hour + ":" + minu + ":" + sec;
    }    
    return time;
},
onLoad(){
  this.setData({
    Time:this.getCurrentDate(0)
  })


},
OnInputing1:function(e) {
  this.setData({
    Title:e.detail.value
  })

},
OnInputing2:function(e) {
  this.setData({
    Text:e.detail.value
  })

},
OnTapped1:function () {
  wx.navigateTo({
    url: '../DiaryAll/DiaryAll',
  })

},
OnTapped2:function () {
  let Diary=app.globalData.DiaryList;
  let tit=this.data.Title;
  if(tit==''){
    tit="无题";
  }
  Diary.push({
    title:tit,
    date:this.getCurrentDate(1),
    time:this.getCurrentDate(2),
    mood:this.data.Mood,
    value:this.data.Text,
    short:this.data.Text.slice(0,50),
  });
  wx.redirectTo({
    url: '../DiaryAll/DiaryAll',
  });

},
OnChange:function(e) {
  this.setData({
    Mood:e.detail.value

  })
}
})
