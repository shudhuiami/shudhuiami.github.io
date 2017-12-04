var current_section = 0;
function selectSection(selection_id) {
    var sections = document.getElementById('main_wrapper').children;
    var triggers = document.getElementById('nav_triggers').children;
    sections[current_section].classList.remove('_active');
    sections[current_section].classList.remove('fadeInDown');
    sections[current_section].classList.remove('fadeInUp');
    triggers[current_section].classList.remove('_active');
    if ((selection_id - 1) > current_section){
        sections[current_section].classList.add('fadeOutDown');
        sections[current_section].classList.add('_out');
        setTimeout(function () {
            sections[selection_id - 1].classList.add('fadeInDown');
            sections[selection_id - 1].classList.add('_active');
            triggers[selection_id - 1].classList.add('_active');
        },200);
        setTimeout(function () {
            sections[current_section].classList.remove('_out');
            sections[current_section].classList.remove('fadeOutDown');
            current_section = selection_id - 1;
        },500);
    }else if ((selection_id - 1) < current_section){
        sections[current_section].classList.add('fadeOutUp');
        sections[current_section].classList.add('_out');
        setTimeout(function () {
            sections[selection_id - 1].classList.add('fadeInUp');
            sections[selection_id - 1].classList.add('_active');
            triggers[selection_id - 1].classList.add('_active');
        },200);
        setTimeout(function () {
            sections[current_section].classList.remove('_out');
            sections[current_section].classList.remove('fadeOutUp');
            current_section = selection_id - 1;
        },500);
    }
}
function nextSection() {
    var sections = document.getElementById('main_wrapper').children;
    if (current_section < (sections.length - 1)){
        selectSection(current_section + 2)
    }
}
function prevSection() {
    if (current_section > 0){
        selectSection(current_section)
    }
}

Skype.ui({
    "name": "chat",
    "element": "SkypeButton_Call_ridwanul.hafiz_1",
    "participants": ["ridwanul.hafiz"]
});

function visit(url) {
    window.open(url, '_blank');
}
