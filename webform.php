<?php
    $message_sent = false;
if(isset($_POST["email"]) && $_POST["email"] != "") {
   
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) ){

        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        $to = "Sebastianvillumsen@gmail.com";
        $body ="";
        
        $body .= "From: ".$name. "\r\n";
        $body .= "Email: ".$email. "\r\n";
        $body .= "Message: ".$message. "\r\n";
        
        //mail($to,$body);

        $message_sent = true;
    }
}

?>
