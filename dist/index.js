'use strict';

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = require('debug')('server:debug');


const app = (0, _express2.default)();

const listen = app.listen(_config2.default.get('port'), () => {
    debug(`server is running on port ${_config2.default.get('port')} and in ${_config2.default.get('name')} mode`);
    console.log(`server is running on port ${_config2.default.get('port')} and in ${_config2.default.get('name')} mode`);
});

module.exports = app;
module.exports.port = listen.address().port;
//# sourceMappingURL=index.js.map