import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ITransducerDataClientV1 } from './ITransducerDataClientV1';
import { ObjectDataV1 } from './ObjectDataV1';
import { ObjectDataSetV1 } from './ObjectDataSetV1';

export class TransducerDataNullClientV1 implements ITransducerDataClientV1 {
            
    public getData(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectDataSetV1>) => void): void {
        callback(null, new DataPage<ObjectDataSetV1>([], 0));
    }

    public addData(correlationId: string, orgId: string, data: ObjectDataV1,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public addDataBatch(correlationId: string, orgId: string, data: ObjectDataV1[],
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
    
    public deleteData(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}