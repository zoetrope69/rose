<?php

	// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		// Get the form fields and remove whitespace.
		$name = strip_tags(trim($_POST["client-name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
		$organisation = strip_tags(trim($_POST["client-organisation"]));
		
		$email = filter_var(trim($_POST["client-email"]), FILTER_SANITIZE_EMAIL);
		$phone = filter_var(trim($_POST["client-phone"]), FILTER_SANITIZE_NUMBER_INT);
		
		$budget = strip_tags(trim($_POST["project-budget"]));
		$idea = trim($_POST["project-idea"]);

		// Check that data was sent to the mailer.
		if(empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($idea)){
			// Set a 400 (bad request) response code and exit.
			http_response_code(400);
			echo "$name $email $idea Oops! There was a problem with your submission. Please complete the form and try again.";
			exit;
		}

		// Set the recipient email address.
		$recipient = "hello@rosedigital.co.uk";

		// Set the email subject.
		$subject = "Email from name";
		if($organisation){
			$subject .= " at $organisation";
		}

		// Build the email content.
		$email_content = "";
		$email_content .= "Name: $name\n";
		$email_content .= "Organisation: $organisation\n";
		$email_content .= "Email: $email\n\n";
		$email_content .= "Phone: $phone\n\n";
		$email_content .= "Budget: $budget\n";
		$email_content .= "Idea: $idea\n\n";

		// Build the email headers.
		$email_headers = "From: $name <$email>";

		// Send the email.
		if(mail($recipient, $subject, $email_content, $email_headers)){
			// Set a 200 (okay) response code.
			http_response_code(200);
			echo "OK cool, we've got your message. We'll respond ASAP!";
		}else{
			// Set a 500 (internal server error) response code.
			http_response_code(500);
			echo "Oops, something went wrong. Try again? If it's still broken <a href='mailto:hello@rosedigital.co.uk'>just email us normally&hellip;</a>";
		}

	}else{
		// Not a POST request, set a 403 (forbidden) response code.
		http_response_code(403);
		echo "There was a problem with your submission, please try again.";
	}

?>