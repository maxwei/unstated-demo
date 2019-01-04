var Mock = require('mockjs');

Mock.mock(
    '/api/mockData',
    'get',
    function () {
        return{
            name: 'weilong',
            sex: 'male'
        }

    }
)
