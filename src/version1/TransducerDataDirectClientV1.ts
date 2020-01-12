import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ITransducerDataClientV1 } from './ITransducerDataClientV1';
//import { ITransducerDataController } from 'pip-services-transducerdata-node';
import { ObjectDataV1 } from './ObjectDataV1';
import { ObjectDataSetV1 } from './ObjectDataSetV1';

export class TransducerDataDirectClientV1 extends DirectClient<any> implements ITransducerDataClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-transducerdata", "controller", "*", "*", "*"))
    }

    public getData(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectDataSetV1>) => void): void {
        let timing = this.instrument(correlationId, 'transducer_data.get_data');
        this._controller.getData(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public addData(correlationId: string, orgId: string, data: ObjectDataV1,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'transducer_data.add_data');
        this._controller.addData(correlationId, data, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public addDataBatch(correlationId: string, orgId: string, data: ObjectDataV1[],
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'transducer_data.add_data_batch');
        this._controller.addDataBatch(correlationId, data, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
    public deleteData(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'transducer_data.delete_data');
        this._controller.deleteData(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}