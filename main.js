
const khodamlist = [
    "khodam Ambatron",
    "khodam macan ireng",
    "khodam tidak ada",
    "khodam sempak gusion",
    "khodam bahasa pemrograman Python",
    "khodam ji samsoe",
    "khodam mr ironi"
];

function pilihkhodam(event) {
    event.preventDeafult();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamlist.length);
        const khodamTerpilih = khodamlist[randomIndex];
        resultDiv.textContent = 'Nama Anda Adalah ${nama} dan khodam pilihan anda ${khodam terpilih}.';
        

        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    } else {
        resultDiv.textContent ="nama tidak boleh kosong.";
    }

}

document.getElementById("khodamForm").addEventListener("submit", pilihkhodam);