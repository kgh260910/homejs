// 웹문서가 끝까지 완전히 로딩 되면...
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!');

    import {initViews()} from './viewChanger.js'

    addEvents()

});

// 이벤트 처리(리스너, 핸들러 정의)
function addEvents() {
    console.log('addEvents() CALLED!!');

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!');

        import {showSelectedView(VIEW_NO.SIGN_UP_VIEW)} from './viewChanger.js';

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!');

        import {showSelectedView(VIEW_NO.SIGN_IN_VIEW)} from './viewChanger.js';
        
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!');

        // currentSignInedMemberID = '';
        import {setCurrentSignInedMemberID()} from './session.js';

        import {setMenuStatus(SIGN_OUT_STATUS)} from './menuChanger.js';
        import {showSelectedView(VIEW_NO.SIGN_OUT_VIEW)} from './viewChanger.js';
        
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!');
        
        import {showSelectedView(VIEW_NO.DIARY_WRITE_VIEW)} from './viewChanger.js';

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!');
        
        import {showSelectedView(VIEW_NO.DIARY_LIST_VIEW)} from './viewChanger.js';

    });
    /* MENU CLICK EVENT END */

    /* FUNCTION BUTTON CLICK EVENT START */
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {  // 핸들러(SW전반에 용어), 콜백함수(JS)
        console.log('signUpBtn CLICKED!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        import {addMember(u_id, u_pw, u_mail)} from './db.js';  <<<<<< ??? 

        alert('SIGN-UP SUCCESS!!');

        // document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        // document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        // document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';

        import {doElementValueClean(
            document.querySelector('div.sign_up_wrap input[name="u_id"]'),
            document.querySelector('div.sign_up_wrap input[name="u_pw"]'),
            document.querySelector('div.sign_up_wrap input[name="u_mail"]')
        )} from './util.js';

        import {showSelectedView(VIEW_NO.SIGN_IN_VIEW)} from './viewChanger.js';

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function() {  // 핸들러(SW전반에 용어), 콜백함수(JS)
        console.log('signInBtn CLICKED!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let signInResult = searchMember(u_id, u_pw);  // true or false
        if (signInResult) {
            // currentSignInedMemberID = u_id;
            import {setCurrentSignInedMemberID(u_id)} from './session.js';

            alert('SIGN-IN SUCCESS!!');
            import {showSelectedView(VIEW_NO.HOME_VIEW)} from './viewChanger.js';
            import {setMenuStatus(SIGN_IN_STATUS)} from './menuChanger.js';

        } else {
            // currentSignInedMemberID = '';
            import {setCurrentSignInedMemberID()} from './session.js';

            alert('SIGN-IN FAIL!!');
            import {showSelectedView(VIEW_NO.SIGN_IN_VIEW)} from './viewChanger.js';
            import {setMenuStatus(SIGN_OUT_STATUS)} from './menuChanger.js';

        }

        // document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        // document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';

        import {doElementValueClean(
            document.querySelector('div.sign_in_wrap input[name="u_id"]'),
            document.querySelector('div.sign_in_wrap input[name="u_pw"]')
        )} from './util.js'

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function() {
        console.log('writeBtn CLICKED!!');

        let diary = document.querySelector('div.write_wrap input').value;
        addDiary(diary);

    });
    /* FUNCTION BUTTON CLICK EVENT END */

}