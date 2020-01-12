"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class TransducerDataHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/transducer_data');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getData(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_data', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    addData(correlationId, orgId, data, callback) {
        this.callCommand('add_data', correlationId, {
            data: data
        }, callback);
    }
    addDataBatch(correlationId, orgId, data, callback) {
        this.callCommand('add_data_batch', correlationId, {
            data: data
        }, callback);
    }
    deleteData(correlationId, orgId, filter, callback) {
        this.callCommand('delete_data', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.TransducerDataHttpClientV1 = TransducerDataHttpClientV1;
//# sourceMappingURL=TransducerDataHttpClientV1.js.map