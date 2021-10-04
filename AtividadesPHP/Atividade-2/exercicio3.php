<?php
/*
3 - Criar um algoritmos que entre com uma palavra e imprima conforme o exemplo
◦ Palavra: sonho
◦ SONHO
◦ SONHO SONHO
◦ SONHO SONHO SONHO
◦ SONHO SONHO SONHO SONHO
*/

for ($i = 1; $i < 10; $i++) {
    for ($j = $i; $j >= 1; $j--) {
        echo "SONHO ";
    }
    echo "\n";
}
echo "\n";
