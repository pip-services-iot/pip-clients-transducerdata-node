"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class TransducerDataLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('transducer_data');
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
exports.TransducerDataLambdaClientV1 = TransducerDataLambdaClientV1;
//# sourceMappingURL=TransducerDataLambdaClientV1.js.map