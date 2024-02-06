var fbtn = document.getElementById("file-btn")
var hbtn = document.getElementById("hide-btn")


function uploadfile()
{
    hbtn.click()
}


// -------------------------------------------
// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Event listener for dark mode button
document.addEventListener('DOMContentLoaded', function() {
    const darkBtn = document.querySelector('.dark-button');
    darkBtn.addEventListener('click', toggleDarkMode);
});

// -------------------------------------------