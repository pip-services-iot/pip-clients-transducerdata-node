let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ObjectDataSetV1 } from '../../src/version1/ObjectDataSetV1';
import { ITransducerDataClientV1 } from '../../src/version1/ITransducerDataClientV1';

let now = new Date().getTime();
let interval = 300000;
let point1 = new Date(now);
let point2 = new Date(now + (interval / 2));
let point3 = new Date(now + interval);

export class TransducerDataClientFixtureV1 {
    private _client: ITransducerDataClientV1;
    
    constructor(client: ITransducerDataClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let data1: ObjectDataSetV1;

        async.series([
        // Create one data
            (callback) => {
                this._client.addData(
                    null,
                    '1',
                    { org_id: '1', object_id: '1', time: point1, params: [ { id: 1, typ: 1, val: 1 }, { id: 2, typ: 2, val: 2 } ] },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Create other data
            (callback) => {
                this._client.addDataBatch(
                    null, 
                    '1',
                    [
                        { org_id: '1', object_id: '1', time: point2, params: [ { id: 1, typ: 1, val: 1 }, { id: 2, typ: 2, val: 2 } ] },
                        { org_id: '1', object_id: '1', time: point3, params: [ { id: 1, typ: 1, val: 1 }, { id: 2, typ: 2, val: 2 } ] }
                    ],
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Delete data
            (callback) => {
                this._client.deleteData(
                    null,
                    '1',
                    null,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete data
            (callback) => {
                this._client.getData(
                    null,
                    '1',
                    null,
                    null,
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 0);

                        callback();
                    }
                );
            }
        ], done);
    }
}
