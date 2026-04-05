<?php
    require("../backend/database.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link rel="stylesheet" href="../mainSite/darkMode.css">
</head>
<body>
    <h1>FEEDBACK FORM</h1>
<div style="justify-content: center; align-content: center;">    
<div class="centerBox" style="align-content: center;">
    <form action="Feedback.php" method="post">
    <p>Name:</p><br>
    <input type="text" name="Name"><br>
    <p>Email:</p><br>
    <input type="text" name="Email"><br>
    <p>Feedback:</p><br>
    <input type="text" name="Feedback" style="width:25em; height: 15em; text-align: left; vertical-align: text-top;"><br>
    <input type="submit" name="Send" value="Send" class="freebutton">
    </form>
    <p>I am sorry that this form is not the best, I just wrote it and php is very confusing. Please write any feedback you have about the website or the photos here.</p>
            <a href="../mainSite/index.html">
        <button>Take me home</button>
        </a>
</div>
</div>
</body>
</html>

<?php
    
    if(isset($_POST["Send"])){
        $name = filter_input(INPUT_POST, "Name", FILTER_SANITIZE_SPECIAL_CHARS);
        $feedback = filter_input(INPUT_POST, "Feedback", FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_input(INPUT_POST, "Email", FILTER_SANITIZE_EMAIL);
        $IPADDR = $_SERVER['REMOTE_ADDR'];


        $stmt = $conn->prepare("INSERT INTO FeedbackTable (Name, Email, FeedbackText, IP) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $feedback, $IPADDR);
        $stmt->execute();

    if (mysqli_query($conn, $sql)) {
    echo "Data inserted!";
    } else {
    echo "Error: " . mysqli_error($conn);
    }

    }


?>