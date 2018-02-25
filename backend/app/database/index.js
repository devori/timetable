import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const scheduleDocument = lowdb(new FileSync('../data/schedule.json'));
scheduleDocument.defaults({});

export function getSchedules() {
    return scheduleDocument.get('lastModifiedTimestamp')
        .cloneDeep()
        .value();
}
