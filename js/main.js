// baguetteBox photo light box //
baguetteBox.run('.gallery');


// --------------------------- //
// ----- Search Function ----- //
// --------------------------- //

// Captures the data of the thumbnail class
const $card = $(".thumbnail");
let $photoCaption = [];
let searchInput;

// Loop to get each thumbnail data in lowercase
for(let i = 0; i < $card.length; i ++) {
    $photoCaption.push($card[i].dataset.caption);
    $photoCaption[i] = $photoCaption[i].toLowerCase();
}

// Captures the User Search Input
$("#userSearch").keyup(function() {
    searchInput = $(this).val().toLowerCase();

    // Does text match text?
    // Loops through data
    for(let i = 0; i < $photoCaption.length; i ++) {
        if($photoCaption[i].indexOf(searchInput) > -1){
            $card[i].style.display= 'block';
        } else {
            $card[i].style.display = 'none';
        }
    }
});
