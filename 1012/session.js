let currentSignInedMemberID = '';

export const setCurrentSignInedMemberID =(id = '') => {
    console.log('setCurrentSignInedMemberID() CALLED!!');
    currentSignInedMemberID = id;
}

export const getCurrentSignInedMemberID =() => {
    console.log('getCurrentSignInedMemberID() CALLED!!');
    return currentSignInedMemberID;
}