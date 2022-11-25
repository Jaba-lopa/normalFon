let countWrapperPage = 0;

$(window).scroll(function() {
    const progressScroll = Math.floor(window.scrollY) / (document.body.clientHeight - window.innerHeight + 90) * 100;
    
    if (progressScroll > "90") {
        loaderFons();
        countWrapperPage++;
    }
})