class DepuradorDeshabilitado {
  modos;
  diccionario_modos;

  constructor() {
    this.modos = [];
    this.diccionario_modos = {};
  }

  actualizar() {
    for (var i=0; i<this.modos.length; i++) {
      this.modos[i].actualizar();
    }
  }

  definir_modos(modos) {
    modos = modos || {};
    modos.puntos_de_control = modos.puntos_de_control || false;
    modos.radios_de_colision = modos.radios_de_colision || false;
    modos.fisica = modos.fisica || false;
    modos.area = modos.area || false;
    modos.posiciones = modos.posiciones || false;

    this.eliminar_todos_los_modos();

    if (modos.radios_de_colision)
      this.modos.push(new ModoRadiosDeColision());

    if (modos.puntos_de_control)
      this.modos.push(new ModoPuntosDeControl());

    if (modos.fisica)
      this.modos.push(new ModoFisica());

    if (modos.area)
      this.modos.push(new ModoArea());
		
    if (modos.posiciones)
      this.modos.push(new ModoPosicion());

    this.diccionario_modos = modos;
  }

  eliminar_todos_los_modos() {
    for (var i=0; i<this.modos.length; i++)
      this.modos[i].eliminar();

    this.modos = [];
  }

  obtener_modos() {
    return this.diccionario_modos;
  }
}



class ModoRadiosDeColision {
  shape;
  container;

  constructor() {
    this.container = new createjs.Container();

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    pilas.escena_actual().stage.addChild(this.container)
  }

  eliminar() {
    pilas.escena_actual().stage.removeChild(this.container);
  }

  actualizar() {
    var escena = pilas.escena_actual();
    this.shape.graphics.clear();

    for (var i=0; i<escena.actores.length; i++) {
      var actor = escena.actores[i];
      var posicion = escena.obtener_posicion_pantalla(actor.x, actor.y);

      this.shape.graphics.beginStroke("#FFF").drawCircle(posicion.x, posicion.y, actor.radio_de_colision).endStroke();

    }
  }
}

class ModoArea {
  shape;
  container;

  constructor() {
    this.container = new createjs.Container();

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    pilas.escena_actual().stage.addChild(this.container);
  }

  eliminar() {
    pilas.escena_actual().stage.removeChild(this.container);
  }

  actualizar() {
    var escena = pilas.escena_actual();
    this.shape.graphics.clear();

    for(var i=0;i<escena.actores.length;i++) {
      var actor = escena.actores[i];
      var posicion = escena.obtener_posicion_pantalla(actor.x, actor.y);

      this.shape.graphics.beginStroke("#FFF").drawRect(posicion.x-actor.ancho/2, 
        posicion.y-actor.alto/2, actor.ancho, actor.alto).endStroke();
    }
  }
}

class ModoPuntosDeControl {
  shape;
  container;

  constructor() {
    this.container = new createjs.Container();

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    pilas.escena_actual().stage.addChild(this.container);
  }

  eliminar() {
    pilas.escena_actual().stage.removeChild(this.container);
  }

  actualizar() {
    var escena = pilas.escena_actual();
    this.shape.graphics.clear();

    for (var i=0; i<escena.actores.length; i++) {
      var actor = escena.actores[i];
      var posicion = escena.obtener_posicion_pantalla(actor.x, actor.y);
      var size = 3;

      // Dibuja una cruz
      this.shape.graphics.beginStroke("#ffffff").moveTo(posicion.x - size, posicion.y - size).lineTo(posicion.x + size, posicion.y + size).endStroke();
      this.shape.graphics.beginStroke("#ffffff").moveTo(posicion.x - size, posicion.y + size).lineTo(posicion.x + size, posicion.y - size).endStroke();
    }
  }

}


class ModoPosicion {
  shape;
  container;
  text_coordenada;
  eje;

  constructor() {
    this.container = new createjs.Container();

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    this.text_coordenada = new createjs.Text("Posición del mouse: x=12 y=33", "12px Arial", "white");
    this.text_coordenada.y = 920/2; //TODO: Tamaño decanvas 640*480 
    this.text_coordenada.x = 900/2;
    this.container.addChild(this.text_coordenada);
    this.eje = new pilas.actores.Eje();
		this.sobre_escribir_dibujado();


    pilas.escena_actual().stage.addChild(this.container);
  }

	private sobre_escribir_dibujado() {
		
		var anterior_draw = this.shape.graphics.draw;
		var g = this.shape.graphics;
		this.shape.graphics.actores = [];
	
		this.shape.graphics.draw = function(a) {
	
			a.fillStyle = "white";
	
			for (var i=0; i<this.actores.length; i++) {
				var actor = this.escena.actores[i];
				var posicion = this.escena.obtener_posicion_pantalla(actor.x, actor.y);
	
				a.fillText(" (" + Math.floor(actor.x) + ", " + Math.floor(actor.y) + ")", posicion.x + 10, posicion.y + 10);
			}
		
			anterior_draw.call(g, a);
		}
	
	}

  eliminar() {
    pilas.escena_actual().stage.removeChild(this.container);
    this.eje.eliminar();
  }

  actualizar() {
    var escena = pilas.escena_actual();
    this.shape.graphics.clear();
		
		this.shape.graphics.actores = escena.actores;
		this.shape.graphics.escena = escena;

    for (var i=0; i<escena.actores.length; i++) {
      var actor = escena.actores[i];
      var posicion = escena.obtener_posicion_pantalla(actor.x, actor.y);
      var size = 3;

      // Dibuja un punto
      this.shape.graphics.beginFill("#ffffff").drawCircle(posicion.x, posicion.y, 2);
    }

    var pos = escena.obtener_posicion_escenario(escena.stage.mouseX, escena.stage.mouseY);
    this.text_coordenada.text = "Posición del mouse: x=" + Math.floor(pos.x) + " y=" + Math.floor(pos.y);
  }

}



class ModoFisica {
  shape;
  container;

  constructor() {
    this.container = new createjs.Container();

    this.shape = new createjs.Shape();
    this.container.addChild(this.shape);

    pilas.escena_actual().stage.addChild(this.container);
  }

  eliminar() {
    pilas.escena_actual().stage.removeChild(this.container);
  }

  actualizar() {
    var escena = pilas.escena_actual();
    this.shape.graphics.clear();
    this.shape.graphics.setStrokeStyle(3);
    escena.fisica.dibujar_figuras_sobre_lienzo(this.shape.graphics);
  }
}



