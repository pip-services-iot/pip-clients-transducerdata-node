import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { TransducerDataNullClientV1 } from '../version1/TransducerDataNullClientV1';
import { TransducerDataDirectClientV1 } from '../version1/TransducerDataDirectClientV1';
import { TransducerDataHttpClientV1 } from '../version1/TransducerDataHttpClientV1';
import { TransducerDataLambdaClientV1 } from '../version1/TransducerDataLambdaClientV1';
import { TransducerDataHttpProxyClientV1 } from '../version1/TransducerDataHttpProxyClientV1';

export class TransducerDataClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-transducerdata', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-transducerdata', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-transducerdata', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-transducerdata', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-transducerdata', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('pip-services-transducerdata', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(TransducerDataClientFactory.NullClientV1Descriptor, TransducerDataNullClientV1);
		this.registerAsType(TransducerDataClientFactory.DirectClientV1Descriptor, TransducerDataDirectClientV1);
		this.registerAsType(TransducerDataClientFactory.HttpClientV1Descriptor, TransducerDataHttpClientV1);
		this.registerAsType(TransducerDataClientFactory.LambdaClientV1Descriptor, TransducerDataLambdaClientV1);
		this.registerAsType(TransducerDataClientFactory.HttpProxyClientV1Descriptor, TransducerDataHttpProxyClientV1);
	}
	
}
