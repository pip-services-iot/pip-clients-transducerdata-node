"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const TransducerDataHttpClientV1_1 = require("./TransducerDataHttpClientV1");
class TransducerDataHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(TransducerDataHttpClientV1_1.TransducerDataHttpClientV1, 'pip-services-transducerdata', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getData(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getData(correlationId, orgId, filter, paging, callback);
        });
    }
    addData(correlationId, orgId, data, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addData(correlationId, orgId, data, callback);
        });
    }
    addDataBatch(correlationId, orgId, data, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addDataBatch(correlationId, orgId, data, callback);
        });
    }
    deleteData(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deleteData(correlationId, orgId, filter, callback);
        });
    }
}
exports.TransducerDataHttpProxyClientV1 = TransducerDataHttpProxyClientV1;
//# sourceMappingURL=TransducerDataHttpProxyClientV1.js.map