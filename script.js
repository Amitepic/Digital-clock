
        const timeBar = document.querySelector('.timeBar')
        setInterval(function () {
            let date = new Date();
            timeBar.innerText = date.toLocaleString();
             // console.log(timeBar.innerHTML);
        },1000)
