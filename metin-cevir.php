<?php
$cevrilecek_dil=$_REQUEST["cevrilecek_dil"];
$cevrilen_dil=$_REQUEST["cevrilen_dil"];
$cevrilecek_metin=$_REQUEST["text"];
$url3="https://translate.googleapis.com/translate_a/single?client=gtx&sl=".$cevrilecek_dil."&tl=".$cevrilen_dil."&dt=t&q=".urlencode($cevrilecek_metin);
$json3 = file_get_contents($url3);
$json3 = json_decode($json3, true);
print_r($json3[0][0][0]);
?>