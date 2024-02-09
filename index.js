const see_more_button = document.getElementById("see_more_button");
const about_us_page = document.querySelector(".about_us_page")
const transition_box = document.querySelector(".transition_box");
const hero_heading = document.querySelector(".hero_heading");
const hero_heading_helper = document.querySelector(".hero_helper");
const transition_box_helper = document.querySelector(".transition_box_helper");
const topbar_login = document.querySelector(".user_mod_login_button");
const topbar_signup = document.querySelector(".user_mod_signup_button");
const transition_box_inner = document.querySelector(".transition_box_inner");
const main_landing_page = document.querySelector(".main_landing_page");
const bottom_navbar = document.querySelector(".bottom_navbar_items");


topbar_login.onclick = e => {
    window.location.assign("./login_page.html")
}

main_landing_page.addEventListener("click", e => {
    about_us_page.style.bottom = "-50rem";
})



topbar_signup.onclick = e => {
    window.open("./login_page.html")
}

const LandingPageAnimation = () => {
    transition_box.style.width = "100%";
    transition_box.style.height = "100vh";
    transition_box.style.top = "0rem";
    transition_box.style.left = "0%";
    transition_box.style.transform = `translate(0%)`
    transition_box.style.borderRadius = '0'
    transition_box.style.backgroundPosition = `100% 100%`

    setTimeout(() => {
        document.querySelector(".topbar_heading").style.color = "black";
    }, 1000)


    transition_box_helper.style.width = "100%";
    transition_box_helper.style.height = "100vh";
    transition_box_helper.style.top = "0rem";
    transition_box_helper.style.left = "0%";
    transition_box_helper.style.transform = `translate(0%)`
    transition_box_helper.style.borderRadius = '0'
    transition_box_helper.style.background = `rgba(255, 255, 255, 1)`
    setTimeout(() => {
        transition_box_helper.style.zIndex = `1000`
    }, 300)
    setTimeout(() => {
        transition_box_helper.style.boxShadow = null;
        transition_box.style.boxShadow = null;
    }, 1000)
    topbar_login.style.opacity = `0`;
    topbar_signup.style.opacity = `0`;
}


const MainPhaseAnimation = () => {

    transition_box_inner.style.opacity = "1";
    setTimeout(() => {
        document.querySelector(".transition_box_inner_heading").style.transform = `scale(0.5)`
    }, 1000)


}


const LandingPageHelperAnimation = () => {
    hero_heading.style.transform = `translate(0, -2rem)`;
    hero_heading.style.opacity = `0`
    hero_heading_helper.style.transform = `translate(0, -2rem)`;
    hero_heading_helper.style.opacity = `0`
}


const MainPageAnimation = () => {
    main_landing_page.style.top = '0%';
    main_landing_page.style.transform = `scale(1)`
    main_landing_page.style.borderRadius = `0%`
    setTimeout(() => {
        topbar_login.style.opacity = `1`;
        topbar_signup.style.opacity = `1`;
        topbar_login.style.backgroundColor = "black";
        topbar_login.style.color = "white";
        topbar_signup.style.backgroundColor = "transparent";
        topbar_signup.style.color = "black";
        topbar_signup.style.border = `0.5px solid black`;
    }, 1000)

    setTimeout(() => {
        bottom_navbar.style.left = "2.5rem";
        bottom_navbar.style.opacity = '1';
    }, 1000)
}

window.onload = () => {
    setTimeout(LandingPageAnimation, 2000);
    setTimeout(LandingPageHelperAnimation, 1500);
    setTimeout(MainPhaseAnimation, 2200);
    setTimeout(MainPageAnimation, 4500);


    document.querySelector(".home_button").onmouseover = () => {
        document.querySelector(".home_tooltip").style.opacity = "1";
    }


    document.querySelector(".home_button").onclick = () => {
        window.location.reload();
    }
    document.querySelector(".home_button").onmouseout = () => {
        document.querySelector(".home_tooltip").style.opacity = '0';
    }


    document.querySelector(".aboutus_button").addEventListener("click", e => {
        if (about_us_page.style.bottom === "-50rem") about_us_page.style.bottom = "0";
        else about_us_page.style.bottom = "-50rem"

    })

    document.querySelector(".dashboard_button").onmouseover = () => {
        document.querySelector(".dashboard_tooltip").style.opacity = "1";
    }
    document.querySelector(".dashboard_button").onmouseout = () => {
        document.querySelector(".dashboard_tooltip").style.opacity = '0';
    }


    document.querySelector(".features_button").onmouseover = () => {
        document.querySelector(".features_tooltip").style.opacity = "1";
    }
    document.querySelector(".features_button").onmouseout = () => {
        document.querySelector(".features_tooltip").style.opacity = '0';
    }


    document.querySelector(".features_button").onclick = () => {
        window.location.assign("./FeedbackForm.html")
    }
    document.querySelector(".aboutus_button").onmouseover = () => {
        document.querySelector(".aboutus_tooltip").style.opacity = "1";
    }
    document.querySelector(".aboutus_button").onmouseout = () => {
        document.querySelector(".aboutus_tooltip").style.opacity = '0';
    }
}