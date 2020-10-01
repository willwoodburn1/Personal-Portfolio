$(document).ready(function () {

    var projectDropdown = $("#projectOneDropdownLink").on("click", function () {

        var projectURL = "./Project-1-Screenshot.png";

        var container = $("#imageDisplay")
        container.empty();


        var projectImage = new Image();
        projectImage.src = projectURL;
        projectImage.classList.add("newImage");
        $('#imageDisplay').append(projectImage);

        // $("#carouselAndText").remove();




    })


    var assignmentOneDropdown = $("#assignmentOneDropdownLink").on("click", function () {

        var assignmentOneURL = "./Activity-6-Screenshot.png";

        var container = $("#imageDisplay")
        container.empty();

        var assignmentOneImage = new Image();
        assignmentOneImage.src = assignmentOneURL;
        assignmentOneImage.classList.add("newImage");
        $('#imageDisplay').append(assignmentOneImage);

        // $("#carouselAndText").remove();

    })

    var assignmentTwoDropdown = $("#assignmentTwoDropdownLink").on("click", function () {

        var assignmentTwoURL = "./Activity-3-Screenshot.png";

        var container = $("#imageDisplay")
        container.empty();

        var assignmentTwoImage = new Image();
        assignmentTwoImage.src = assignmentTwoURL;
        assignmentTwoImage.classList.add("newImage");
        $('#imageDisplay').append(assignmentTwoImage);

        // $("#carouselAndText").remove();

    })
















});