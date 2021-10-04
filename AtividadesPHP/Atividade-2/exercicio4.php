<?php
/*
4 - Crie um algoritmo que mostre os valores 
de 1 a 10 na tela e a frente de cada número, imprima: PAR ou ÍMPAR
*/

for ($i = 1; $i < 10; $i++) {
    if ($i % 2 == 0) {
        echo $i . ' par' . "\n";
    } else {
        echo $i . ' ímpar' . "\n";
    }
}
