function cetak(){
    let nameu = document.getElementById("name").value;
    let btn = document.getElementById("getBtn");
    let quotes = document.getElementById("quotes");
    let author = document.getElementById("author");
    
    const url = "https://api.quotable.io/random";
    
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            console.log(item.content);
            console.log(item.author);
            quotes.innerText = item.content;
            author.innerText = item.author;
            document.getElementById("for").innerHTML = "For you, " + nameu ;
        });    
}
