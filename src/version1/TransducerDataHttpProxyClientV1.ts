import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { ObjectDataV1 } from './ObjectDataV1';
import { ObjectDataSetV1 } from './ObjectDataSetV1';
import { ITransducerDataClientV1 } from './ITransducerDataClientV1';
import { TransducerDataHttpClientV1 } from './TransducerDataHttpClientV1';

export class TransducerDataHttpProxyClientV1 extends ClustersProxyHttpClientV1<ITransducerDataClientV1>
    implements ITransducerDataClientV1 {       
    
    constructor(config?: any) {
        super(TransducerDataHttpClientV1, 'pip-services-transducerdata', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getData(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectDataSetV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getData(correlationId, orgId, filter, paging, callback);
        });
    }

    public addData(correlationId: string, orgId: string, data: ObjectDataV1,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addData(correlationId, orgId, data, callback);
        });
    }

    public addDataBatch(correlationId: string, orgId: string, data: ObjectDataV1[],
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addDataBatch(correlationId, orgId, data, callback);
        });
    }
    
    public deleteData(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err,);
                return;
            }

            client.deleteData(correlationId, orgId, filter, callback);
        });
    }
}
