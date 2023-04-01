var Mapas = ["Lotus", "Pearl", "Fracture", "Breeze", "Icebox", "Bind", "Haven", "Split", "Ascent"];

var Agentes = ["Gekko", "Harbor", "Fade", "Neon", "Chamber", "KAY/O", "Astra", "Yoru", "Skye", "Raze", "Jett", "Omen", "Breach", "Killjoy", "Reyna", "Cypher", "Viper", "Sova", "Sage", "Phoenix", "Brimstone"];



// lado esquerdo

function corumsecum(){
    document.getElementById("sectionagentes").style.backgroundColor='#1B2D40';
}

function cordoissecum(){
    document.getElementById("sectionagentes").style.backgroundColor='#0F1923';
}

function btnesquerda(){
    var loopagentes = document.getElementById("loopagentes");
    loopagentes.innerHTML = Mapas;

}
// fim do lado esquerdo

function corumsecdois(){
    document.getElementById("sectionmapas").style.backgroundColor='#1B2D40';;
}

function cordoissecdois(){
    document.getElementById("sectionmapas").style.backgroundColor='#0F1923';
}

function btndireita(){
    var loopmapas = document.getElementById("loopmapas");
    loopmapas.innerHTML = Mapas;
}