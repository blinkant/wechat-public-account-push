export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx235a08b0fb813434",
    // 公众号appSecret
    appSecret: "e463963d6c2aef752a80c76b6e12676a",
    // 模板消息id
    templateId: "gZJjuNXElXSidJUglr-8bVpmqcjZ8ckyDcV6WkSpMeQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ov7GK6G-8DfQMTHTxNbNwP4O6JuY","ov7GK6MQnOhUpaM6uZt6H7ihrwJ0"],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "广州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1994", "date": "10-03", "type": "r"},
      {"name": "老公", "year": "1994", "date": "07-18", "type": "r"},
    ],
    // 在一起的日子，格式同上
    loveDate: "2016-09-24",
    // 结婚纪念日
    marryDate: "2023-08-08"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
