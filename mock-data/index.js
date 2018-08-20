var Mock = require('mockjs')
var mockobject_size = require('./type/size');
var mockobject_style = require('./type/style');
var mockobject_ironfold = require('./type/ironfold');
var mockobject_handmade = require('./type/handmade');
var mockobject_exterior = require('./type/exterior');
var mockobject_fitting = require('./type/fitting');


const mockdata = (type) => {
    if (type == 'fitting') {
        return Mock.mock(mockobject_fitting);
    } else if (type == 'style') {
        return Mock.mock(mockobject_style);
    } else if (type == 'handmade') {
        return Mock.mock(mockobject_handmade);
    } else if (type == 'ironfold') {
        return Mock.mock(mockobject_ironfold);
    } else if (type == 'exterior') {
        return Mock.mock(mockobject_exterior);
    } else if (type == 'size') {
        return Mock.mock(mockobject_size);
    } else {
        return Mock.mock({ 'datalist': null });
    }
}

module.exports = mockdata;