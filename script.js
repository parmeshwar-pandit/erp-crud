function saveData (key, newObj) {
    try {
        var allObjs = [];
        var oldObjs = getDataByKey(key);
        if (oldObjs.length) {
            for (var obj of oldObjs) {
                allObjs.push(obj);
            }
        }
        allObjs.push(newObj);
        console.log('allObjs', allObjs)
        localStorage.setItem(key, JSON.stringify(allObjs));
        return true;
    } catch (error) {
        console.log('saveData error', error)
        return false;
    }
}

function getDataByKey(key) {
    try {
        var data = localStorage.getItem(key);
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function login(userData) {
    var user = getUserByEmail(userData.email);
    console.log('login user', user)
    if (!user) {
        return false;
    }
    if (user.password != userData.password) {
        return false;
    }
    return true;
}

function getUserByEmail(email) {
   var users = getDataByKey('users');
   console.log('users', users)
   if (!users.length) {
    return null;
   }
   var filterUsers = users.filter(function(user){
    if (user.email == email) {
        return user;
    }
    return false;
   });
   var user = filterUsers.length ? filterUsers[0] : null;
   if (!user) {
    return null;
   }
   return user;
}

function isLogedin() {
    var isLogedin = localStorage.getItem('isLogedin');
    if (isLogedin == 'false') {
        return false;
    }
    return true;
}

function logout () {
    localStorage.setItem('isLogedin', false);
    window.location.href = './login.html';
}

// [
//     {
//         firstName: 'pama',
//         lastName: 'padnit',
//         email: 'pama@g.com',
//         password: 'abc'
//     },
//     {
//         firstName: 'sandip',
//         lastName: 'padnit',
//         email: 'sandip@g.com',
//         password: 'abc'
//     }
// ]

// [
//     {
//         firstName: 'pama',
//         lastName: 'padnit',
//         email: 'pama@g.com',
//         password: 'abc'
//     }
// ]