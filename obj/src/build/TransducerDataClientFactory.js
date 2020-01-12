"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const TransducerDataNullClientV1_1 = require("../version1/TransducerDataNullClientV1");
const TransducerDataDirectClientV1_1 = require("../version1/TransducerDataDirectClientV1");
const TransducerDataHttpClientV1_1 = require("../version1/TransducerDataHttpClientV1");
const TransducerDataLambdaClientV1_1 = require("../version1/TransducerDataLambdaClientV1");
const TransducerDataHttpProxyClientV1_1 = require("../version1/TransducerDataHttpProxyClientV1");
class TransducerDataClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(TransducerDataClientFactory.NullClientV1Descriptor, TransducerDataNullClientV1_1.TransducerDataNullClientV1);
        this.registerAsType(TransducerDataClientFactory.DirectClientV1Descriptor, TransducerDataDirectClientV1_1.TransducerDataDirectClientV1);
        this.registerAsType(TransducerDataClientFactory.HttpClientV1Descriptor, TransducerDataHttpClientV1_1.TransducerDataHttpClientV1);
        this.registerAsType(TransducerDataClientFactory.LambdaClientV1Descriptor, TransducerDataLambdaClientV1_1.TransducerDataLambdaClientV1);
        this.registerAsType(TransducerDataClientFactory.HttpProxyClientV1Descriptor, TransducerDataHttpProxyClientV1_1.TransducerDataHttpProxyClientV1);
    }
}
exports.TransducerDataClientFactory = TransducerDataClientFactory;
TransducerDataClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'factory', 'default', 'default', '1.0');
TransducerDataClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'client', 'null', 'default', '1.0');
TransducerDataClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'client', 'direct', 'default', '1.0');
TransducerDataClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'client', 'http', 'default', '1.0');
TransducerDataClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'client', 'lambda', 'default', '1.0');
TransducerDataClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-transducerdata', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=TransducerDataClientFactory.js.map