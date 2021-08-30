<?php 

    $db_hostname="127.0.0.1";
    $db_username="root";
    $db_password="";
    $db_name="test";

    $conn=mysqli_connect($db_hostname,$db_username,$db_password,$db_name);
    if(!$conn){
        echo "Connection could not happen: ".mysqli_connect_error();
        exit;
    }

    $email=$_POST['email'];
    $password=$_POST['password'];
    $name=$_POST['name'];
    $id=$_POST['id'];

    $sql="INSERT INTO users(name,password,email,id) VALUES('$name', '$password', '$email', '$id ' )";

    $result=mysqli_query($conn,$sql);

    if(!$result){
        echo "Error: " .mysqli_error($conn);
        exit;
    }

    mysqli_close($conn);
    
    
?>