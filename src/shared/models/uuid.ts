import * as uuidLib from 'uuid/v4';

// tslint:disable:no-construct
export class UUID extends String {
    public constructor() {
        super();
        return new String(uuidLib());
    }
}

UUID.prototype = new String();
