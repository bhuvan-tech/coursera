<?php
    echo "hellophp ";
    $a=10;
    $_dr=2.8;
    $er=2.8;
    $txt123="many";
    if($er=$_dr){
        $a += 1.3;
        echo $a;
    }
    if($a>$_dr){
        echo " first is greater ";
    }
    elseif($a=$_dr){
        echo "both are equal";
    }
    else{
        echo "second is equal";
    }
?>