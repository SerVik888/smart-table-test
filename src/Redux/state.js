let dataSources = [
        // prTr: 
        { 
            object: {
                    id: 1, name: "Пр тр",source: null, icon: 'https://direct.yandex.ru/favicon.ico'},

            sources: [{
                trafficSource: { id: 11, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: null, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 12, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: null, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        },

        // yandexDirect: 
        {
            object: { id: 2, name: 'Яндекс Директ', source: 'Платная реклама', icon: 'https://direct.yandex.ru/favicon.ico' },
            
            sources:[{
                trafficSource: { id: 21, sourceName: 'name', icon: 'ava' },
                traffic: { impressions: 299571, clicks: 843, sessions: 1388, CTR: 0.28, costClick: 35.9, Expenses: 30266 },
                sales: { quantity: 181.64, CPA: 16, profit: 423713 },
                target: { quantity: 28, CPA: 1, CR: 3 }
            }]
        },

        // organicSearch: 
        {
            object: { id: 3, name: 'Органический поиск', source: null, icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },

            sources: [{
                trafficSource: { id: 30, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: null, clicks: 1388, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }, {
                trafficSource: { id: 31, sourceName: 'Email', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions:  null, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }, {
                trafficSource: { id: 32, sourceName: 'videocourse', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: null, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }, {
                trafficSource: { id: 33, sourceName: 'getresponse', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: null, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        },{
            object: { id: 4, name: 'Goorle Ads', source: 'Платная реклама', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
            sources:[{
                trafficSource: { id: 41, sourceName: 'name', icon: null },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        },{
            object: { id: 5, name: 'Переходы с сайтов', source: null, icon: 'https://direct.yandex.ru/favicon.ico' },
            sources:[{
                trafficSource: { id: 51, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 52, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 53, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 54, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 55, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 56, sourceName: 'name', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        },{
            object: { id: 6, name: 'Email рассылки', source: null, icon: 'https://direct.yandex.ru/favicon.ico' },
            sources:[{
                trafficSource: { id: 61, sourceName: 'e-mail / e-mail', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 62, sourceName: 'videocourse / email', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 63, sourceName: 'getresponse / email', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 64, sourceName: 'cm / email', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            },{
                trafficSource: { id: 65, sourceName: 'email / course', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        },{
            object: { id: 7, name: 'Реклама с оплатой за клик', source: 'Платная реклама', icon: 'https://direct.yandex.ru/favicon.ico' },
            sources:[{
                trafficSource: { id: 71, sourceName: 'email / course', icon: 'https://testing1.alytics.ru/icons/groups/315b6fb9-cc96-4f34-9e1c-50f5550ce863.png' },
                traffic: { impressions: 299571, clicks: 1716, sessions: 1716, CTR: null, costClick: 0, Expenses: 0 },
                sales: { quantity: 344.54, CPA: 0, profit: 677870 },
                target: { quantity: 29, CPA: 0, CR: 15 }
            }]
        }
    ]

    export default dataSources