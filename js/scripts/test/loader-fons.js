function loaderFons() {

    const fonWrapper = document.querySelector('.itemWrapper__page');

    let fonItem = `
    <div class="page__item">
        <div class="item__photo">
            <img src="./static/img/fonWrapper/test-fon.jpg" alt="">
        </div>

        <div class="item__info">
            <div class="info__acc">
                <div class="acc__photo">
                    <img src="./static/img/fonWrapper/test-fon.jpg" alt="">
                </div>
                        
                <div class="acc__info">
                    <p>MILA</p>
                    <p>22 ноября в 8:40</p>
                </div>
            </div>

            <div class="info__size">
                <p>Full HD</p>
                <p>1920x1280</p>
            </div>
        </div>
    </div>
    `

    for (i = 0; i < 21; i++) {
        fonWrapper.insertAdjacentHTML('beforeend', fonItem);
    }

}

loaderFons();