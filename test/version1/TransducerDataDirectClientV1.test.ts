let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { TransducerDataMemoryPersistence } from 'pip-services-transducerdata-node';
import { TransducerDataController } from 'pip-services-transducerdata-node';
import { ITransducerDataClientV1 } from '../../src/version1/ITransducerDataClientV1';
import { TransducerDataDirectClientV1 } from '../../src/version1/TransducerDataDirectClientV1';
import { TransducerDataClientFixtureV1 } from './TransducerDataClientFixtureV1';

suite('TransducerDataDirectClientV1', ()=> {
    let client: TransducerDataDirectClientV1;
    let fixture: TransducerDataClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new TransducerDataMemoryPersistence();
        let controller = new TransducerDataController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-transducerdata', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-transducerdata', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new TransducerDataDirectClientV1();
        client.setReferences(references);

        fixture = new TransducerDataClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
