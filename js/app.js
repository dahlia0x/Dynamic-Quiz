/**
 *
 * Created by doh on 4/16/2015.
 */
$(document).ready(function(){
    "use strict";

    var username;
    username = $('#inputUserName').val();
    var btnStart = document.getElementById('btnStart');
    var lblUserName;

    btnStart.onclick = function(){
        lblUserName = $('#lblUserName').val(username);
    };

    });