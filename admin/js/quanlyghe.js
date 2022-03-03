var link = "https://61cfb80065c32600170c7fa8.mockapi.io/seat/";
var current = new Date();
var day = current.getDate();
var month = current.getMonth();
var year = current.getFullYear();
current = `${day}/${month + 1}/${year}`;

var cinema = document.querySelector("#cinema_name").value;
console.log(cinema);
show_table = (index) => {
    axios
        .get(`${link}${index}`)
        .then((res) => {
            console.log(res.data);
            document.querySelector("#date").innerHTML = "Ngày: " + current;
            document.querySelector("#time1").innerHTML = res.data.time1.length;
            document.querySelector("#time2").innerHTML = res.data.time2.length;
            document.querySelector("#time3").innerHTML = res.data.time3.length;
        })
        .catch((err) => {
            console.log(err);
        });
};
show_table(cinema);
var btn = document.querySelector("#reset");
btn.addEventListener("click", function() {
    axios
        .put(link, { time1: [], time2: [], time3: [] })
        .then(window.location.reload());
});
var change = document.querySelector("#cinema_name");
change.addEventListener("change", function() {
    show_table(document.querySelector("#cinema_name").value);
});