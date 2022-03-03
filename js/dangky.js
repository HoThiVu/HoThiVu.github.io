class User {
    constructor(name, email, address, account, ID_card, password, phone_number, gender, date_of_birth) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.account = account;
        this.ID_card = ID_card;
        this.password = password;
        this.phone_number = phone_number;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
    }
}


const URL_API = "https://61bc10c1d8542f0017824531.mockapi.io/";
const user_Table = "users";

// var ID_User = null;

const getData = (tableName, id) => {
    var result = axios.get(`${URL_API}${tableName}${id}`);
    return result.data;
}

const postData = (tableName, data) => {
    axios.post(`${URL_API}${tableName}`, data).catch((err) => {
        console.log(err);
    });
    console.log("posted");
}




console.log(checkAccount("huy"));

const sign = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var account = document.getElementById("userName").value;
    var ID_card = document.getElementById("ID_card").value;
    var Password = document.getElementById("Password").value;
    var date_of_birth = document.getElementById("birthday").value;
    var password = document.getElementById("password").value;
    var phone_number = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    // console.log(gender);
    // var checkbox = document.getElementsByName("gender");
    // for (var i = 0; i < checkbox.length; i++) {
    //     if (checkbox[i].checked === true) {
    //         alert(checkbox[i].value);
    //     }
    // }

    console.log(name, email, address, account, ID_card, password, phone_number, gender, date_of_birth);
    axios.get(`${URL_API}${user_Table}`).then((res) => {
        var listAccount = res.data;
        for (var i in listAccount)
            if (listAccount[i].account == account) {
                alert("Account is exist")
                return
            }
        if (name && email && address && account && ID_card && Password && birthday && phone && gender != "") {
            if (Password != password) {
                alert("Pass sai")
            } else {
                postData(user_Table, new User(name, email, address, account, ID_card, password, phone_number, gender, date_of_birth))
                alert("Success")
                reset();
                window.location.assign("../HTML/form.html")
            }
        } else {
            alert("Nhap du thong tin");
        }
    })

}

const reset = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("ID_card").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gender").value = "";
}