$(document).ready(function(){
    
$('.add_productos').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'update/productoAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataProducto();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR</h3><br>'+
                                                
                                                '<label for="exampleFormControlInput1" class="form-label">PRODUCTO:</label>'+
                                                '<input type="text" name="emp" id="txtnBote" class="form-control" value="'+info.product_descripcion+'" placeholder="Ciudad"/><br> '+
                                                
                                                '<label for="exampleFormControlInput1" class="form-label">AMOUNT:</label>'+
                                                '<input type="number" name="am" id="txtnBote" class="form-control" step=".01" value="'+info.product_amount+'" placeholder="Ciudad"/><br> '+
                                                
                                                '<label for="exampleFormControlInput1" class="form-label">VALOR:</label>'+
                                                '<input type="number" name="val" id="txtnBote" class="form-control" step=".01" value="'+info.product_value+'" placeholder="Ciudad"/><br> '+
                                                
                                                '<label for="exampleFormControlInput1" class="form-label">ESTADO:</label>'+
                                                '<input type="text" name="estado" id="txtnBote" class="form-control" value="'+info.product_status+'" placeholder="Ciudad"/><br> '+
                                                                         
                                                '<input type="hidden" name="idE" id="idE" value="'+info.product_id+'"/>'+
                                                '<input type="hidden" name="action" value="addProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
                                                '<button type="submit" class="btn btn-outline-success">Actualizar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal1();">Cerrar</a>'+
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

function sendDataProducto(){
    
     $.ajax({
            url:'update/productoAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.product_id + ' .id_prod').html(info.product_id);
                      $('.row' + info.product_id + ' .name_prod').html(info.product_descripcion);
                      $('.row' + info.product_id + ' .am__prod').html(info.product_amount);
                      $('.row' + info.product_id + ' .val_prod').html(info.product_value);
                      $('.row' + info.product_id + ' .estado_prod').html(info.product_status);
                     
                       
                
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