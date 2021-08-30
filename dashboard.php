<?php 
session_start();
if(isset($_SESSION['user_id'])){
    $user_id=$_SESSION['id'];
    $email=$_SESSION['email'];
}
   
    echo "hey " .$user_id;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="dashboard.css">
</head>
<body>
    <div class="head sticky-top">
        <div class="logo">
            <img src="img/logo.png" class="imglogo">
        </div>
        <div class="navi">
            <div class="sign">
                <a href="#">
                    <i class="fas fa-user"></i>Sign Up
                </a>
            </div>
            <div class="sign">
                <a href="#">
                    <i class="fas fa-sign-in-alt"></i>Login
                </a>
            </div>
        </div>
    </div>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
                <a class="dashboard" href="dashboard.html">Dashboard</a>
            </li>        
        </ol>
    </nav>

    <div class="main">
        <div class="profile"><h1>My Profile</h1></div>
        <div class="icon-profile">
            <i class="fas fa-user"></i>
            <div class="user-info">
                <h2>Bhuvan Y E</h2>
                <p>name@email.com<br>Place<br>Internshala</p>
            </div>
        </div>
    </div>

    <footer class="footer-main">
        <div class="footer-content">
            <ul>
                <li>
                    <a href="#">PG in Delhi</a>
                </li>
                <li>
                    <a href="#">PG in Mumbai</a>
                </li>
                <li>
                    <a href="#">PG in Bengaluru</a>
                </li>
                <li>
                    <a href="#">PG in Hyderabad</a>
                </li>
            </ul>
        </div>
        
        <div class="footer-bottom">&copy; 2020 Copyright reserved for PGLife</div>
</body>
</html>

<?php
session_destroy();
?>