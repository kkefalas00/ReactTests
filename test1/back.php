<?php
$con=mysqli_connect("","","","");

$q=mysqli_query($con,"select * from phones");
$A=[];

while($r=mysqli_fetch_assoc($q)) $A[]=$r;

echo json_encode($A);




?>