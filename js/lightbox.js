(function(){
    var cierre =[
        imagen= new Image("../img/close.png"),
        imagen.width="100%",
        imagen.src= "../img/close.png"
    ]
    
    
    // Objeto de propiedades de efecto Lightbox
    
    var propLightbox = {
     imgContainer: document.getElementsByClassName('lightbox'),
     imagen: null,
     imagenSrc:null,
     cuerpoDom:document.getElementsByTagName('body')[0],
     lightbox__container: null,
     model:null,
    cierreModal:null,
    animacion: 'fade'
    }
    // Objeto de metodos de efecto Lightbox
    
    var metLightbox = {
        
        inicio: function(){
            for (var i = 0; i < propLightbox.imgContainer.length; i++){
                propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
                
            }
                
            
    
        },
        capturaImagen: function(){
            propLightbox.imagen = this;
            console.log("funciona")
            metLightbox.lightbox(propLightbox.imagen);
        },
        lightbox: function(imagen){
            propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container');
            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top ='0';
            propLightbox.lightbox_container.style.left ='0';
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','model');
            propLightbox.model = document.getElementById('model');
            propLightbox.model.style.height = '100%';
            propLightbox.model.appendChild(document.createElement('IMG')).setAttribute('src',propLightbox.imagenSrc); 
            propLightbox.model.getElementsByTagName('img')[0].setAttribute('class','imagen__modal');
    
            if(propLightbox.animacion == 'fade') {
                document.getElementsByClassName('imagen__modal')[0].style.opacity = 0;
                setTimeout(function(){
                    document.getElementsByClassName('imagen__modal')[0].style.opacity = 1;
                },200);
            }
    
            propLightbox.model.innerHTML+= "<img src="+"../img/close.png "+"class="+"cierre-X "+"id="+"cierre-X "+ "/>";
            propLightbox.cierreModal = document.getElementById('cierre-X');
            propLightbox.cierreModal.addEventListener('click',metLightbox.cierreModal);
        },
        cierreModal: function(){
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
    
        }
        
    }
    metLightbox.inicio()
}())










