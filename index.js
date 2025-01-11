
function redirectUser() {
    var name = document.getElementById("name").value.toLowerCase();
        if (name === "anamika") {
                window.location.href = "portfolio.html";
        } else if (name === "moni") {
                window.location.href = "moniportfolio.html";
        }else if (name === "akuu") {
                window.location.href = "akuuportfolio.html";
        }else if (name === "nehu") {
                window.location.href = "nehuportfolio.html";
        }else if (name === "love") {
                window.location.href = "loveportfolio.html";
        }else if (name === "shagun") {
                window.location.href = "shagunportfolio.html";
        }else {
                alert("No page found for the entered name.");
        }
            return false; // Prevent form submission
}
  