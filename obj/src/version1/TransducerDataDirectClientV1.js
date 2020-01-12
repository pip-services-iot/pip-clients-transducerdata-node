"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class TransducerDataDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-transducerdata", "controller", "*", "*", "*"));
    }
    getData(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'transducer_data.get_data');
        this._controller.getData(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    addData(correlationId, orgId, data, callback) {
        let timing = this.instrument(correlationId, 'transducer_data.add_data');
        this._controller.addData(correlationId, data, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    addDataBatch(correlationId, orgId, data, callback) {
        let timing = this.instrument(correlationId, 'transducer_data.add_data_batch');
        this._controller.addDataBatch(correlationId, data, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    deleteData(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'transducer_data.delete_data');
        this._controller.deleteData(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.TransducerDataDirectClientV1 = TransducerDataDirectClientV1;
//# sourceMappingURL=TransducerDataDirectClientV1.js.map