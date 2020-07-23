let shareBtn = document.getElementsByClassName('share');
let tooltip = document.getElementsByClassName('tooltip');
let tooltipVisible = false;

shareBtn[0].addEventListener('mouseover', (e) => {
    tooltip[0].style.visibility = "visible";
    tooltipVisible = true;
})

shareBtn[0].addEventListener('mouseout', (e) => {
    tooltip[0].style.visibility = "hidden";
    tooltipVisible = false;
})

