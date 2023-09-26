import Realm from 'realm';
import realm from './realmConfig';



// Create a new PosEntry
export const createPosEntry = (p_content) => {
    let newPosEntry = null;
    realm.write(() => {
        newPosEntry = realm.create('PosEntry', {
            _id: Realm.BSON.ObjectId(),
            content: p_content,
        });
    });
    return newPosEntry;
};

// Create Reflection and associate it with the corresponding PosEntry
export const createReflection = (reflect_content, posEntryId) => {
    // Write to database
    realm.write(() => {
        // Find the PosEntry associated with the given posEntryId 
        const entry = realm.objectForPrimaryKey('PosEntry', posEntryId);
        //console.log(entry);
        if (entry) {
            // Create the reflection
            const reflection = realm.create('Reflection', {
                _id: Realm.BSON.ObjectId(),
                reflectContent: reflect_content,
        });
        // Update the reflection assignee property
        // reflection.assignee = entry;
        // Add the new reflection to the entry's reflections list
        entry.reflections.push(reflection);
        } else {
            console.log("PosEntry Not Found");
        }
    });
};

// Read all positive entries
export const readPosEntries = () => {
    try {
        return realm.objects('PosEntry');
    } catch (error) {
        console.error("Error reading posEntries", error);
    }
};

// Return a ceratin posENtry based on the id of teh entry
export const readPosEntryByID = (posEntryID) => {
    try {
        // Grab the posEntry
        const entry = realm.objectForPrimaryKey('PosEntry', posEntryID);
        return entry ? entry : null; // Return entry if found, null if else
    } catch (error) {
        console.error("Error Reading posEntryID", error);
        return null;
    }
};

export const deleteAllEntries = () => {
    try {
        realm.write(() => {
            // Grab all the PosEntry entries
            const posEntry = realm.objects('PosEntry');
            // Iterate through posEntries and delete their reflections
            posEntry.forEach((entry) => {
                realm.delete(entry.reflections);
            });

            // Delete PosEntries
            realm.delete(posEntry);
        });
    } catch (error) {
        console.error("Error deleting all posentries", error);
    }
};

