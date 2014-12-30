 <?php
    $rawxml = file_get_contents('http://api.npr.org/stations?lat='.$_GET['lat'].'&lon='.$_GET['lon'].'&apiKey=MDEwNjA4MTIxMDEzNTYwNjg2NTM1YmNhOQ001');
    $xml=simplexml_load_string($rawxml);

    foreach($xml->station as $nprstation) {
         echo $nprstation->frequency . " " . $nprstation->band . "??" . $nprstation->network . ";";
    }

?>
