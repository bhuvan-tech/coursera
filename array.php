<?php 
    $presidents = array("bhuvan","bhanu","arun");
    echo $presidents[0];
    echo "<br>";
    //to add
    $presidents[3] = "pandu";
    foreach($presidents as $people){
    	echo "<br>";
        echo $people;
    }
    //to remove
    $presidents[3]=null;
    echo "<br>";
    echo "after removing";
    foreach($presidents as $people){
    	echo "<br>";
        echo $people;
    }
?>