$(document).ready(function() {
    $("#main_form").validate({
        rules: {
            firstname: {
                required: true,
            },
            lastname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            phone: {
                required: true
            },
            address: {
                required: true
            },
        },

        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: "Enter a valid email address",
            password: "Password must be at least 6 characters",
            phone: "Format: +92-XXX-XXXXXXX",
            address: "Enter your address"
        },

        errorClass: "is-invalid",
        // validClass: "is-valid",
        errorPlacement: function(error, element) {
            error.addClass("text-danger d-block mt-1");
            error.insertAfter(element);
        },

        submitHandler: function(form) {
            alert("Form Submitted Successfully!");
        }
    });
});
