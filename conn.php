<?php  
$servername = "127.0.0.1";
$username = "bn_processmaker";
$password = "cb340e3f4e";
$dbname = "bitnami_pm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT count(APP_NUMBER) as countofcases, app_cache_view.USR_UID as userId, users.USR_USERNAME as userName FROM `app_cache_view`, `users` where app_cache_view.USR_UID = users.USR_UID group by app_cache_view.USR_UID";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $arr = array();
    $i=0;
    while($row = $result->fetch_assoc()) {
        $arr[$i]['userId'] = $row['userId'];
        $arr[$i]['countofcases'] = $row['countofcases'];
        $arr[$i]['userName'] = $row['userName'];
        $i++;
    }
} else {
    echo "0 results";
}
echo json_encode($arr, true);exit;

$conn->close();
?>