function saveData (key, newObj) {
    try {
        var allObjs = [];
        var oldObjs = getDataByKey(key);
        oldObjs = JSON.parse(oldObjs);
        if (oldObjs.length) {
            for (var obj of oldObjs) {
                allObjs.push(obj);
            }
        }
        allObjs.push(newObj);
        localStorage.setItem(key, JSON.stringify(allObjs));
        return true;
    } catch (error) {
        return false;
    }
}

function getDataByKey(key) {
    try {
        var data = localStorage.getItem(key);
        if (!data) {
            return [];
        }
        return data;
    } catch (error) {
        return [];
    }
}
