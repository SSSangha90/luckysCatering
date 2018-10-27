<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
	$guests = trim($_POST["guests"]);
	$number = trim($_POST["number"]);
	$postcode = trim($_POST["postcode"]);

    // Check the data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.luckystaba.com/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "hello@luckystaba.com";

    // Set the email subject.
    $subject = "New enquiry from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
	$email_content .= "Number: $number\n";
    $email_content .= "Email: $email\n";
	$email_content .= "Postcode: $postcode\n";
	$email_content .= "Guests: $guests\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.luckystaba.com/index.php?success=1#form");

?>