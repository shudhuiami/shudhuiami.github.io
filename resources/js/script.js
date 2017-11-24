var cover_slide = {
    "current_slide": 0,
    "autoPlay": ''
};
var project_slide = {
    "current_slide": 0,
    "autoPlay": ''
};

$(function () {
    autoPlay_cover();
    autoPlay_project()
});

function autoPlay_cover() {
    var cover_carousel = $('#cover_slide').find('.slide_box');
    var controller = $('#cover_slide').find('.slide_navigation').find('ul');
    cover_slide.autoPlay = setInterval(function () {
        var current_slide = cover_carousel[0].children[cover_slide.current_slide];
        var current_trigger = controller[0].children[cover_slide.current_slide];
        var next_slide;
        var next_trigger;
        if (cover_slide.current_slide < 2) {
            cover_slide.current_slide = cover_slide.current_slide + 1;
            next_slide = cover_carousel[0].children[cover_slide.current_slide];
            next_trigger = controller[0].children[cover_slide.current_slide];
        } else {
            cover_slide.current_slide = 0;
            next_slide = cover_carousel[0].children[0];
            next_trigger = controller[0].children[0];
        }
        current_slide.classList.remove('_active');
        current_trigger.classList.remove('_active');
        next_slide.classList.add('_active');
        next_trigger.classList.add('_active');
    }, 6000)
}

function autoPlay_project() {
    var project_carousel = $('#project_slide_wrapper').find('.project_slide');
    var carousel_trigger = $('#project_slide_wrapper').find('.carousel_nav').find('.nav_triggers');
    project_slide.autoPlay = setInterval(function () {
        var current_slide = project_carousel[0].children[project_slide.current_slide];
        var current_trigger = carousel_trigger[0].children[project_slide.current_slide];
        var next_slide;
        var next_trigger;
        if (project_slide.current_slide < 2) {
            project_slide.current_slide = project_slide.current_slide + 1;
            next_slide = project_carousel[0].children[project_slide.current_slide];
            next_trigger = carousel_trigger[0].children[project_slide.current_slide];
        } else {
            project_slide.current_slide = 0;
            next_slide = project_carousel[0].children[0];
            next_trigger = carousel_trigger[0].children[0];
        }
        $(current_slide).find('.eachSlide').removeClass('flipInY');
        $(current_slide).find('.eachSlide').addClass('flipOutY');
        current_trigger.classList.remove('_active');
        setTimeout(function () {
            $(current_slide).find('.eachSlide').removeClass('flipOutY');
            current_slide.classList.remove('_active');
            next_slide.classList.add('_active');
            $(next_slide).find('.eachSlide').addClass('flipInY');
            next_trigger.classList.add('_active')
        }, 500)
    }, 6000)
}

function active_cover_slide(trigger, slide_id) {
    $('#cover_slide').find('.slide_navigation').find('li').removeClass('_active');
    $(trigger).closest('li').addClass('_active');
    clearInterval(cover_slide.autoPlay);
    var cover_carousel = $('#cover_slide').find('.slide_box');
    var current_slide = cover_carousel[0].children[cover_slide.current_slide];
    cover_slide.current_slide = slide_id;
    var next_slide = cover_carousel[0].children[slide_id];
    current_slide.classList.remove('_active');
    next_slide.classList.add('_active');
    autoPlay_cover();
}

function project_nav(slide_id) {
    clearInterval(project_slide.autoPlay);
    var next_slide;
    var project_carousel = $('#project_slide_wrapper').find('.project_slide');
    var current_slide = project_carousel[0].children[project_slide.current_slide];
    if (slide_id === 1) {
        if (project_slide.current_slide < 2) {
            next_slide = project_carousel[0].children[project_slide.current_slide + 1];
            project_slide.current_slide = project_slide.current_slide + 1
        } else {
            next_slide = project_carousel[0].children[0];
            project_slide.current_slide = 0
        }
    } else {
        if (project_slide.current_slide === 0) {
            next_slide = project_carousel[0].children[2];
            project_slide.current_slide = 2
        } else {
            next_slide = project_carousel[0].children[project_slide.current_slide - 1];
            project_slide.current_slide = project_slide.current_slide - 1
        }
    }
    $(current_slide).find('.eachSlide').removeClass('flipInY');
    $(current_slide).find('.eachSlide').addClass('flipOutY');
    setTimeout(function () {
        $(current_slide).find('.eachSlide').removeClass('flipOutY');
        current_slide.classList.remove('_active');
        next_slide.classList.add('_active');
        $(next_slide).find('.eachSlide').addClass('flipInY');
    }, 500)
    autoPlay_project();
}

function project_nav_trigger(trigger, slide_id) {
    $(trigger).closest('.nav_triggers').find('span').removeClass('_active');
    $(trigger).addClass('_active');
    clearInterval(project_slide.autoPlay);
    var project_carousel = $('#project_slide_wrapper').find('.project_slide');
    var current_slide = project_carousel[0].children[project_slide.current_slide];
    var next_slide = project_carousel[0].children[slide_id];
    project_slide.current_slide = slide_id;
    $(current_slide).find('.eachSlide').removeClass('flipInY');
    $(current_slide).find('.eachSlide').addClass('flipOutY');
    setTimeout(function () {
        $(current_slide).find('.eachSlide').removeClass('flipOutY');
        current_slide.classList.remove('_active');
        next_slide.classList.add('_active');
        $(next_slide).find('.eachSlide').addClass('flipInY');
    }, 500)
    autoPlay_project();
}

function toggle_menu(event, trigger) {
    var menuTab = document.getElementById('nav_menu')
    if (menuTab.classList.contains('_active')) {
        menuTab.classList.remove('_active')
    } else {
        menuTab.classList.add('_active')
        $(document).on('click', function (e) {
            if (event.target !== e.target && e.target !== $('.nav_menu')[0]) {
                console.log(e.target);
                console.log($('.nav_menu')[0]);
                menuTab.classList.remove('_active')
                $(document).off('click')
            }
        })
    }
    event.stopPropagation();
}

function open_sub(event, trigger) {
    event.preventDefault();
    var trigger = $(trigger);
    var sub_menu = trigger.siblings('.submenu')[0];
    if (sub_menu.classList.contains('bounceInDown')) {
        sub_menu.classList.remove('bounceInDown')
        sub_menu.classList.add('bounceOutUp')
        setTimeout(function () {
            sub_menu.classList.remove('_active');
        }, 500)
    } else {
        sub_menu.classList.add('_active');
        sub_menu.classList.remove('bounceOutUp')
        sub_menu.classList.add('bounceInDown')
    }
    event.stopPropagation();
}

function view_phone(event, trigger) {
    var trigger = event.currentTarget;
    trigger.parentElement.querySelector('.text-content').classList.toggle('_active');
}
