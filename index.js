$(document).ready(() => {
    $("span").hide();
    $("#yourweb").val("http://");
    
  });

// university name validation
$("#university").on("change", () => {
    let value = $("#university").val();
    if (value === "" || value === null) {
        $("#universityError").text("University name cannot be blank");
      } else if  (value.length > 20 ) {
        $("#universityError").text("University name cannot be more than 20 letters");
        $("#universityError").show();
      } else if (/[^A-Za-z ]/.test(value)) {
        $("#universityError").text("connot contain number or special character");
        $("#universityError").show();
      } else {
        $("#universityError").hide();  
    }
})

// institute name validation
$("#institute").on("change", () => {
    let value = $("#institute").val();
    if (value === "" || value === null) {
        $("#instituteError").text("Institute name cannot be blank");
      } else if  (value.length > 20 ) {
        $("#instituteError").text("Institute name cannot be more than 20 letters");
        $("#instituteError").show();
      } else if (/[^A-Za-z ]/.test(value)) {
        $("#instituteError").text("connot contain number or special character");
        $("#instituteError").show();
      } else {
        $("#instituteError").hide();  
    }
})

// function for diffrent branch degree
function returnArr(str) {
    if(str == "arr1")
        return ["a","b","c"];
    if(str == "arr2")
        return ["e","f","g"];
    if(str == "arr3")
        return ["h","i","j"];
}
// Function for degree option
function createOption(id) {
     $('#degrees').children().remove().end().append('<option value="" disabled selected>--select--</option>') ;
    let arr = returnArr('arr'+id);
    for(let i=0; i<3; i++) {
        $('<option>').val(arr[i]).text(arr[i]).appendTo('#degrees');
    }
}

$("#branch").change(function() {
    let end = this.value;
    createOption(end);
});

// // branch validation 
function validBranch() {
    let end = $("#branch").val();
    if (end = "" || end == null){
            $("#branchError").text("Branch can not be empty");
            $("#branchError").show();
        } else {
            $("#branchError").hide();
        }
}
$("#branch").on("change", () => {
    validBranch();
})

// degree validation
function validDegree() {
    let end = $("#degrees").val();
    let send = $('input[name="status"]:checked').val();
    if (end = "" || end == null){
        $("#degreeError").text("degree can not be empty");
        $("#degreeError").show();
    } else if(send == undefined) {
        $("#degreeError").text("Please select the status");
    }else{
        $("#degreeError").hide();
    }
}
$("#degree").on("change", () => {
    validDegree();

})


// status validation
$("input[name='status']").on("change", () => {
    validDegree();
})

// th semester validation 
$("#semester").on("change", () => {
    let value = parseInt($("#semester").val());
    if(value <= 0) {
        $("#semesterError").text(" Semester cannot be zero or negative");
        $("#semesterError").show();
    } else if(value > 12) {
            $("#semesterError").text("Semester cannot be more than 12 semester");
            $("#semesterError").show();
    } else {
        $("#semesterError").hide();
    }
    
})
// upto validation
$("#upto").on("change", () => {
    let value = parseInt($("#upto").val());
    if(value <= 0) {
        $("#uptoError").text(" upto cannot be zero or negative");
        $("#uptoError").show();
    } else if(value > 10) {
            $("#uptoError").text("upto cannot be more than 10 upto");
            $("#uptoError").show();
    } else {
        $("#uptoError").hide();
    }
    
})
// experience validation
$("#experience").on("change", () => {
    let value = parseInt($("#experience").val());
    if(value < 0) {
        $("#experienceError").text("Experience should be positive number");
        $("#experienceError").show();
    } else if(value > 30) {
            $("#experienceError").text("Experience cannot be more than 30 years");
            $("#experienceError").show();
    } else {
        $("#experienceError").hide();
    }
    
})
// url validation
function isUrlValid(url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}
// url validation
$("#yourweb").on("change", () => {
    const value = $("#yourweb").val();
    if(value =="" || value == null) {
        $("#yourwebError").text("Website field cannot be empty");
        $("#yourwebError").show();
    }
    else if(!isUrlValid(value)) {
        $("#yourwebError").text("Please enter valid url");
        $("#yourwebError").show();
    } else {
        $("#yourwebError").hide();
    }
})


// Checking input donot have been enter
$('#submit').click((e) => {
    e.preventDefault();
    $('input').each((index, value) => {
      if($(value).val().trim() === '' || $(value).val().trim() === null) {
        let tag = 'span'+index;
        $('.'+tag).text('This field cannot be empty');
        $('.'+tag).show();
      }
    });
    // handle for select option error
    validBranch();
    validDegree();
  });
  