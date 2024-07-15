// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(obj) {
    if (obj.userRole === 'ADMIN') {
        return true
    }
    else {
        return false
    }

}



function getEmail(user) {
    if (typeof user !== 'object' || !user.firstName || !user.lastName) {
        throw new Error("Invalid user object");
    }

    const firstInitial = user.firstName.charAt(0).toLowerCase();
    const lastName = user.lastName.toLowerCase();
    const email = `${firstInitial}${lastName}.prsvr@gmail.com`;

    return email;
}




function getPlaylistLength(playlist) {
    if (typeof playlist !== 'object' || !Array.isArray(playlist.songs)) {
        throw new Error("Invalid playlist object");
    }
    return playlist.songs.length;
}


function createPhonebook(names, phoneNumbers) {
    if (!Array.isArray(names) || !Array.isArray(phoneNumbers)) {
        throw new Error("Both inputs must be arrays");
    }

    if (names.length !== phoneNumbers.length) {
        throw new Error("Names and phone numbers arrays must be of the same length");
    }

    const phonebook = {};

    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = phoneNumbers[i];
    }

    return phonebook
}


function getHardestHomework(homeworks) {
    if (!Array.isArray(homeworks) || homeworks.length === 0) {
        return '';
    }

    let hardestHomework = homeworks[0];

    for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < hardestHomework.averageScore) {
            hardestHomework = homeworks[i];
        }
    }

    return hardestHomework.name;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};