const app = getApp()

Page({
  data: {
    Diary:app.globalData.DiaryList,
    Date:'',
    Time:'',
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

OnTapped:function(e) {
  wx.navigateTo({
    url: '../DiaryCreat/DiaryCreat',
  })
},
onShow(){
  this.setData({
    Time:this.getCurrentDate(2),
    Date:this.getCurrentDate(1),
    Diary:app.globalData.DiaryList
  })
},
OnItemTapped:function(e) {
  var item=this.data.Diary[e.currentTarget.dataset.index]
  app.globalData.NowData={
    title:item.title,
    datetime:item.date+'  '+item.time,
    mood:item.mood,
    short:item.value.slice(0,1),
    long:item.value.slice(1),

  };
  wx.redirectTo({
    url: '../DiaryContent/DiaryContent',
    
  })
 },
 OnDelTapped:function(e) {
  var diarylist=this.data.Diary;
  //item就是splice方法中删除掉的元素
  var item=diarylist.splice(e.currentTarget.dataset.index,1)[0] //删除数组中对象的方法，1是从固定下标开始删除几个数组元素
  this.setData({Diary:app.globalData.DiaryList})
 }
 
})
