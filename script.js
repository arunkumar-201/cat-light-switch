function switchoff() {
    document.getElementById("bulbimg").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    document.getElementById("catimg").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById("switchstatus").textContent = "Switched Off";

    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
}

function switchon() {
    document.getElementById("bulbimg").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    document.getElementById("catimg").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

    document.getElementById("switchstatus").textContent = "Switched On";

    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
}