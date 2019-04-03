'use strict';

exports.atob = function atob(val) {
  return new Buffer.from(val, 'base64').toString();
};

exports.btoa = function btoa(val) {
  return Buffer.from(val).toString('base64');
};
