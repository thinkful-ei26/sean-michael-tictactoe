const state = (function (){
    const boardArr = ["","","","","","","","",""];

    let turnX = true;

    function nextTurn() {
        turnX = !turnX;
    }

    function newGame() {
        $('#new-game').click(event => console.log("new game"));
    };

    function clickCell() {
        $('.board').on('click', '.cell' , event => {
            if($(event.currentTarget).find('p')[0].innerHTML === '&nbsp;'){
            $(event.currentTarget).find('p')[0].innerText = turnX ? 'X':'O';
            nextTurn();
            }else{
                console.log($(event.currentTarget).find('p')[0].innerHTML);
                alert("Invalid space");
            }
            console.log($(event.currentTarget).find('p'));
            console.log('hi')
        })
    };

    function bindEventListeners(){
        newGame();
        clickCell();
    }

    return {bindEventListeners}

})();


$(function () {
    state.bindEventListeners();
});

// State modification functions

// Render functions

// Event Listeners
