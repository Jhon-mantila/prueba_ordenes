$(document).ready(function(){
//Modal From actualizar cursos visulizar información*********************************************************************
$('.add_estudiantes').click(function(e){
         e.preventDefault();
         
         var id_estudiante = $(this).attr('id_estudiante');
         var action = 'infoEstudiante';
         var activo = '';
         //alert(producto);
         
         $.ajax({
            url:'update/clienteAjax.php',
            type:'POST',
            async: true,
            data:{action: action, id_estudiante: id_estudiante},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    $('#documento').val(info.customer_id_number);
                    $('#nombre').val(info.customer_name);
                    $('#fecha').val(info.customer_birth_date);
                    $('#dir').val(info.customer_address);
                    $('#cel').val(info.customer_phone);
                    $('#city').val(info.city_id);
             
                    $('#id_estudiante').val(info.customer_id);
                    

                    
                }
            },
            
            error: function(error){
                console.log(error);
            }
         });
         
         $('.Modal').fadeIn();
         
     });
     
   
     
     
});//fin funcion inicia

// Actualizar Boton  ************************************************************
function sendDataEstudiantes(){
        
     $.ajax({
            url:'update/clienteAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                        console.log(info);
                        
                        console.log("id:"+info.customer_id);

                      $('.row' + info.customer_id + ' .doc').html(info.customer_id_number);
                      $('.row' + info.customer_id + ' .name').html(info.customer_name);
                      $('.row' + info.customer_id + ' .fecha').html(info.customer_birth_date);
                      $('.row' + info.customer_id + ' .dir').html(info.customer_address);
                      
                      $('.row' + info.customer_id + ' .tel').html(info.customer_phone);
                      $('.row' + info.customer_id + ' .city').html(info.city_name);
                       
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Actualizado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}



function closeModal(){
    $('.alertAddProduct').html('');
    //Limpiar Formulario Limpiar
    //$('#planilla').val('');
    $('#empresa').val(4);
    
    $('.Modal').fadeOut();
    //location.reload();
}

function closeModal1(){
    $('.alertAddProduct').html('');
    $('.Modal').fadeOut();
    location.reload();
}