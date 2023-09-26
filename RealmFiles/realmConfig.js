import Realm from 'realm';


// Positive entry object schema
class PosEntry extends Realm.Object {
    static schema = {
        name: 'PosEntry',
        properties: {
            _id: { type: 'objectId', indexed: true, default: () => new Realm.BSON.ObjectId() },
            content: 'string',
            reflections: { type: 'list', objectType: 'Reflection'},
        },
        primaryKey: '_id',
    };
}

// Reflection schema for a specific positive entry written
class Reflection extends Realm.Object {
    static schema = {
        name: 'Reflection',
        properties: {
            _id: { type: 'objectId', indexed: true, default: () => new Realm.BSON.ObjectId() },
            reflectContent: 'string',
            assignee: {
                type: 'linkingObjects',
                objectType: 'PosEntry',
                property: 'reflections',
            }
        },
        primaryKey: '_id',
    };
}



const realm = new Realm({ schema: [Reflection, PosEntry]});
export default realm;




