  $(document).ready(function() {
    $("#getMessage").on("click", function(){ 
      var i = Math.floor(Math.random() * palabra.length);      
      $(".message").html('"'+palabra[i]+'"'); 
        $(".col-xs-3 a#tweetNow").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + palabra[i]);
    });
  });

			var palabra = [
			"El insensato que reconoce su insensatez es un sabio. Pero un insensato que se cree sabio es, en verdad, un insensato.",
			"El que no se esfuerza cuando es el momento de esforzarse; el que, aún joven y fuerte, es indolente; el que es bajo en mente y pensamiento, y perezoso, ese vago jamás encuentra el sendero hacia la sabiduría.",
			"De fácil ejecución son las cosas nocivas y dañinas. Lo bueno y beneficioso es verdaderamente difícil de hacer.",
			"Hay dos cosas, oh discípulo, que conviene evitar: Una vida de placeres; eso es bajo y vano. Una vida de mortificaciones; eso es inútil y vano.",
			"Avanzando estos tres pasos, llegarás más cerca de los dioses: Primero: Habla con verdad. Segundo: No te dejes dominar por la cólera. Tercero: Da, aunque no tengas más que muy poco que dar.",
			"Nuestras buenas y malas acciones nos siguen casi como una sombra.",
			"Como una sólida roca no se mueve con el viento, así el sabio permanece imperturbado ante la calumnia y el halago.",
			"En verdad que vivimos felices si no odiamos a aquellos que nos odian, si entre hombres que nos odian habitamos libres de rencor.",
			"Una mente irreflexiva es un pobre techo. La lluvia de la pasión inundará la casa. Pero al igual que la lluvia no puede atravesar un techo fuerte, tampoco las pasiones pueden penetrar en una mente ordenada.",
			"Sabios son aquellos que dominan el cuerpo, la palabra y la mente. Ellos son los verdaderos Maestros.",
			"Como el viajero que al volver de un largo viaje, es recibido por su familia y amigos, del mismo modo las buenas obras hechas en esta vida, nos recibirán en la otra, con la alegría de dos amigos que se vuelven a encontrar.",
			"¡Despertaos! Nunca seáis negligentes. Seguid la ley de la virtud. El que practica la virtud vive felizmente en este mundo y en el próximo.",
			"Más grande que la conquista en batalla de mil veces mil hombres es la conquista de uno mismo.",
			"El hombre que hace el mal sufre en este mundo y sufre en el otro. Sufre y se lamenta al ver todo el daño que ha hecho. Sin embargo, el hombre que hace el bien es feliz en este mundo y también lo es en el otro. En ambos mundos se regocija, viendo todo el bien que ha hecho.",
			"Del mismo modo que se custodia un pueblo fronterizo, guárdate a ti mismo, por dentro y por fuera. No dejes de vigilar ni un momento, si no quieres que la oscuridad te venza.",
			"La vigilancia es el sendero hacia la inmortalidad, la negligencia es el camino hacia la muerte. Aquellos que permanecen vigilantes nunca mueren, los negligentes son como si ya estuvieran muertos.",
			"El perfume de las flores no va contra el viento. Ni el del sándalo ni el de la rosa o el jazmín. Sin embargo, el perfume del hombre virtuoso se extiende por todas partes y en todas direcciones.",
			"Es fácil ver las faltas de los demás, pero ¡qué difícil es ver las nuestras propias! Exhibimos las faltas de los demás como el viento esparce la paja, mientras ocultamos las nuestras como el jugador tramposo esconde sus dados.",
			"El hombre que tiene miedo, busca refugio en los montes, en los bosques sagrados o en los templos. Sin embargo tales refugios no sirven, pues allí donde vaya, sus pasiones y sus sufrimientos lo acompañarán.",
			"Al igual que la leche fresca no se vuelve agria de golpe, tampoco los frutos de las malas acciones llegan de repente. Su malicia permanece escondida, como el fuego entre las brasas.",
			"Tu peor enemigo no te puede dañar tanto como tus propios pensamientos. Ni tu padre, ni tu madre, ni tu amigo más querido, te pueden ayudar tanto como tu propia mente disciplinada.",
			"El que hace acequias controla el agua, el que fabrica flechas las hace derechas, el carpintero domina la madera y el sabio domina su mente.",
			"Disfruta vigilando, cuida tu propia mente, sácate a ti mismo del camino de la miseria, como se hace con el elefante que se ha metido en el barro.",
			"Por pequeño que sea un deseo, te mantiene atado, como el ternero a la vaca.",
			"No trates de cambiar tu deber por el de otro, ni descuides tu trabajo por hacer el de otro. No importa lo noble que éste pueda ser. Estás aquí para descubrir tu propio camino y entregarte a él en cuerpo y alma.",
			"El verdadero buscador no se identifica ni con el nombre ni con la forma, no se lamenta por lo que no tiene ni por lo que pudo haber sido.",
			"Domina tus palabras, domina tus pensamientos, no hagas daño a nadie. Sigue fielmente estas indicaciones y avanzarás en el camino de los sabios.",
			"¿Para qué hacer cosas de las que luego tendrás que arrepentirte? No es necesario vivir con tantas lágrimas. Haz sólo lo que esté bien, aquello de lo que no tengas que arrepentirte, aquello cuyos dulces frutos recogerás con alegría.",
			"Apresuraos en hacer el bien; refrenad vuestra mente hacia el mal, ya que quienquiera que es lento en hacer el bien, se recrea en el mal.",
			"Todos los estados encuentran su origen en la mente. La mente es su fundamento y son creaciones de la mente. Si uno habla o actúa con un pensamiento impuro, entonces el sufrimiento le sigue de la misma manera que la rueda sigue la pezuña del buey.",
			"Todos los estados encuentran su origen en la mente. La mente es su fundamento y son creaciones de la mente. Si uno habla o actúa con un pensamiento puro, entonces la felicidad le sigue como una sombra que jamás le abandona.",
			"La meta principal es la autorrealización intima del Ser, no debe descuidarse por las metas secundarias, y el mejor servicio que puede hacerse a los demás es la liberación de uno mismo.",
			"La mayoría de los seres humanos, son como hojas que caen de los árboles, que vuelan y revolotean por el aire, vacilan y por último se precipitan en el suelo. Otros, por el contrario, casi son como estrellas; siguen su camino fijo, ningún viento los alcanza, pues llevan en su interior su ley y su meta.",
			"Como la lluvia penetra en una casa con mal tejado, así el deseo penetra en el corazón mal entrenado.",
			"No ocupéis la mente con necedades y no malgastéis el tiempo en cosas vanas.",
			"El odio nunca se extingue por el odio en este mundo; solamente se apaga a través del amor. Tal es una antigua ley eterna.",
			"Como una bella flor, llena de colorido pero sin perfume, así es estéril la palabra hermosa del que no actúa conforme a ello. Como una bella flor, llena de colorido y con perfume, así es fecunda la palabra hermosa del que actúa conforme a ella."
			];
