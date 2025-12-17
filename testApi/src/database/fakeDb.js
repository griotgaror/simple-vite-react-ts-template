let fakeDb = null;

const initFakeDb = async function () {
    if (fakeDb) {
        return fakeDb;
    }

    fakeDb = {
        session: undefined,
    };
};

module.exports = initFakeDb;
