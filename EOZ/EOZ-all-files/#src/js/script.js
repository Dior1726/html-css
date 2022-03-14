
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .header-area').toggleClass('active');
    });

    $('.search-hide').click(function(event) {
        $('.search__block-hide, .arrowdown').toggleClass('active');
    });

    window.addEventListener("scroll", function () {
        var menu = document.querySelector('.header-area');
        var winWidth = document.documentElement.clientWidth;
        if (winWidth > 770) {
            menu.classList.toggle('sticky', window.scrollY > 0);
        }
    });



    

    $('.contact__us').click(function (event) {
        $('.modal-area').css({
            'display' : 'block'
        })
    });

    $('.close__icon').click(function (event) {
        $('.modal-area').css({
            'display': 'none'
        })
    });

});


$('select.dropdown').each(function () {

    var dropdown = $('<div/>').addClass('dropdown selectDropdown');

    $(this).wrap(dropdown);

    var label = $('<span />').text($(this).attr('placeholder')).insertAfter($(this));
    var list = $('<ul />');

    $(this).find('option').each(function () {
        list.append($('<li />').append($('<a />').text($(this).text())));
    });

    list.insertAfter($(this));

    if ($(this).find('option:selected').length) {
        label.text($(this).find('option:selected').text());
        list.find('li:contains(' + $(this).find('option:selected').text() + ')').addClass('active');
        $(this).parent().addClass('filled');
    }

});

$(document).on('click touch', '.selectDropdown ul li a', function (e) {
    e.preventDefault();
    var dropdown = $(this).parent().parent().parent();
    var active = $(this).parent().hasClass('active');
    var label = active ? dropdown.find('select').attr('placeholder') : $(this).text();

    dropdown.find('option').prop('selected', false);
    dropdown.find('ul li').removeClass('active');

    dropdown.toggleClass('filled', !active);
    dropdown.children('span').text(label);

    if (!active) {
        dropdown.find('option:contains(' + $(this).text() + ')').prop('selected', true);
        $(this).parent().addClass('active');
    }

    dropdown.removeClass('open');
});

$('.dropdown > span').on('click touch', function (e) {
    var self = $(this).parent();
    self.toggleClass('open');
});

$(document).on('click touch', function (e) {
    var dropdown = $('.dropdown');
    if (dropdown !== e.target && !dropdown.has(e.target).length) {
        dropdown.removeClass('open');
    }
});

// light
$('.switch input').on('change', function (e) {
    $('.dropdown, body').toggleClass('light', $(this).is(':checked'));
});


$('.card-header').click(function (event) {
    $(this).toggleClass('active');
    $(this).children('.icon__block').toggleClass('active');
    $(this).children('.icon__block').children('.icofont-simple-down').toggleClass('active');
});

