<?php
/*
    1 - 2 - Crie um código que mostre os valores de 
    1 a 20 na tela e no final, mostre a soma dos valores.*/

for ($i = 1; $i < 21; $i++) {
    echo $i . "\n";
}
$aux = 0;
for ($i = 1; $i < 21; $i++) {
    $aux += $i;
}

echo "Soma: " . $aux;
