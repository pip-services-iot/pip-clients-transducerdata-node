import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { ObjectDataV1 } from './ObjectDataV1';
import { ObjectDataSetV1 } from './ObjectDataSetV1';
import { ITransducerDataClientV1 } from './ITransducerDataClientV1';

export class TransducerDataHttpClientV1 extends CommandableHttpClient implements ITransducerDataClientV1 {       
    
    constructor(config?: any) {
        super('v1/transducer_data');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getData(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectDataSetV1>) => void): void {
        this.callCommand( 
            'get_data', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public addData(correlationId: string, orgId: string, data: ObjectDataV1,
        callback: (err: any) => void): void {
        this.callCommand(
            'add_data',
            correlationId,
            {
                data: data
            }, 
            callback
        );
    }

    public addDataBatch(correlationId: string, orgId: string, data: ObjectDataV1[],
        callback?: (err: any) => void): void {
        this.callCommand(
            'add_data_batch',
            correlationId,
            {
                data: data
            }, 
            callback
        );
    }
    
    public deleteData(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, data: ObjectDataSetV1) => void): void {
        this.callCommand(
            'delete_data', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }
}
