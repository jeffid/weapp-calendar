//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isCalendarShow: true,
    calendarMark: ['2019-03-20', '2019-04-10'],
  },
  
  onLoad: function () {
  
  },
  
  /**
   * 显示日历栏
   */
  onOpenCalendar() {
    this.setData({
      isCalendarShow: true
    })
  },
  
  /**
   * 获取选择日期
   */
  onCalendarGetDate(e) {
    console.log('本次选择了:', e.detail.selected);
  },
  
})
