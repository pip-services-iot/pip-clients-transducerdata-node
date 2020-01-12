let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { TransducerDataMemoryPersistence } from 'pip-services-transducerdata-node';
import { TransducerDataController } from 'pip-services-transducerdata-node';
import { TransducerDataHttpServiceV1 } from 'pip-services-transducerdata-node';
import { ITransducerDataClientV1 } from '../../src/version1/ITransducerDataClientV1';
import { TransducerDataHttpClientV1 } from '../../src/version1/TransducerDataHttpClientV1';
import { TransducerDataClientFixtureV1 } from './TransducerDataClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('TransducerDataHttpClientV1', ()=> {
    let service: TransducerDataHttpServiceV1;
    let client: TransducerDataHttpClientV1;
    let fixture: TransducerDataClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new TransducerDataMemoryPersistence();
        let controller = new TransducerDataController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        service = new TransducerDataHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-transducerdata', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-transducerdata', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-transducerdata', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new TransducerDataHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new TransducerDataClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
