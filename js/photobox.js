import {init, load} from "./gallery.js";

$(function () {
    init(1);
    $('#load').on('click', function () {
        load();
    });
});
