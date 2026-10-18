if (!localStorage.getItem('memberDB')) {
    localStorage.setItem('memberDB', JSON.stringify({}));
}

if (!localStorage.getItem('diaryDB')) {
    localStorage.setItem('diaryDB', JSON.stringify({}));
}


// 멤버 DB
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    let memberDB = JSON.parse(localStorage.getItem('memberDB'));

    if (memberDB[id] !== undefined)
        return;

    memberDB[id] = {
        u_id: id,
        u_pw: pw,
        u_mail: mail
    }
    localStorage.setItem('memberDB', JSON.stringify(memberDB));

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    diaryDB[id] = [];
    localStorage.setItem('diaryDB', JSON.stringify(diaryDB));
    return;

    
}

const searchMember = (id, pw) => {
    console.log('searchMembe() CALLED!!');

    let memberDB = JSON.parse(localStorage.getItem('memberDB'));
    if(memberDB[id] !== undefined && memberDB[id].u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;
    }

    console.log('SIGN IN FAIL!!');
    return false;
}


// 다이어리 DB
const addDiary = (diary) => {
    console.log('addDiary() CALLED!!');

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    let u_id = getCurrentSignInedMemberID();
    let myDiaries = diaryDB[u_id];
    myDiaries.push(diary);
    localStorage.setItem('diaryDB', JSON.stringify(diaryDB));
}

const searchDiaries = (u_id) => {
    console.log('searchDiaries() CALLED!!');

    let diaryDB = JSON.parse(localStorage.getItem('diaryDB'));
    return diaryDB[u_id];
}

// 더미데이터
if (IS_DEV) {
    addMember('gildong', '1234', 'gildong@gmail.com');
    addMember('chanho', '0000', 'chanho@naver.com');
}