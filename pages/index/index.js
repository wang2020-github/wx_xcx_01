//index.js
//获取应用实例
import Api from '/../../utils/api.js';
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })


    },
    onLoad: function() {
        var that = this;
        // that.getAll();


    },
    getUserInfo: function(e) {

        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    getAll() {
        Api.all({ id: 1 }).then(res => {
            console.log(res);
        })
    },
    /**
     * 详情页面
     */
    toDetail: function() {

        wx.navigateTo({
            url: '../detail/detail',
        });

    }
})