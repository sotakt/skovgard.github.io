// Show and Hide Player
function showPlayer(link) {
    document.getElementById('menubackg').classList.remove('hide');
    var links = link.getAttribute("data-link");
    document.getElementById("player").src = links;

}

function hidePlayer() {
    document.getElementById('menubackg').classList.add('hide');
    document.getElementById("player").src = '';
}

//Show more articles
function showMore() {
    document.getElementById('moreContent').classList.remove('hide');
    document.getElementById('moreContentAside').classList.remove('hide');
    document.getElementById('see-more').classList.add('hide');
}
//show Menu
function menutoggled() {
    document.getElementById('navMobile').classList.toggle('toggled');
}
