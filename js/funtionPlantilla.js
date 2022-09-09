$(document).ready(function(){
    
$('.add_ciudad').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'update/ciudadAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataEmpresa();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR CIUDAD</h3><br>'+
                                                
                                                '<label for="exampleFormControlInput1" class="form-label">CIUDAD:</label>'+
                                                '<input type="text" name="emp" id="txtnBote" class="form-control" value="'+info.city_name+'" placeholder="Ciudad"/><br> '+
                                                                         
                                                '<input type="hidden" name="idE" id="idE" value="'+info.city_id+'"/>'+
                                                '<input type="hidden" name="action" value="addProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
                                                '<button type="submit" class="btn btn-outline-success">Actualizar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();">Cerrar</a>'+
                                                '</div>'+
                                          '</form>');
                }
            },
            
            error: function(error){
                console.log(error);
            }
         });
         
         $('.Modal').fadeIn();
         
     });

     

     
     
});//fin funcion inicia

//INGRESAR PLANILLA*****************************************************************
function sendDataPlanilla(){
    
     $.ajax({
            url:'planillaAjax.php',
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

               
                    location.href ="ingresarPlanilla.php";
                  
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