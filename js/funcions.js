$(document).ready(function(){
 //Modal From Eliminar BOTE**************************************************************************
  $('.del_product').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'boteAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delProduct();">'+
                                                '<h2>Eliminar Producto</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Bote?</p>'+
                                                '<h2>'+info.N_BOTE+'</h2>'+
                                          
                                                '<input type="hidden" name="idBote" id="idBote" value="'+info.ID_BOTE+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 //Modal Formulario Eliminar CARGA******************************************************************
  $('.del_carga').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'cargaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delCarga();">'+
                                                '<h2>Eliminar Tipo Carga</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente tipo de Carga?</p>'+
                                                '<h2>'+info.NOMBRE_CARGA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_c" id="id_c" value="'+info.ID_C+'"/>'+
                                                '<input type="hidden" name="action" value="delCarga"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 //Modal Formulario Eliminar DEPARTAMENTO******************************************************************
  $('.del_dep').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'depAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_dep" id="form_del_dep" onsubmit="event.preventDefault(); delDep();">'+
                                                '<h2>Eliminar Departamento</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Departamento?</p>'+
                                                '<h2>'+info.N_DEPARTAMENTO+'</h2>'+
                                          
                                                '<input type="hidden" name="id_d" id="id_d" value="'+info.ID_D+'"/>'+
                                                '<input type="hidden" name="action" value="delDep"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 //Modal Formulario Eliminar TARIFA******************************************************************
  $('.del_tarifa').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tarifaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delTarifa();">'+
                                                '<h2>Eliminar Descripción Tarifa</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Descripción?</p>'+
                                                '<h2>'+info.DESC_ECOPETROL+'</h2>'+
                                          
                                                '<input type="hidden" name="id_d" id="id_d" value="'+info.ID_D+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
  //Modal Formulario eliminar destino*****************   
  $('.del_destino').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'desAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delDestino();">'+
                                                '<h2>Eliminar Destino</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Destino?</p>'+
                                                '<h2>'+info.N_RUTA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_r" id="id_r" value="'+info.ID_R+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal1 btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
  //Modal Formulario Eliminar EMPRESA******************************************************************
  $('.del_empresa').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'empresaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delEmpresa();">'+
                                                '<h2>Eliminar Empresa</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Empresa?</p>'+
                                                '<h2>'+info.N_EMPRESA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_e" id="id_e" value="'+info.ID_E+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
  //ELIMINAR MOTORISTA ************************************************************************
  $('.del_motorista').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'motoristaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delMotorista();">'+
                                                '<h2>Eliminar Motorista</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Motorista?</p>'+
                                                '<h2>'+info.NOMBRES+' '+info.APELLIDOS+'</h2>'+
                                          
                                                '<input type="hidden" name="id_m" id="id_m" value="'+info.ID_M+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
    //Modal Formulario Eliminar PARENTESCO******************************************************************
  $('.del_parentesco').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'parentescoAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delParentesco();">'+
                                                '<h2>Eliminar Parentesco</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Parentesco?</p>'+
                                                '<h2>'+info.PARENTESCO+'</h2>'+
                                          
                                                '<input type="hidden" name="id_p" id="id_p" value="'+info.ID_P+'"/>'+
                                                '<input type="hidden" name="action" value="delParentesco"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//Modal Formulario Eliminar PASAJEROS******************************************************************
  $('.del_pasajeros').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'pasajerosAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delPasajeros();">'+
                                                '<h2>Eliminar Pasajero</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Pasajero?</p>'+
                                                '<h2>'+info.NOMBRES+' '+info.APELLIDOS+'</h2>'+
                                          
                                                '<input type="hidden" name="id_c" id="id_c" value="'+info.ID_C+'"/>'+
                                                '<input type="hidden" name="action" value="delPasajero"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal1();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//Modal Formulario Eliminar RUTAS******************************************************************
  $('.del_ruta').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'rutaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delRuta();">'+
                                                '<h2>Eliminar Ruta</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Ruta?</p>'+
                                                '<h2>'+info.NOMBRE_RUTA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_r" id="id_r" value="'+info.ID_R+'"/>'+
                                                '<input type="hidden" name="action" value="delProduct"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 // Modal Formulario eliminar familiar
 $('.del_familiar').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'familiarAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delFamiliar();">'+
                                                '<h2>Eliminar Familiar</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Familiar?</p>'+
                                                '<h2>'+info.DOCUMENTO+' '+info.NOMBRE+'</h2>'+
                                          
                                                '<input type="hidden" name="id_f" id="id_f" value="'+info.ID_F+'"/>'+
                                                '<input type="hidden" name="action" value="delFamiliar"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal1();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//Modal Formulario Eliminar USUARIOS******************************************************************
  $('.del_usuarios').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'usuariosAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delUsuarios();">'+
                                                '<h2>Eliminar Usuarios</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Usuario?</p>'+
                                                '<h2>'+info.NOMBRES+' '+info.APELLIDOS+'</h2>'+
                                          
                                                '<input type="hidden" name="id_u" id="id_u" value="'+info.ID_U+'"/>'+
                                                '<input type="hidden" name="action" value="delUsuario"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal1();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 //////Modal Formulario Eliminar PARENTESCO/////////////////////////////////////////////////////////////
  $('.del_tipo_docuemnto').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tipoDocAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delTipoDoc();">'+
                                                '<h2>Eliminar Tipo Documento</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Tipo Documento?</p>'+
                                                '<h2>'+info.TIPO_DOC+'</h2>'+
                                          
                                                '<input type="hidden" name="id_tipo_doc" id="id_tipo_doc" value="'+info.ID+'"/>'+
                                                '<input type="hidden" name="action" value="delTipoDoc"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
    
    
//Modal Formulario Eliminar DEPARTAMENTO******************************************************************
$('.del_tipo_c').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tipoPasajeroAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_dep" id="form_del_dep" onsubmit="event.preventDefault(); delTipoP();">'+
                                                '<h2>Eliminar Tipo Parentesco</h2>'+
                                                '<p>¿Está seguro de Eliminar el Siguiente Tipo de Parentesco?</p>'+
                                                '<h2>'+info.N_TIPO_CLIENTE+'</h2>'+
                                          
                                                '<input type="hidden" name="id_t" id="id_t" value="'+info.ID_T+'"/>'+
                                                '<input type="hidden" name="action" value="delDep"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
 //Modal From add Producto BOTE*********************************************************************
$('.add_product').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto';
   
         //alert(producto);
         
         $.ajax({
            url:'boteAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataProduct();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO BOTE</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">REGISTRO:</label>'+
                                                '<input type="number" name="registro" id="txtRegistro" class="form-control" value="'+info.REGISTRO+'" placeholder="Registro del Bote"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DEL BOTE:</label>'+
                                                '<input type="text" name="nBote" id="txtnBote" class="form-control" value="'+info.N_BOTE+'" placeholder="Nombre del Bote"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">REGISTRO DE NAVEGACIÓN:</label>'+  
                                                '<input type="text" name="nPatente" id="txtnPatente" class="form-control" value="'+info.N_PATENTE_NAVE+'" placeholder="Nombre de la Patente"/><br> '+
                                                '<input type="hidden" name="idBote" id="idBote" value="'+info.ID_BOTE+'"/>'+
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
 //Modal Formulario add Producto CARGA**************************************************************
$('.add_carga').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'cargaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_carga" id="form_add_carga" onsubmit="event.preventDefault(); sendDataCaja();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO CARGA</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">REGISTRO:</label>'+
                                                '<input type="number" name="registro" id="txtRegistro" class="form-control" value="'+info.REGISTRO+'" placeholder="Registro del Bote"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DEL BOTE:</label>'+
                                                '<input type="text" name="nCarga" id="txtnBote" class="form-control" value="'+info.NOMBRE_CARGA+'" placeholder="Nombre del Bote"/><br> '+
                                                
                                                '<input type="hidden" name="id_c" id="id_c" value="'+info.ID_C+'"/>'+
                                                '<input type="hidden" name="action" value="actCaja"/>'+
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
 //Modal From add Producto DEPARTAMENTO**********************************************************
$('.add_dep').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'depAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_dep" id="form_add_dep" onsubmit="event.preventDefault(); sendDataDep();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR DEPARTAMENTO</h3><br>'+

                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DEL BOTE:</label>'+
                                                '<input type="text" name="nDep" id="txtnBote" class="form-control" value="'+info.N_DEPARTAMENTO+'" placeholder="Nombre del Bote"/><br> '+
                                                
                                                '<input type="hidden" name="id_d" id="id_d" value="'+info.ID_D+'"/>'+
                                                '<input type="hidden" name="action" value="actDep"/>'+
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
//Modal Formulario Descripcion Tarifa***************************************************************
$('.add_tarifa').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tarifaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    /*$('#idBote').val(info.ID_BOTE);
                    $('#txtRegistro').val(info.REGISTRO);
                    $('#txtnBote').val(info.N_BOTE);
                    $('#txtnPatente').val(info.N_PATENTE_NAVE);*/
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataTarifa();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO TARIFA</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">CÓDIGO:</label>'+
                                                '<input type="number" name="registro" id="txtRegistro" class="form-control" value="'+info.CODIGO+'" placeholder="Registro del Bote"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">DESCRIPCIÓN ECOPETROL:</label>'+
                                                '<input type="text" name="desEcop" id="txtnBote" class="form-control" value="'+info.DESC_ECOPETROL+'" placeholder="Nombre del Bote"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">REGISTRO DE NAVEGACIÓN:</label>'+  
                                                '<input type="text" name="desTsp" id="txtnPatente" class="form-control" value="'+info.DESC_TSP+'" placeholder="Nombre de la Patente"/><br> '+
                                                '<input type="hidden" name="idTarifa" id="idBote" value="'+info.ID_D+'"/>'+
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
//Modal Formulario Descripcion Destinos***************************************************************     
$('.add_destino').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var depar = $(this).attr('dep');
         var action = 'infoProducto'   ;

        // alert (depar);
         
         $.ajax({
                url: 'desAjax.php',
                type: 'post',
                async: true,
                data:{action: action, producto: producto},
                
                success: function(response) {
                    console.log(info);
                    if (response != 'error'){
                    var info = JSON.parse(response);
                    console.log(info);
                    $('#idRuta').val(info.ID_R);
                    $('#txtRuta').val(info.N_RUTA);
                    $('#lista').val(info.ID_DEPARTAMENTO);
 
                    }

                },

                
                error: function(error){
                    
                console.log(error);
                }
         });
         
         $('.Modal').fadeIn();
         
     });
//Modal Formulario Descripcion EMPRESA***************************************************************
$('.add_empresa').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'empresaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataEmpresa2();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO DE EMPRESA</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">NÚMERO DE IDENTIFICACIÓN TRIBUTARIA (NIT):</label>'+
                                                '<input type="number" name="nit" id="txtRegistro" class="form-control" value="'+info.NIT+'" placeholder="Nit Empresa"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DE LA EMPRESA:</label>'+
                                                '<input type="text" name="emp" id="txtnBote" class="form-control" value="'+info.N_EMPRESA+'" placeholder="Nombre Empresa"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">CELULAR DE CONTACTO:</label>'+  
                                                '<input type="number" name="cel" id="txtnPatente" class="form-control" value="'+info.CEL+'" placeholder="Contato Empresa"/><br> '+
                                                '<input type="hidden" name="idE" id="idE" value="'+info.ID_E+'"/>'+
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
//Modal Formulario Descripcion motorista***************************************************************    
$('.add_motorista').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
          var n_est='nom';
         //alert(producto);
         
         $.ajax({
            url:'motoristaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                   if(info.ESTADO==0){
                        n_est='BLOQUEADO';
                        }else{
                        n_est='ACTIVO';
                        }
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataMotorista();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO DE MOTORISTA</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">NÚMERO DE IDENTIFICACIÓN MOTORISTA:</label>'+
                                                '<input type="number" name="cc" id="txtRegistro" class="form-control" value="'+info.CC_MOTORISTA+'" placeholder="Documento"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DEL MOTORISTA:</label>'+
                                                '<input type="text" name="nom" id="txtnBote" class="form-control" value="'+info.NOMBRES+'" placeholder="Nombre del Motorista"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">APELLIDO DEL MOTORISTA:</label>'+
                                                '<input type="text" name="ape" id="txtnBote" class="form-control" value="'+info.APELLIDOS+'" placeholder="Apaellido Motorista"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">CELULAR DE CONTACTO:</label>'+  
                                                '<input type="number" name="cel" id="txtnPatente" class="form-control" value="'+info.CEL+'" placeholder="Contacto"/><br> '+
                                                '<input type="hidden" name="idM" id="idE" value="'+info.ID_M+'"/>'+
                                                '<label for="exampleFormControlInput1" class="form-label">ESTADO:</label>'+
                                                '<select name="activo" class="form-select" id="activo">'+
                                                '<option value="'+info.ESTADO+'">'+n_est+'</option>'+
                                                '<option value="0">BLOQUEADO</option>'+
                                                '<option value="1">ACTIVO</option>'+
                                                '</select>'+
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
//Modal formulario parentesco ******************************************************   
$('.add_parentesco').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'parentescoAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataParentesco();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO PARENTESCO</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">PARENTESCO:</label>'+
                                                '<input type="text" name="paren" id="txtRegistro" class="form-control" value="'+info.PARENTESCO+'" placeholder="Registro del Parentesco"/><br> '+
                                                
                                                '<input type="hidden" name="id_p" id="id_p" value="'+info.ID_P+'"/>'+
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
// MODAL formulario Actualizar pasajeros  *********************************************************************************************   
$('.add_pasajeros').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'pasajerosAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('#id_c').val(info.ID_C);
                    $('#tipoDoc').val(info.ID_TIPO_DOC);
                    $('#cc').val(info.CC_CLIENTE);
                    $('#nom').val(info.NOMBRES);
                    $('#ape').val(info.APELLIDOS);
                    $('#cel').val(info.CEL);
                    $('#gen').val(info.GENERO);
                    $('#rh').val(info.GS_RH);
                    $('#naci').val(info.F_NACIMIENTO);
                    $('#activo').val(info.ID_ACTIVO);
                    

                }
            },
            
            error: function(error){
                console.log(error);
            }
         });
         
         $('.Modal').fadeIn();
         
     });
 //MOdal formulario actualizar rutas*******************************************************    
$('.add_ruta').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'rutaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataRuta();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR REGISTRO DE RUTA</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">NÚMERO DE REGISTRO:</label>'+
                                                '<input type="number" name="registro" id="txtRegistro" class="form-control" value="'+info.REGISTRO_RUTA+'" placeholder="Registro de la Ruta"/><br> '+
                                                '<label for="exampleFormControlInput1" class="form-label">NOMBRE DE LA RUTA:</label>'+
                                                '<input type="text" name="nRuta" id="txtnBote" class="form-control" value="'+info.NOMBRE_RUTA+'" placeholder=""/><br> '+

                                                '<input type="hidden" name="id_r" id="id_r" value="'+info.ID_R+'"/>'+
                                                
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
// MODAL formulario Actualizar pasajeros  *********************************************************************************************   
$('.add_familiar').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'familiarAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('#id_f').val(info.ID_F);
                    $('#tipoDoc').val(info.ID_TIPO_DOC);
                    $('#cc').val(info.DOCUMENTO);
                    $('#nom').val(info.NOMBRE);
                    $('#ape').val(info.APELLIDO);
                    $('#cel').val(info.CEL_FAMILIAR);
                    $('#idParen').val(info.ID_PARENTESCO);
                    $('#registroPer').val(info.REGISTRO);
                    $('#naci').val(info.F_NACIMIENTO);
                    $('#nomPer').val(info.NOMBRE_PERSONAL);
                    $('#activo').val(info.ESTADO);
                    

                }
            },
            
            error: function(error){
                console.log(error);
            }
         });
         
         $('.Modal').fadeIn();
         
     });
 //Modal From add Producto DEPARTAMENTO**********************************************************
$('.add_tipo_c').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tipoPasajeroAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_dep" id="form_add_dep" onsubmit="event.preventDefault(); sendDataTipoP();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR TIPO DE PASAJERO</h3><br>'+

                                                '<label for="exampleFormControlInput1" class="form-label">TIPO PASAJERO:</label>'+
                                                '<input type="text" name="tipoP" id="txtnBote" class="form-control" value="'+info.N_TIPO_CLIENTE+'" placeholder="Nombre del Bote"/><br> '+
                                                
                                                '<input type="hidden" name="id_t" id="id_t" value="'+info.ID_T+'"/>'+
                                                '<input type="hidden" name="action" value="act_tipo_pa"/>'+
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
// MODAL formulario Actualizar USUARIOS  *********************************************************************************************   
$('.add_usuarios').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'usuariosAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                //console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    //console.log(info);
                    
                    $('#id_u').val(info.ID_U);
                    $('#cedula').val(info.CEDULA);
                    $('#nom').val(info.NOMBRES);
                    $('#ape').val(info.APELLIDOS);
                    $('#cel').val(info.CEL);
                    $('#clave').val(info.CLAVE);
                    $('#empresa').val(info.ID_EMPRESA);
                    $('#perfil').val(info.ID_PERFIL);

                    $('#activo').val(info.ESTADO);
                    

                }
            },
            
            error: function(error){
                console.log(error);
            }
         });
         
         $('.Modal').fadeIn();
         
     });  
 ////////////////////////////Modal formulario tipo documeento///////////////////////////////////////////////////////
$('.add_tipo_documento').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'tipoDocAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);
                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataTipoDocumento();">'+
                                                '<div class="iconoAct text-success"><i class="fas fa-edit"></i></div>'+
                                                '<h3>ACTUALIZAR TIPO DOCUMENTO</h3><br>'+
                                                '<label for="exampleFormControlInput1" class="form-label">TIPO DOCUMENTO:</label>'+
                                                '<input type="text" name="tipo_doc" id="tipo_doc" class="form-control" value="'+info.TIPO_DOC+'" placeholder="Registro del Parentesco"/><br> '+
                                                
                                                '<input type="hidden" name="id_tipo_doc" id="id_tipo_doc" value="'+info.ID+'"/>'+
                                                '<input type="hidden" name="action" value="actTipoDoc"/>'+
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
    
});//fin funcion inicial

// Actualizar Boton bote *******************************************************************
function sendDataProduct(){
    
     $.ajax({
            url:'boteAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_BOTE + ' .celReg').html(info.REGISTRO);
                       $('.row' + info.ID_BOTE + ' .celNBote').html(info.N_BOTE);
                        $('.row' + info.ID_BOTE + ' .celNpatente').html(info.N_PATENTE_NAVE);
                
                    //location.href='ingresarDepartamento.php';
                   
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Actualizado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}
// Actualizar Boton caja *******************************************************************
function sendDataCaja(){
    
     $.ajax({
            url:'cargaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_carga').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                     $('.row' + info.ID_C + ' .celReg').html(info.REGISTRO);
                       $('.row' + info.ID_C + ' .celNcarga').html(info.NOMBRE_CARGA);
                       
                
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
// Actualizar Boton departamento ************************************************************
function sendDataDep(){
    
     $.ajax({
            url:'depAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_dep').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_D + ' .celDep').html(info.N_DEPARTAMENTO);
                       
                
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
// Actualizar Boton descripcion tarifa ************************************************************
function sendDataTarifa(){
    
     $.ajax({
            url:'tarifaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_D + ' .celReg').html(info.CODIGO);
                      $('.row' + info.ID_D + ' .celEcop').html(info.DESC_ECOPETROL);
                      $('.row' + info.ID_D + ' .celTsp').html(info.DESC_TSP);
                       
                
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
// Actualizar Boton descripcion tarifa ************************************************************
function sendDataDestino(){
    
    //alert("envia datos");
   
   $.ajax({
            url:'desAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);  
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_R + ' .celRuta').html(info.N_RUTA);
                      $('.row' + info.ID_R + ' .celDep').html(info.N_DEPARTAMENTO);
                    
                       
                
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
// Actualizar Boton empresas ************************************************************
function sendDataEmpresa2(){
    
     $.ajax({
            url:'empresaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_E + ' .celNit').html(info.NIT);
                      $('.row' + info.ID_E + ' .celEmp').html(info.N_EMPRESA);
                      $('.row' + info.ID_E + ' .celCel').html(info.CEL);
                       
                
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
//Actualizar Motorista **************************************************************
function sendDataMotorista(){
    
     $.ajax({
            url:'motoristaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                        if(info.ESTADO==0){
                        n_est='BLOQUEADO';
                        }else{
                        n_est='ACTIVO';
                        }
                      $('.row' + info.ID_M + ' .celCc').html(info.CC_MOTORISTA);
                      $('.row' + info.ID_M + ' .celNom').html(info.NOMBRES);
                      $('.row' + info.ID_M + ' .celApe').html(info.APELLIDOS);
                      $('.row' + info.ID_M + ' .celCel').html(info.CEL);
                      $('.row' + info.ID_M + ' .celEstado').html(n_est);
                       
                
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
//Actulizar parentesco **************************************************************
function sendDataParentesco(){
    
     $.ajax({
            url:'parentescoAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                     $('.row' + info.ID_P + ' .celPare').html(info.PARENTESCO);
               
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
//Actulizar parentesco **************************************************************
function sendDataPasajero(){
    
     $.ajax({
            url:'pasajerosAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                     $('.row' + info.ID_C + ' .celTipo').html(info.TIPO_DOC);
                     $('.row' + info.ID_C + ' .celcc').html(info.CC_CLIENTE);
                     $('.row' + info.ID_C + ' .celNom').html(info.NOMBRES);
                     $('.row' + info.ID_C + ' .celApe').html(info.APELLIDOS);
                     $('.row' + info.ID_C + ' .celCel').html(info.CEL);
                     $('.row' + info.ID_C + ' .celGen').html(info.GENERO);
                     $('.row' + info.ID_C + ' .celRh').html(info.GS_RH);
                     $('.row' + info.ID_C + ' .celNaci').html(info.F_NACIMIENTO);
                     $('.row' + info.ID_C + ' .celNactivo').html(info.NOMBRE);
               
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
//Actualizar rutas ***************************************************************
function sendDataRuta(){
    
     $.ajax({
            url:'rutaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_R + ' .celReg').html(info.REGISTRO_RUTA);
                      $('.row' + info.ID_R + ' .celNruta').html(info.NOMBRE_RUTA);

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
//Actulizar FAMILIAR **************************************************************
function sendDataFamiliar(){
    
     $.ajax({
            url:'familiarAjax.php',
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
                     $('.row' + info.ID_F + ' .celTipo').html(info.TIPO_DOC);
                     $('.row' + info.ID_F + ' .celcc').html(info.DOCUMENTO);
                     $('.row' + info.ID_F + ' .celNom').html(info.NOM);
                     $('.row' + info.ID_F + ' .celApe').html(info.APELLIDO);
                     $('.row' + info.ID_F + ' .celCel').html(info.CEL_FAMILIAR);
                     $('.row' + info.ID_F + ' .celPar').html(info.PARENTESCO);
                     $('.row' + info.ID_F + ' .celNaci').html(info.F_NACIMIENTO);
                     $('.row' + info.ID_F + ' .celReg').html(info.REGISTRO);
                     $('.row' + info.ID_F + ' .celNper').html(info.NOMBRE_PERSONAL);
                     $('.row' + info.ID_F + ' .celActivo').html(info.ESTADO);
               
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
// Actualizar Boton TIPO PASAJERO ************************************************************
function sendDataTipoP(){
    
     $.ajax({
            url:'tipoPasajeroAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_dep').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                      $('.row' + info.ID_T + ' .celTipoC').html(info.N_TIPO_CLIENTE);
                       
                
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
//Actulizar parentesco **************************************************************
function sendDataUsuarios(){
    
     $.ajax({
            url:'usuariosAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    //console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                     
                     $('.row' + info.ID_U + ' .celcc').html(info.CEDULA);
                     $('.row' + info.ID_U + ' .celNom').html(info.NOMBRES);
                     $('.row' + info.ID_U + ' .celApe').html(info.APELLIDOS);
                     $('.row' + info.ID_U + ' .celCel').html(info.CEL);
                     $('.row' + info.ID_U + ' .celEmp').html(info.N_EMPRESA);
                     $('.row' + info.ID_U + ' .celPerfil').html(info.NOMBRE);
                     $('.row' + info.ID_U + ' .celEstado').html(info.ESTADO);
                     
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
//////ACTUALIZAR TIPO DOCUMENTO /////////////////////////////////////////////////
function sendDataTipoDocumento(){
    
     $.ajax({
            url:'tipoDocAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      var info = JSON.parse(response);
                     $('.row' + info.ID + ' .celTipoD').html(info.TIPO_DOC);
               
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

//eLIMNAR BOTE*****************************************************************************
function delProduct(){
    var pr = $('#idBote').val();
     $.ajax({
            url:'boteAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Eliminar</p>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Bote Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
//eLIMNAR CARGA*****************************************************************************
function delCarga(){
    var pr = $('#id_c').val();
    
    $.ajax({
            url:'cargaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){ 
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No se Puede Eliminar Esta Relacionado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Carga Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error); 
                
            }
         });
    
    $('.alertAddProduct').html('');
    
}
//Eliminar departamentos
function delDep(){
    var pr = $('#id_d').val();
     $.ajax({
            url:'depAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_dep').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                     $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_dep .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Departamento Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar Tarifas
function delTarifa(){
    var pr = $('#id_d').val();
     $.ajax({
            url:'tarifaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Tarifa Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
//Eliminar destinos
function delDestino(){
    var pr = $('#id_r').val();
     $.ajax({
            url:'desAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                   $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Destino Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');

}
// Eliminar Empresas ***************************************************************************
function delEmpresa(){
    var pr = $('#id_e').val();
     $.ajax({
            url:'empresaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Empresa Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar MOTORISTAS ***************************************************************************
function delMotorista(){
    var pr = $('#id_m').val();
     $.ajax({
            url:'motoristaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Motorista Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar PARENTESCO ***************************************************************************
function delParentesco(){
    var pr = $('#id_p').val();
     $.ajax({
            url:'parentescoAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Parentesco Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar PASAJEROS ***************************************************************************
function delPasajeros(){
    var pr = $('#id_c').val();
     $.ajax({
            url:'pasajerosAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Pasajero Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
//Eliminar RUTAS ***************************************************************************
function delRuta(){
    var pr = $('#id_r').val();
     $.ajax({
            url:'rutaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Ruta Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar PASAJEROS ***************************************************************************
function delFamiliar(){
    var pr = $('#id_f').val();
     $.ajax({
            url:'familiarAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Familiar Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
//Eliminar departamentos
function delTipoP(){
    var pr = $('#id_t').val();
     $.ajax({
            url:'tipoPasajeroAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_dep').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                     $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_dep .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Eliminado Correctamente<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar USUARIOS /////////////////////////////////////////////////////////////////////////////
function delUsuarios(){
    var pr = $('#id_u').val();
     $.ajax({
            url:'usuariosAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Usuario Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}
// Eliminar TIPO DOCUMENTO ///////////////////////////////////////////////////////////////////////////
function delTipoDoc(){
    var pr = $('#id_tipo_doc').val();
     $.ajax({
            url:'tipoDocAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
               if(response == 'error'){
                    $('.alertAddProduct').html('<div class="alert alert-danger" alert-dismissible fade show" role="alert">No Se puede Eliminar esta Relacinado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }else{
                      
                      $('.row' + pr).remove();
                      $('#form_del_product .btn-del').remove();
                
                    //location.reload();
                   
                       $('.alertAddProduct').html('<div class="alert alert-success" alert-dismissible fade show" role="alert">Tipo Documento Eliminado<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });   
    $('.alertAddProduct').html('');
 
}

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////PLANILLA////////////////////////////////////////
///////////////////////// INGRESAR PLANILLA///////////////////////////////////////////
/////////////////////// Modalr Guardar Planilla /////////////////////////////////////
$('.add_Dpa').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'infoProducto';
   
         //alert(producto);
         
         $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); addPlanilla();">'+
                                                '<h2>Guardar ORDEN</h2>'+
                                                '<p>¿Está seguro de Guardar la Siguiente ORDEN?</p>'+
                                                '<h2>'+info.order_id+'</h2>'+
                                          
                                                '<input type="hidden" name="id_plani" id="id_planilla" value="'+info.order_id+'"/>'+
                                                '<input type="hidden" name="action" value="GuardarPlanilla"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-success"><i class="fas fa-trash-alt"></i>Guardar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-danger" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//Modal Eliminar Planilla //////////////////////////////////////////////////////////     
$('.del_planilla_ingresar').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'delPLanillaInfo';
   
         //alert(producto);
         
         $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delPlanilla();">'+
                                                '<h2>Eliminar Planilla</h2>'+
                                                '<p>¿Está seguro de Eliminar la Siguiente Planilla?</p>'+
                                                '<h2>'+info.ID_NO_PLANILLA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_plani" id="id_planilla" value="'+info.ID_PLANILLA+'"/>'+
                                                '<input type="hidden" name="action" value="DelPlanilla"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-success"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-danger" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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

//Modal Eliminar detalle pasajero ********************************************************************     
$('.del_detalle_pasajeros').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'DeldetallePasajero';
   
         //alert(producto);
         
         $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var infoPasajero = JSON.parse(response);
                    console.log(infoPasajero);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delDetallePasajero();">'+
                                                '<h2>Eliminar Registro</h2>'+
                                                '<p>¿Está seguro de Eliminar el siguiente registro?</p>'+
                                                '<h2>'+infoPasajero.product_descripcion+'</h2>'+
                                          
                                                '<input type="hidden" name="id_planilla" id="id_detalle_pasajero" value="'+infoPasajero.detail_id+'"/>'+
                                                '<input type="hidden" name="id_orden" id="id_detalle_pasajero" value="'+infoPasajero.order_id+'"/>'+
                                                '<input type="hidden" name="action" value="DelDetallePasajero"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//Modal Eliminar detalle CARGA ********************************************************************     
$('.del_detalle_carga').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'DeldetalleCarga'   ;
   
         //alert(producto);
         
         $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delDetalleCarga();">'+
                                                '<h2>Eliminar Registro de Carga</h2>'+
                                                '<p>¿Está seguro de Eliminar el siguiente registro de carga?</p>'+
                                                '<h2>'+info.NOMBRE_CARGA+'</h2>'+
                                          
                                                '<input type="hidden" name="id_planilla" id="id_detalle_carga" value="'+info.ID_DETALLE_PLANILLA_CARGA+'"/>'+
                                                '<input type="hidden" name="action" value="DelDetalleCarga"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
     //Modal Eliminar detalle FAMILIAR ********************************************************************     
$('.del_detalle_familiar').click(function(e){
         e.preventDefault();
         
         var producto = $(this).attr('product');
         var action = 'DeldetalleFamiliar';
   
         //alert(producto);
         
         $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data:{action: action, producto: producto},
  
            success: function(response) {
                
                console.log(response);
                
                if(response != 'error'){
                    
                    var info = JSON.parse(response);
                    console.log(info);

                    
                    $('.bodyModal').html('<form  action="" method="post" name="form_del_product" id="form_del_product" onsubmit="event.preventDefault(); delDetalleFamiliar();">'+
                                                '<h2>Eliminar Registro de Familiar</h2>'+
                                                '<p>¿Está seguro de Eliminar el siguiente registro de familiar?</p>'+
                                                '<h2>'+info.NOMBRE+'</h2>'+
                                          
                                                '<input type="hidden" name="id_planilla" id="id_detalle_familiar" value="'+info.ID_DETALLE_PLANILLA+'"/>'+
                                                '<input type="hidden" name="action" value="DelDetalleFamiliar"/>'+
                                                '<div class="alertAddProduct"></div>'+
                                                
                                                '<div class="d-grid gap-2 d-md-flex justify-content-md-center">'+
                                                '<button type="submit" class="btn-del btn btn-outline-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>'+
                                                '<a href="#" class="closeModal btn btn-outline-success" onclick="closeModal();"><i class="fas fa-times-circle"></i>Cancelar</a>'+
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
//INGRESAR PLANILLA*****************************************************************
function addPlanilla(){
    
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
                      //var info = JSON.parse(response);
                      //console.log(info);
                    /* $('.row' + info.ID_C + ' .celTipo').html(info.TIPO_DOC);
                     $('.row' + info.ID_C + ' .celcc').html(info.CC_CLIENTE);
                     $('.row' + info.ID_C + ' .celNom').html(info.NOMBRES);
                     $('.row' + info.ID_C + ' .celApe').html(info.APELLIDOS);
                     $('.row' + info.ID_C + ' .celCel').html(info.CEL);
                     $('.row' + info.ID_C + ' .celGen').html(info.GENERO);
                     $('.row' + info.ID_C + ' .celRh').html(info.GS_RH);
                     $('.row' + info.ID_C + ' .celNaci').html(info.F_NACIMIENTO);
                     $('.row' + info.ID_C + ' .celNactivo').html(info.NOMBRE);*/
               
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

//ELIMINAR PLANILLA*****************************************************************
function delPlanilla(){
    
     $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Eliminar Pasajeros y/o carga y/o familiar Relacionados</p>');
                }else{
                      //var info = JSON.parse(response);
                      //console.log(info);

               
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

//ELIMINAR DETALLE PASAJERO*****************************************************************
function delDetallePasajero(){
    
    var pr = $('#id_detalle_pasajero').val();
    
     $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Eliminar Pasajeros y/o carga y/o familiar Relacionados</p>');
                }else{
                      //var info = JSON.parse(response);
                      //console.log(info);
                      
                        $('.row' + pr).remove();
                        $('#form_del_product .btn-del').remove();
               
                    //location.href ="ingresarPlanilla.php";
                  
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Eliminado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}

//ELIMINAR DETALLE CARGA*****************************************************************
function delDetalleCarga(){
    
    var pr = $('#id_detalle_carga').val();
    
     $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Eliminar Pasajeros y/o carga y/o familiar Relacionados</p>');
                }else{
                      //var info = JSON.parse(response);
                      //console.log(info);
                      
                        $('.row' + pr).remove();
                        $('#form_del_product .btn-del').remove();
               
                    //location.href ="ingresarPlanilla.php";
                  
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Eliminado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}
//ELIMINAR DETALLE FAMILIAR*****************************************************************
function delDetalleFamiliar(){
    
    var pr = $('#id_detalle_familiar').val();
    
     $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_del_product').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Eliminar Pasajeros y/o carga y/o familiar Relacionados</p>');
                }else{
                      //var info = JSON.parse(response);
                      //console.log(info);
                      
                        $('.row' + pr).remove();
                        $('#form_del_product .btn-del').remove();
               
                    //location.href ="ingresarPlanilla.php";
                  
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Eliminado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}

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

//INGRESAR DETALLE CARGA**************************************************************
function sendDataDetalleCarga(){
    

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
                      //var info = JSON.parse(response);

               
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

//INGRESAR DETALLE pasajero**************************************************************
function sendDataDetallePasajero(){
    

     $.ajax({
            url:'planillaAjax.php',
            type:'POST',
            async: true,
            data: $('#form_add_producto').serialize(),
  
            success: function(response) {
                    console.log(response);
                if(response == 'error'){
                    $('.alertAddProduct').html('<p style="color:red">Error al Actualizar</p>');
                }else{
                      //var info = JSON.parse(response);

               
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
//INGRESAR DETALLE pasajero consulta**************************************************************
function sendDataDetallePasajeroConsulta(){
    

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
                      //var info = JSON.parse(response);

               
                    location.href ="consultarPlanillas.php";
                  
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Actualizado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}
// INGRESAR DETALLE CARGA CONSULTA *************************************
function sendDataDetalleCargaConsulta(){
    

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
                      //var info = JSON.parse(response);

               
                    location.href ="consultarPlanillas.php";
                  
                       $('.alertAddProduct').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Actualizado Correctamente</div>');
                }

            },
            
            error: function(error){
                console.log(error);
            }
         });
    
    $('.alertAddProduct').html('');
        
}

//INGRESAR DETALLE FAMILAR**************************************************************
function sendDataDetalleFamiliar(){
    

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
                      //var info = JSON.parse(response);

               
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

function sendDataDetalleFamiliarConsultar(){
    

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
                      //var info = JSON.parse(response);

               
                    location.href ="consultarPlanillas.php";
                  
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


