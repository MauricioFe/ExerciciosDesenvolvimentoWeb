<?php
/*
    1 - Atribua um nome, sexo e idade de uma pessoa. Se a pessoa for do sexo 
    feminino e tiver menos que 25 anos, imprimir nome e a a mensagem: ACEITA. 
    Caso contrário, imprimir nome e a mensagem: NÃO ACEITA.*/
$nome = 'Fernanda Leal';
$sexo = 'F';
$idade = 20;

if ($sexo == 'F' && $idade < 25) {
    echo $nome . ' ACEITA';
} else {
    echo $nome . ' NÃO ACEITA';
}
