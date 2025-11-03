$(document).ready(function() {
    $("#main_form").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
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
            dob: {
                required: true
            },
            gender: {
                required: true
            },
            website: {
                required: true,
                url: true
            },
            address: {
                required: true
            },
            country: {
                required: true
            },
            city: {
                required: true
            },
            experience: {
                required: true,
                number: true,
                min: 1
            }
        },

        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: "Enter a valid email address",
            password: "Password must be at least 6 characters",
            phone: "Format: +92-XXX-XXXXXXX",
            dob: "Please select your date of birth",
            gender: "Select your gender",
            website: "Enter a valid URL (e.g. https://example.com)",
            address: "Enter your address",
            country: "Select your country",
            city: "Enter your city name",
            experience: "Enter valid experience (years)"
        },

        errorClass: "is-invalid",
        validClass: "is-valid",
        errorPlacement: function(error, element) {
            error.addClass("text-danger d-block mt-1");
            error.insertAfter(element);
        },

        submitHandler: function(form) {
            alert("Form Submitted Successfully!");
        }
    });
});