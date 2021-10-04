<?php
$teste = "Php eh a pior linguagem que jah estudei rs";
echo "Minusculo: " . strtolower($teste) . "\n";
echo "Maiusculo: " . strtoupper($teste) . "\n";
echo "Primeira Letra: " . $teste[0] . "\n";
$bacon =  preg_split('/\s+/', $teste);
for ($i = 0; $i < count($bacon); $i++) {
    echo "Primeira Letra todas palavras: " . substr($bacon[$i], 0,1) . "\n";
}
$arr1 = str_split($teste);
echo "Quantidade: ".count($arr1);