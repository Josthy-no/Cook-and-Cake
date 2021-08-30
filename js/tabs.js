var propTabs = [
    primer_Encabezado=document.getElementById('encabezado_menu').firstElementChild,
    primer_Contenido=document.getElementById('contenido_menu').firstElementChild,
    enlaces_Encabezado=document.querySelectorAll('#encabezado_menu li a'),
    li_encabezado=document.querySelectorAll('#encabezado_menu li'),
    divs_contenido= document.querySelectorAll('#contenido_menu > div'),
    contenido_activo=null
    
]

var metTabs = {
    inicio: function(){
        propTabs[0].className = ' active';
        propTabs[1].className = ' active';
        for (var i = 0; i < propTabs[2].length; i++) {
            propTabs[2][i].addEventListener('click', metTabs.evento )
            
        }
    },
    evento: function(e){
        e.preventDefault();
        for (var i = 0; i < propTabs[3].length; i++) {
            propTabs[3][i].className = '';
            
        }
        for (var i = 0; i < propTabs[4].length; i++) {
            propTabs[4][i].className = '';
        }
        this.parentElement.className = 'active';
        if(propTabs[3][0].className  === 'active'){
            propTabs[5] = document.getElementById('postresitos')
            propTabs[5].classList.add('active')
            propTabs[4][1].className = "desactivated"
           
            
           
        }
        else{
            propTabs[5] = document.getElementById('cafesitos')
            propTabs[5].classList.add('active')
            propTabs[4][0].className = "desactivated"

        }
        // console.log(this)
        // propTabs.contenido_activo = this.getAttribute('href'); 
        // console.log(propTabs.contenido_activo)    
        // document.querySelector(propTabs.contenido_activo).className = 'active';
        // document.querySelector(propTabs.contenido_activo).style.opacity = 0;
        // setTimeout(function(){
        //     document.querySelector(propTabs.contenido_activo).style.opacity = 1;
        // }, 100);
    }
}
metTabs.inicio();