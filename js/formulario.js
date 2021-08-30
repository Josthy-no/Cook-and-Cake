var propFormulario = {
    formulario:document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error:null,
    textError:null
}
console.log(propFormulario.elementos)
var metFormulario = {
    inicio:function(){
        for (var i = 0; i < propFormulario.elementos.length; i++) {
            if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email'|| propFormulario.elementos[i].nodeName == 'textarea' ) {
                propFormulario.elementos[i].addEventListener('focus' , metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('blur' , metFormulario.blurInput);
                
                
            }

         
            
        }
        propFormulario.formulario.addEventListener(`submit` , metFormulario.validarInputs);
        

    },
     focusInput: function(){
         this.parentElement.children[1].className = 'label active';
     },
     blurInput: function(){
         if (this.value == '') {
             this.parentElement.children[1].className = 'label'
         }
     },
     validarInputs: function(e){
         for (var i = 0; i < propFormulario.elementos.length; i++) {
            if (propFormulario.elementos[i].value == '') {
                e.preventDefault();
                
                propFormulario.error =document.createElement('p');
                propFormulario.textError =document.createTextNode('Porfavor llena el campo con tu ' + 
                propFormulario.elementos[i].name);
                propFormulario.error.appendChild(propFormulario.textError);
                propFormulario.error.className = 'error';
                propFormulario.elementos[i].parentElement.appendChild(propFormulario.error); 

            }else{
                console.log(propFormulario.elementos[i].parentElement)
				if (propFormulario.elementos[i].parentElement.children.length >= 3) {
					propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                    console.log(propFormulario.error)
					propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
            }	}
         }
     }

}
metFormulario.inicio();