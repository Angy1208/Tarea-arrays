//Online Status
console.log("Display online status for a list of users.");

const users = ['mocking99', 'J0eyPunch', 'glassedFer', 'anon123'];

function getLength(arr){
    return arr.length;
}

function calcRemaining(total) {
    return total - 2;
}

function getUsers(arr){
    const users = arr[0] + arr[1];
    return users;
}

function onlineStatus(arr){
    const total = getLength(arr);
    const rest = calcRemaining(total);
    const firstUsers = getUsers(arr);

    console.log("Users: " + firstUsers + ", and " + rest + "are online");
}
onlineStatus(users);

