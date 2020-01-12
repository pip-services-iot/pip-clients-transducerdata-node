"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class TransducerDataNullClientV1 {
    getData(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    addData(correlationId, orgId, data, callback) {
        if (callback)
            callback(null);
    }
    addDataBatch(correlationId, orgId, data, callback) {
        if (callback)
            callback(null);
    }
    deleteData(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
}
exports.TransducerDataNullClientV1 = TransducerDataNullClientV1;
//# sourceMappingURL=TransducerDataNullClientV1.js.map