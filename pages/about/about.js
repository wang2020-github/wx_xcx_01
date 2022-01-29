// pages/about/about.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: "<p>　　微信小程序视频广告组件、小程序视频前贴广告组件上线，同时流量主数据报表升级，帮助流量主提升变现效率。</p><p>　　微信小程序视频广告组件、小程序视频前贴广告组件上线，同时流量主数据报表升级，帮助流量主提升变现效率。</p><p>　　微信小程序视频广告组件、小程序视频前贴广告组件上线，同时流量主数据报表升级，帮助流量主提升变现效率。</p><p>　　微信小程序视频广告组件、小程序视频前贴广告组件上线，同时流量主数据报表升级，帮助流量主提升变现效率。</p><p>　　微信小程序视频广告组件、小程序视频前贴广告组件上线，同时流量主数据报表升级，帮助流量主提升变现效率。</p>",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;


        WxParse.wxParse('article', 'html', that.data.content, that, 5);
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