<?php

if(isset($_POST['email'])) {
    // $email_to = "sunroof@ubtanet.com";
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $email_to = "brettz.starks@gmail.com";
    $email_subject = "New Request for Services via SunshineRoofUtah.com";

    function died($error) {
        // your error code can go here
        echo "<h2>Sorry, but there were error(s) found with the form you submitted. </h2>";
        echo $error."<br />";
        $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
        echo "<input type='button' value='Go Back' onclick='history.back(-1)' /><br />";
        die();
    }

    $full_name = $_POST['full_name']; // required
    $business_name = $_POST['business_name']; // not required
    $customer_email = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$customer_email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$full_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }

  if(strlen($comments) < 2) {
    $error_message .= 'Please describe your request inside of the request field.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }

    $email_message = "New quote request received from SunshineRoofUtah.com:<br /><br />";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "<b>Name: </b>".clean_string($full_name)."<br>";
    $email_message .= "<b>Company: </b>".clean_string($business_name)."<br>";
    $email_message .= "<b>Email: </b>".clean_string($customer_email)."<br>";
    $email_message .= "<b>Telephone: </b>".clean_string($telephone)."<br>";
    $email_message .= "<b>Comments: </b>".clean_string($comments)."<br>";





// create email headers

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: contact@sunshineroofutah.com";
$headers .= "Reply-To: $customer_email";

@mail($email_to, $email_subject, $email_message, $headers);


$response_array['status'] = 'success';
$response_array['from'] = $email_to;

echo json_encode($response_array);
echo json_encode($email_to);
header($response_array);
return $email_to;

?>
