
let favoriteNum = 11;
let baseURL = "http://numbersapi.com/";

// ======================================
// ======== PART 1: NUMBER FACTS ========
// ======================================


// // 1.)

$.getJSON(`${baseURL}/${favoriteNum}?json`).then((data => {
    console.log(data);
}));

// // 2.)

let favoriteNums = [7, 18, 30];

$.getJSON(`${baseURL}/${favoriteNums}?json`).then((data => {
    console.log(data);
}));

// // 3.)

Promise.all(
    Array.from( { length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favoriteNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});


