const URL_API11 = "https://61bc10c1d8542f0017824531.mockapi.io/";
const user_Table = "users";
console.log(2222);
const getData = (tableName) => {
    var result = axios.get(`${URL_API11}${tableName}`);
    return result.data;
};

const reset = () => {
    document.getElementById("User").value = "";
    document.getElementById("password").value = "";
};

// const changeDisplayLogin = (id) => {
//     alert("Home page");
//     axios.get(`${URL_API1}${user_Table}`).then((res) => {
//         var login = res.data;
//         for (i in login) {
//             if (login[i].id == id) {
//                 document.getElementById("display_userName").className = "show btn btn_account";
//                 document.getElementById("button_logout").className = "show btn btn_account";
//                 document.getElementById("button_login").className = "hidden btn btn_account";
//                 document.getElementById("button_signup").className = "hidden btn btn_account";
//                 document.getElementById("display_userName").innerHTML = login[i].name;
//                 break;
//             }
//             console.log(login[i].name);
//         }

//     })

// }

// changeDisplayLogin(6);

const changeDisplayLogin = (id) => {
    axios.get(`${URL_API11}${user_Table}`).then((res) => {
        var login = res.data;
        for (i in login) {
            if (login[i].id == id) {
                document.getElementById("display_userName").className =
                    "show btn btn_account";
                document.getElementById("button_logout").className =
                    "show btn btn_account";
                document.getElementById("button_login").className =
                    "hidden btn btn_account";
                document.getElementById("button_signup").className =
                    "hidden btn btn_account";
                document.getElementById("display_userName").innerHTML = login[i].name;
                break;
            }
            console.log(login[i].name);
        }
    });
};

const logIn = () => {
    var account = document.getElementById("User").value;
    var password = document.getElementById("password").value;
    var count = 0;
    axios.get(`${URL_API11}${user_Table}`).then((res) => {
        var login = res.data;
        for (i in login) {
            if (account == login[i].account) {
                if (password == login[i].password) {
                    alert("Sign Up success");
                    localStorage.setItem("user", login[i].id);
                    reset();
                    window.location.href = "../Home_page.html";
                    break;
                } else {
                    console.log("Wrong password");
                    document.getElementById("password").value = "";
                }
                return;
            }
        }
        if (count == 0) {
            console.log("Wrong account");
        }
    });
};

document.getElementById("button_logout").className = "hidden btn btn_account";
document.getElementById("display_userName").className =
    "hidden btn btn_account";

// // Sign up function
// function signUp() {
//     var userName = document.getElementById('userNameSignUp').value;
//     var pwdUser = document.getElementById('pwdSignup').value;
//     var phoneNumber = document.getElementById('phoneNumber').value;

//     if (!checkBlankPhone() + !checkBlankUserName() + !checkPassword()) return
//     callAPI(tblAccounts, "GET", null).then((res) => {
//         var accountArr = res.data;
//         for (var account of accountArr) {
//             if (phoneNumber == account.phone) {
//                 document.getElementById('invalidPhoneSign').innerHTML = "Phone number is already exist!";
//             } else if (userName == account.userName) {
//                 document.getElementById('invalidUserSign').innerHTML = "Password is already exist!";
//                 return;
//             }
//         }
//         var anAccount = {
//             userName: userName,
//             pwd: pwdUser,
//             indexp: [],
//             phone: phoneNumber,
//             status: "off"
//         }
//         callAPI(tblAccounts, "POST", anAccount);
//         alert("Sign up success!");
//         document.getElementById('userNameSignUp').value = "";
//         document.getElementById('pwdSignup').value = "";
//         document.getElementById('phoneNumber').value = "";

//     })
// }

// // Validation sign up data
// function checkBlankUserName() {
//     var userName = document.getElementById("userNameSignUp").value
//     if (userName == '') {
//         document.getElementById('invalidUserSign').innerHTML = "User name must be filled out!";
//         return false
//     }
//     return true
// }

// function checkPassword() {
//     var password = document.getElementById("pwdSignup").value
//     if (password == '') {
//         document.getElementById('invalidPwdSign').innerHTML = "Password must be filled out!";
//         return false;
//     }
//     if (password.length < 4) {
//         document.getElementById('invalidPwdSign').innerHTML = "Password must have more 4 charscters!";
//         return false
//     }
//     return true
// }

// function checkBlankPhone() {
//     var phone = document.getElementById("phoneNumber").value
//     if (phone == '') {
//         document.getElementById('invalidPhoneSign').innerHTML = "User name must be filled out!";
//         return false
//     }
//     if (isNaN(phone)) {
//         document.getElementById('invalidPhoneSign').innerHTML = "Phone number must be digital";
//         return false
//     }
//     return true
// }