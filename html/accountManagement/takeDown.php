<?php
    require("../backend/database.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Takedown</title>
    <link rel="stylesheet" href="../mainSite/darkMode.css">
</head>
<body>
    <h1>Takedown Form</h1>
<div style="justify-content: center; align-content: center;">    
<div class="centerBox" style="align-content: center;">
    <form action="takeDown.php" method="post">
    
    <p>First Name:</p><br>
    <input type="text" name="FirstName"><br>
    
    <p>Last Name:</p><br>
    <input type="text" name="LastName"><br>
    
    <p>Event Day (Example: Crush Cancer):</p><br>
    <input type="text" name="EventDay" style="width:25em; text-align: left; vertical-align: text-top;"><br>
    
    <p>Event (Example: 50 Hurdles):</p><br>
    <input type="text" name="Event1" style="width:25em; text-align: left; vertical-align: text-top;"><br>
    
    <input type="submit" name="Send" value="Send" class="freebutton">
    </form>
        <a href="../mainSite/index.html">
        <br>
        <br>
        <button>Take me home</button>
        </a>
</div>
</div>
</body>
</html>

<?php
    
    if(isset($_POST["Send"])){
        $FirstName = filter_input(INPUT_POST, "FirstName", FILTER_SANITIZE_SPECIAL_CHARS);
        $LastName = filter_input(INPUT_POST, "LastName", FILTER_SANITIZE_SPECIAL_CHARS);
        $EventDay = filter_input(INPUT_POST, "EventDay", FILTER_SANITIZE_SPECIAL_CHARS);
        $Event1 =   filter_input(INPUT_POST, "Event1", FILTER_SANITIZE_SPECIAL_CHARS);


        $stmt = $conn->prepare("INSERT INTO Takedown (LastName, FirstName, EventDay, Event1) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $LastName, $FirstName, $EventDay, $Event1);
        $stmt->execute();

    if (mysqli_query($conn, $sql)) {
    echo "Data inserted!";
    } else {
    echo "Error: " . mysqli_error($conn);
    }

    }


?>