const API_URL = "https://61bc10c2d8542f001782453f.mockapi.io";
var link = "https://61cfb80065c32600170c7fa8.mockapi.io/seat/";

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

var btn = document.querySelector(".abc");
var btn_sucsses = document.querySelector(".button-77");
var modal_content = document.querySelector(".modal_11");
var modal = document.querySelector(".modal-bg");
var closee = document.querySelector(".modal-close");
var btn_close = modal_content.querySelector(".btn_modal");

var total = localStorage.getItem("total");
var user_ID = localStorage.getItem("user");
var film_ID = localStorage.getItem("film");
var seat = localStorage.getItem("seat");
var date = localStorage.getItem("date");
var sold_seat = localStorage.getItem("sold_seat");
var time_cinema = localStorage.getItem("time");

sold_seat = sold_seat.slice(0, -1);
var sold_seat = sold_seat + "," + seat.slice(1);
sold_seat = JSON.parse(sold_seat);
console.log(sold_seat);
console.log(sold_seat[2]);

upload_data = (id_film, id_user, date, seat, price) => {
    axios.get(`${link}${localStorage.getItem("id_cinema")}`).then((res) => {
        let name = res.data.cinema;
        data = {
            id_user: id_user,
            start: "15h30",
            id_film: id_film,
            cinema: name,
            seat: seat,
            date: date,
            total: price,
            quantity: "",
            id: "",
        };
        callAPI("bills", "POST", data).then(
            (response = () => {
                var id_cinema = localStorage.getItem("id_cinema");
                console.log("succsessful !");
                if (time_cinema == "time1") {
                    axios.put(`${link}${id_cinema}`, { time1: sold_seat });
                } else if (time_cinema == "time2") {
                    axios.put(`${link}${id_cinema}`, { time2: sold_seat });
                } else if (time_cinema == "time3") {
                    axios.put(`${link}${id_cinema}`, { time3: sold_seat });
                }
            })
        );
    });
};
document.querySelector(".color-total").innerHTML = total + " vnĐ";

btn.addEventListener("click", () => {
    modal.classList.add("bg-active");
    modal_content.classList.add("style");
});

btn_sucsses.addEventListener("click", () => {
    modal.classList.add("bg-active");
    modal_content.classList.add("style");
    document.querySelector(".modal_content").innerHTML =
        "đang xác nhận thông tin....";
    document.querySelector(".btn_modal").style.display = "none";
    setTimeout(() => {
        // tam thời chưa upload vì còn cần check thêm
        upload_data(film_ID, user_ID, date, seat, total);
        document.querySelector(".modal_content").innerHTML =
            "xác nhận thành công <br> nhấn nhất trí để về trang chủ";
        document.querySelector(".btn_modal").style.display = "block";
    }, 5000);
    // document.getElementById("fs")
});

closee.addEventListener("click", () => {
    modal.classList.remove("bg-active");
    modal_content.classList.remove("style");
});

btn_close.addEventListener("click", () => {
    modal.classList.remove("bg-active");
    modal_content.classList.remove("style");
    window.location.assign("../Home_page.html");
});