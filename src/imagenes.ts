class Imagenes {
  data_path: string;
  recursos;
  imagenes_solicitadas;
  loader;
  nombresImagenes;

  constructor(callback_onready, opciones) {
    this.recursos = {}
    this.data_path = opciones.data_path;
    this.loader = new PxLoader();
    this.imagenes_solicitadas = 0;

    this.nombresImagenes = [].concat(opciones.imagenesExtra);
    this.cargar_recursos();

    //loader.addProgressListener(function (e) {
    //    this.actualizar_progreso(e);
    //            return true
    // });

    this.loader.addCompletionListener(function(e) {
      pilas.ready = true;
      pilas.escena_actual().iniciar();
      pilas.onready();
      pilas.ejecutar();
    });

    this.loader.start();
  }

  private cargar_recursos() {
    var _this = this;

    this.nombresImagenes.forEach(function(nombre){
      _this.cargar_recurso(nombre);
    });

    this.cargar_recurso('fondos.tarde.jpg');
    this.cargar_recurso('fondos.laberinto1.png');
    this.cargar_recurso('fondos.nubes.png');

    var data = {"frames": [

    {
    	"filename": "aceituna.png",
    	"frame": {"x":1461,"y":2,"w":37,"h":37},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":37,"h":37},
    	"sourceSize": {"w":37,"h":37},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "aceituna_burla.png",
    	"frame": {"x":1588,"y":2,"w":38,"h":43},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":38,"h":43},
    	"sourceSize": {"w":38,"h":43},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "aceituna_grita.png",
    	"frame": {"x":1628,"y":2,"w":38,"h":43},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":38,"h":43},
    	"sourceSize": {"w":38,"h":43},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "aceituna_risa.png",
    	"frame": {"x":1549,"y":2,"w":37,"h":37},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":37,"h":37},
    	"sourceSize": {"w":37,"h":37},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "alien.png",
    	"frame": {"x":2,"y":519,"w":2030,"h":129},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":2030,"h":129},
    	"sourceSize": {"w":2030,"h":129},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "alien_camina.png",
    	"frame": {"x":2,"y":150,"w":990,"h":97},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":990,"h":97},
    	"sourceSize": {"w":990,"h":97},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "alien_marron.png",
    	"frame": {"x":2,"y":388,"w":2030,"h":129},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":2030,"h":129},
    	"sourceSize": {"w":2030,"h":129},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "banana.png",
    	"frame": {"x":1668,"y":2,"w":80,"h":45},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":80,"h":45},
    	"sourceSize": {"w":80,"h":45},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "bascket.png",
    	"frame": {"x":388,"y":52,"w":49,"h":50},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":49,"h":50},
    	"sourceSize": {"w":49,"h":50},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "bloque.png",
    	"frame": {"x":713,"y":2,"w":25,"h":27},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":25,"h":27},
    	"sourceSize": {"w":25,"h":27},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "bomba.png",
    	"frame": {"x":610,"y":52,"w":136,"h":63},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":136,"h":63},
    	"sourceSize": {"w":136,"h":63},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "boton.boton_normal.png",
    	"frame": {"x":1258,"y":2,"w":127,"h":32},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":127,"h":32},
    	"sourceSize": {"w":127,"h":32},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "boton.boton_over.png",
    	"frame": {"x":1095,"y":2,"w":127,"h":32},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":127,"h":32},
    	"sourceSize": {"w":127,"h":32},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "boton.pboton_press.png",
    	"frame": {"x":966,"y":2,"w":127,"h":32},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":127,"h":32},
    	"sourceSize": {"w":127,"h":32},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "boton.tema.png",
    	"frame": {"x":426,"y":2,"w":285,"h":25},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":285,"h":25},
    	"sourceSize": {"w":285,"h":25},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "caja.png",
    	"frame": {"x":1846,"y":2,"w":48,"h":48},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":48,"h":48},
    	"sourceSize": {"w":48,"h":48},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cesto.png",
    	"frame": {"x":748,"y":52,"w":82,"h":79},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":82,"h":79},
    	"sourceSize": {"w":82,"h":79},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cofre.png",
    	"frame": {"x":301,"y":2,"w":100,"h":18},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":100,"h":18},
    	"sourceSize": {"w":100,"h":18},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.alerta.png",
    	"frame": {"x":1028,"y":52,"w":200,"h":96},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":200,"h":96},
    	"sourceSize": {"w":200,"h":96},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.camina.png",
    	"frame": {"x":1601,"y":150,"w":400,"h":106},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":400,"h":106},
    	"sourceSize": {"w":400,"h":106},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.camina_sujeta.png",
    	"frame": {"x":2,"y":258,"w":412,"h":106},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":412,"h":106},
    	"sourceSize": {"w":412,"h":106},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.ok.png",
    	"frame": {"x":1206,"y":150,"w":115,"h":105},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":115,"h":105},
    	"sourceSize": {"w":115,"h":105},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.parado.png",
    	"frame": {"x":1098,"y":150,"w":106,"h":103},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":106,"h":103},
    	"sourceSize": {"w":106,"h":103},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.parado_sujeta.png",
    	"frame": {"x":994,"y":150,"w":102,"h":103},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":102,"h":103},
    	"sourceSize": {"w":102,"h":103},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "cooperativista.trabajando.png",
    	"frame": {"x":1323,"y":150,"w":276,"h":106},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":276,"h":106},
    	"sourceSize": {"w":276,"h":106},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "disparos.misil.png",
    	"frame": {"x":62,"y":2,"w":94,"h":17},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":94,"h":17},
    	"sourceSize": {"w":94,"h":17},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "ejes.png",
    	"frame": {"x":1328,"y":650,"w":512,"h":512},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":512,"h":512},
    	"sourceSize": {"w":512,"h":512},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "explosion.png",
    	"frame": {"x":740,"y":2,"w":224,"h":32},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":224,"h":32},
    	"sourceSize": {"w":224,"h":32},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "globo.png",
    	"frame": {"x":496,"y":52,"w":112,"h":60},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":112,"h":60},
    	"sourceSize": {"w":112,"h":60},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "invisible.png",
    	"frame": {"x":2,"y":2,"w":8,"h":8},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":8,"h":8},
    	"sourceSize": {"w":8,"h":8},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "llave.png",
    	"frame": {"x":24,"y":2,"w":19,"h":12},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":19,"h":12},
    	"sourceSize": {"w":19,"h":12},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "manzana.png",
    	"frame": {"x":1288,"y":258,"w":111,"h":116},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":111,"h":116},
    	"sourceSize": {"w":111,"h":116},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "manzana_chica.png",
    	"frame": {"x":403,"y":2,"w":21,"h":22},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":21,"h":22},
    	"sourceSize": {"w":21,"h":22},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "monkey_normal.png",
    	"frame": {"x":1719,"y":258,"w":157,"h":122},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":157,"h":122},
    	"sourceSize": {"w":157,"h":122},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "monkey_shout.png",
    	"frame": {"x":1401,"y":258,"w":157,"h":122},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":157,"h":122},
    	"sourceSize": {"w":157,"h":122},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "monkey_smile.png",
    	"frame": {"x":1560,"y":258,"w":157,"h":122},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":157,"h":122},
    	"sourceSize": {"w":157,"h":122},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "nave.png",
    	"frame": {"x":1750,"y":2,"w":94,"h":46},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":94,"h":46},
    	"sourceSize": {"w":94,"h":46},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "nube1.png",
    	"frame": {"x":324,"y":650,"w":500,"h":500},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":500,"h":500},
    	"sourceSize": {"w":500,"h":500},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "nube2.png",
    	"frame": {"x":826,"y":650,"w":500,"h":500},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":500,"h":500},
    	"sourceSize": {"w":500,"h":500},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "pasto.png",
    	"frame": {"x":1224,"y":2,"w":32,"h":32},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
    	"sourceSize": {"w":32,"h":32},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "pasto_cuadriculado.png",
    	"frame": {"x":2,"y":650,"w":320,"h":240},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":320,"h":240},
    	"sourceSize": {"w":320,"h":240},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "pelota.png",
    	"frame": {"x":388,"y":52,"w":49,"h":50},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":49,"h":50},
    	"sourceSize": {"w":49,"h":50},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "piedra_chica.png",
    	"frame": {"x":45,"y":2,"w":15,"h":14},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":15,"h":14},
    	"sourceSize": {"w":15,"h":14},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "piedra_grande.png",
    	"frame": {"x":439,"y":52,"w":55,"h":54},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":55,"h":54},
    	"sourceSize": {"w":55,"h":54},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "piedra_media.png",
    	"frame": {"x":1424,"y":2,"w":35,"h":36},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":35,"h":36},
    	"sourceSize": {"w":35,"h":36},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "pingu.png",
    	"frame": {"x":416,"y":258,"w":870,"h":116},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":870,"h":116},
    	"sourceSize": {"w":870,"h":116},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "plano.png",
    	"frame": {"x":12,"y":2,"w":10,"h":10},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":10,"h":10},
    	"sourceSize": {"w":10,"h":10},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "rpg.maton.png",
    	"frame": {"x":2,"y":52,"w":384,"h":48},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":384,"h":48},
    	"sourceSize": {"w":384,"h":48},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "sin_imagen.png",
    	"frame": {"x":1878,"y":258,"w":128,"h":128},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":128,"h":128},
    	"sourceSize": {"w":128,"h":128},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "sombra.png",
    	"frame": {"x":158,"y":2,"w":141,"h":18},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":141,"h":18},
    	"sourceSize": {"w":141,"h":18},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "tortuga.png",
    	"frame": {"x":1500,"y":2,"w":47,"h":37},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":47,"h":37},
    	"sourceSize": {"w":47,"h":37},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "tuerca.png",
    	"frame": {"x":1387,"y":2,"w":35,"h":35},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
    	"sourceSize": {"w":35,"h":35},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "zanahoria_normal.png",
    	"frame": {"x":832,"y":52,"w":96,"h":96},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":96,"h":96},
    	"sourceSize": {"w":96,"h":96},
    	"pivot": {"x":0.5,"y":0.5}
    },
    {
    	"filename": "zanahoria_sonrie.png",
    	"frame": {"x":930,"y":52,"w":96,"h":96},
    	"rotated": false,
    	"trimmed": false,
    	"spriteSourceSize": {"x":0,"y":0,"w":96,"h":96},
    	"sourceSize": {"w":96,"h":96},
    	"pivot": {"x":0.5,"y":0.5}
    }],
    "meta": {
    	"app": "http://www.codeandweb.com/texturepacker",
    	"version": "1.0",
    	"image": "sprites.png",
    	"format": "RGBA8888",
    	"size": {"w":2034,"h":1164},
    	"scale": "1",
    	"smartupdate": "$TexturePacker:SmartUpdate:3b12a58e488f41d3d297aefa24fb1bb4:4e23d6bb409f81563584b1a9842693d4:1eabdf11f75e3a4fe3147baf7b5be24b$"
    }
    };

    this.cargar_recursos_desde_spritesheet('sprites.png', data);
  }

  private cargar_recurso(nombre) {
    console.log(nombre);
    var path = this.data_path + '/' + nombre;
    this.recursos[nombre] = this.loader.addImage(path);
    this.imagenes_solicitadas += 1;
  }

  private cargar_recursos_desde_spritesheet(ruta_archivo, data) {
    var sheet = this.loader.addImage(this.data_path + '/' + ruta_archivo);

    var self = this;

    data['frames'].forEach(function(item) {
      var nombre = item.filename;
      var path = self.data_path + '/' + nombre;
      self.recursos[nombre] = {type: "spritesheet",
                               sheet: sheet,
                               name: nombre,
                               frame: item.frame};
      self.imagenes_solicitadas += 1;
    });
  }

  es_spritesheet(imagen) {
    return (imagen.type === 'spritesheet');
  }

  obtener_recurso(nombre) {
    if (nombre in this.recursos)
      return this.recursos[nombre];
    else
      throw "No se puede encontrar la imagen: '" + nombre + "' ¿ha sido pre-cargada en el archivo imagenes.ts?";
  }

  cargar(nombre) {
    var imagen = this.obtener_recurso(nombre);

    if (this.es_spritesheet(imagen))
      return new ImagenDesdeSpritesheet(imagen)
    else
      return new Imagen(imagen);
  }

  cargar_grilla(nombre, columnas=1, filas=1) {
    var imagen = this.obtener_recurso(nombre);

    if (this.es_spritesheet(imagen))
      return new GrillaDesdeSpritesheet(this.recursos[nombre], columnas, filas);
    else
      return new Grilla(this.recursos[nombre], columnas, filas);
  }

  cargar_animacion(nombre, columnas=1, filas=1) {
    return new Animacion(this.recursos[nombre], columnas, filas);
  }
}

class Imagen {
  ruta;
  imagen;

  constructor(imagen) {
    console.log("imagen", imagen);
    this.ruta = imagen;
    this.imagen = imagen;
  }

  instanciar() {
    return new createjs.Bitmap(this.imagen);
  }

  avanzar(velocidad=60) {
    return false;
  }

  get ancho() {return this.imagen.width}
  get alto() {return this.imagen.height}
}


class ImagenDesdeSpritesheet extends Imagen {
  frame;

  constructor(data) {
    super(data.sheet);
    this.frame = data.frame;
  }

  instanciar() {
    var image = new createjs.Bitmap(this.imagen);
    image.sourceRect = new createjs.Rectangle(this.frame.x, this.frame.y, this.frame.w, this.frame.h);
    return image;
  }

  get ancho() {return this.frame.w}
  get alto() {return this.frame.h}

}


class Grilla extends Imagen {
  columnas;
  filas;
  sprite;
  cuadro;
  frame;

  constructor(imagen, columnas=1, filas=1) {
    super(imagen);
    this.columnas = columnas;
    this.filas = filas;
    this.cuadro = 0;
    this.frame = {x: 0, y:0, w: this.imagen.width, h: this.imagen.height};
  }

  instanciar() {
    var data = {
       images: [this.ruta.src],
       frames: {regX: 0, regY: 0, width: 100, height: 100},
    };

    console.log(this.frame);

    var spritesheet = new createjs.SpriteSheet(data);

    this.sprite = new createjs.Sprite(spritesheet);
    this.definir_cuadro(0);
    return this.sprite;
  }

  get cantidad_cuadros() {
    return this.filas * this.columnas;
  }

  definir_cuadro(numero_de_cuadro) {
    this.cuadro = numero_de_cuadro;
    this.sprite.gotoAndStop(numero_de_cuadro);
  }

  avanzar(velocidad=60) {
    var ha_avanzado = true;
    this.cuadro +=1;

    if (this.cuadro >= this.cantidad_cuadros) {
      this.cuadro = 0;
      ha_avanzado = false;
    }

    this.definir_cuadro(this.cuadro);
    return ha_avanzado;
  }

  get ancho() {return this.imagen.width / this.columnas;}
  get alto() {return this.imagen.height / this.filas;}
}

class GrillaDesdeSpritesheet extends Grilla {
  constructor(data, columnas=1, filas=1) {
    super(data.sheet, columnas, filas);
    this.frame = data.frame;
  }

  instanciar() {
    return super.instanciar();
  }

}


class Animacion extends Grilla {
  animaciones;
  animacion_en_curso;
  cuadro_en_la_animacion;
  _ticks_acumulados;

  constructor(imagen, columnas=1, filas=1) {
    super(imagen, columnas, filas);
    this.animaciones = {};
    this.animacion_en_curso = null
    this.cuadro_en_la_animacion = 0
    this._ticks_acumulados = 0;
  }

  definir_animacion(nombre, cuadros, velocidad) {
    this.animaciones[nombre] = {
      cuadros: cuadros,
      velocidad: velocidad
    };
  }

  cargar_animacion(nombre) {
    if (this.animacion_en_curso !== this.animaciones[nombre]) {
      this._ticks_acumulados = 0;
      this.animacion_en_curso = this.animaciones[nombre];
      this.cuadro_en_la_animacion = 0;
      this.definir_cuadro(this.animacion_en_curso["cuadros"][this.cuadro_en_la_animacion])
    }
  }

  avanzar(velocidad=-1) {
    if (velocidad !== -1)
      throw new Error("Tienes que definir la velocidad usando 'definir_animacion' no llamando al metodo avanzar con un numero.");

    if (! this.animacion_en_curso)
      throw new Error("Tienes que definir al menos una animacion inicial.");

    var velocidad_de_animacion = (1000.0 / 60) * this.animacion_en_curso["velocidad"];
    this._ticks_acumulados += velocidad_de_animacion;
    var ha_avanzado = true;

    if (this._ticks_acumulados > 1000.0) {
      this._ticks_acumulados -= 1000.0;

      if (this.cuadro_en_la_animacion >= this.animacion_en_curso['cuadros'].length) {
        this.cuadro_en_la_animacion = 0;
        ha_avanzado = false;
      }

      this.definir_cuadro(this.animacion_en_curso['cuadros'][this.cuadro_en_la_animacion])
      this.cuadro_en_la_animacion += 1;
    }

    return ha_avanzado;
  }
}
