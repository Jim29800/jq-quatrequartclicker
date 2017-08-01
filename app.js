$(document).ready(function () {
	//votre code
	var count = 0;
	var message = [
	" allez tuer des pinguins par exemple",
	" supprimer ubuntu et installer un windows",
	" faire un pile ou face gagnant avec votre voisin"
	]
	$(".cake").click(function () {
		count++;
		var alea = Math.floor(Math.random() * message.length);
		//console.log(alea)
		$(".counter").html(count)
		if (count%20 === 0) {
						alert("Trouvez une activité plus productive: " + message[alea])		
		}
	})
});