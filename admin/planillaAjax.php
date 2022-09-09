<?php
session_start();
include '../config/conexion1.php';
if(!empty($_POST)){  
//Visualizar modal para guardar Planilla **************************************************************************************    

if($_POST['action'] == 'infoProducto'){
        
        $planilla = $_POST['producto'];
        $usuario =$_SESSION['id_usuario'];
        //echo 'consultar';
        $consulta = "SELECT o.order_id, o.customer_id, o.order_total FROM orders o WHERE o.order_id = $planilla";
        
        $consultaOk = mysqli_query($con, $consulta);
        
        mysqli_close($con);
        
        $fila = mysqli_num_rows($consultaOk);
        
        if ($fila > 0){
            $data = mysqli_fetch_assoc($consultaOk);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            exit();
        }
        
        exit();  
    }
    //Visualizar planilla dos
if($_POST['action'] == 'delPLanillaInfo'){
        
        $planilla = $_POST['producto'];
        $usuario =$_SESSION['id_usuario'];
        //echo 'consultar';
        $consulta = "SELECT ID_PLANILLA, ID_NO_PLANILLA, empresas.N_EMPRESA, moto1.NOMBRES AS MOTO1, moto2.NOMBRES AS MOTO2, bote.N_BOTE, FECHA_REGISTRO_INICIAL,
                        FECHA_REGISTRO_FINAL, tipo_viaje.N_TIPO_VIAJE, desc_tarifa.DESC_TSP ,rutas.NOMBRE_RUTA, planilla.ID_USUARIO, planilla.ESTADO 
                        FROM planilla 
                        INNER JOIN empresas ON planilla.ID_EMPRESAS=empresas.ID_E
                        INNER JOIN motorista AS moto1 ON planilla.ID_MOTO_UNO= moto1.ID_M
                        INNER JOIN motorista AS moto2 ON planilla.ID_MOTO_DOS= moto2.ID_M
                        INNER JOIN bote ON planilla.ID_BOTE=bote.ID_BOTE
                        INNER JOIN tipo_viaje ON planilla.ID_TIPO_VIAJE=tipo_viaje.ID_T
                        INNER JOIN desc_tarifa ON planilla.ID_DESCRIPCION_TARIFA=desc_tarifa.ID_D
                        INNER JOIN rutas ON planilla.ID_RUTAS=rutas.ID_R WHERE ID_PLANILLA = $planilla AND planilla.ID_USUARIO=$usuario";
        
        $consultaOk = mysqli_query($con, $consulta);
        
        mysqli_close($con);
        
        $fila = mysqli_num_rows($consultaOk);
        
        if ($fila > 0){
            $data = mysqli_fetch_assoc($consultaOk);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            exit();
        }
        
        exit();  
    }    
//Visualizar modal para eliminar detalla pasajero **************************************************************************************    
    if($_POST['action'] == 'DeldetallePasajero'){
        //echo 'consultar';
        $detallePasajeroId = $_POST['producto'];
        $usuario =$_SESSION['id_usuario'];
        
        //print_r($_POST);
        $consulta = "SELECT p.product_descripcion, p.product_amount,  p.product_value, p.product_status, od.detail_id, o.order_id
                    FROM order_details od 
                    INNER JOIN products p ON p.product_id = od.product_id
                    INNER JOIN orders o ON o.order_id = od.order_id
                    WHERE od.detail_id = $detallePasajeroId LIMIT 1";
        
        $consultaOk = mysqli_query($con, $consulta);
        
        mysqli_close($con);
        
        $fila = mysqli_num_rows($consultaOk);
        
        if ($fila > 0){
            $data = mysqli_fetch_assoc($consultaOk);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            exit();
        }
        
        exit(); 
    }

    
    
//Acción del boton modal para guardar planilla
 if($_POST['action']=='GuardarPlanilla'){
    
     //print_r($_POST);
   if (!empty($_POST['id_plani']))
    { 
          $id_plani =$_POST['id_plani'];  
          
          $usuario = $_SESSION["id_usuario"];
          
          $sql = mysqli_query($con, "UPDATE orders SET order_status='closed' WHERE order_id=$id_plani");
          
          mysqli_close($con);
    }
     
 }
//Eliminar Planilla
       if($_POST['action']=='DelPlanilla'){
      // echo 'consultar';
            if(empty($_POST['id_plani']) || !is_numeric($_POST['id_plani']) ){
                echo 'error';
            } else {
               $id_planilla =   $_POST['id_plani'];
               $usuarioD = $_SESSION["id_usuario"];
                
               $sqlDel = mysqli_query($con, "UPDATE planilla SET ID_USUARIO=$usuarioD WHERE ID_PLANILLA=$id_planilla");
                
                $sql_del = mysqli_query($con, "DELETE FROM planilla WHERE ID_PLANILLA = $id_planilla");
                mysqli_close($con);
                
                if($sql_del){
                    echo 'Ok';
                }else{
                   //echo 'error';
                }
            }
            echo 'error';
    }
 //Eliminar DETALLE PASAJERO ************************************************
       if($_POST['action']=='DelDetallePasajero'){
      // echo 'consultar33';
            $total;
            if(empty($_POST['id_planilla']) || !is_numeric($_POST['id_planilla']) ){
                echo 'error';
            } else {
               $id_planilla =   $_POST['id_planilla'];
               $id_orden =   $_POST['id_orden'];
               $usuarioD = $_SESSION["id_usuario"];
               
                              //$sqlDel = mysqli_query($con, "UPDATE detalle_planilla_pasajeros SET ID_USUARIO=$usuarioD WHERE ID_DETALLE_PLANILLA=$id_planilla");
                
                $sql_del = mysqli_query($con, "DELETE FROM order_details WHERE detail_id = $id_planilla"); 
                
                //Consulto el total 
            $consulta = mysqli_query($con, "SELECT SUM(p.product_value) as TOTAL
                                            FROM order_details od 
                                            INNER JOIN products p ON p.product_id = od.product_id
                                            INNER JOIN orders o ON o.order_id = od.order_id
                                            WHERE o.order_id = $id_orden");
	    while ($valores = mysqli_fetch_row($consulta)){            
	                        
                                    $total = $valores[0];
                                    
	                        
	                        }
                                
            $act_orden = "UPDATE orders SET order_total = $total WHERE order_id = $id_orden";
            
            $sql_act_ord = mysqli_query($con, $act_orden);
                

                mysqli_close($con);
                
                if($sql_del){
                    echo 'Ok';
                }else{
                   //echo 'error1';
                }
            }
            echo 'error';
    } 
 //Eliminar DETALLE CARGA ************************************************
       if($_POST['action']=='DelDetalleCarga'){
       //echo 'consultar';
            if(empty($_POST['id_planilla']) || !is_numeric($_POST['id_planilla']) ){
                echo 'error';
            } else {
               $id_planilla =   $_POST['id_planilla'];
               $usuarioD = $_SESSION["id_usuario"];
                
                 $sqlDel = mysqli_query($con, "UPDATE detalle_planilla_carga SET ID_USUARIO=$usuarioD WHERE ID_DETALLE_PLANILLA_CARGA=$id_planilla");
                
                $sql_del = mysqli_query($con, "DELETE FROM detalle_planilla_carga WHERE ID_DETALLE_PLANILLA_CARGA = $id_planilla");

                mysqli_close($con);
                
                if($sql_del){
                    echo 'Ok';
                }else{
                   //echo 'error1';
                }
            }
            echo 'error';
    } 
 //Eliminar DETALLE FAMILIAR ************************************************
       if($_POST['action']=='DelDetalleFamiliar'){
       //echo 'consultar';
            if(empty($_POST['id_planilla']) || !is_numeric($_POST['id_planilla']) ){
                echo 'error';
            } else {
               $id_planilla =   $_POST['id_planilla'];
               $usuarioD = $_SESSION["id_usuario"];
                
               $sqlDel = mysqli_query($con, "UPDATE detalle_planilla_pasajeros_familiar SET ID_USUARIO=$usuarioD WHERE ID_DETALLE_PLANILLA=$id_planilla");
                
                $sql_del = mysqli_query($con, "DELETE FROM detalle_planilla_pasajeros_familiar WHERE ID_DETALLE_PLANILLA = $id_planilla");
                mysqli_close($con);
                
                if($sql_del){
                    echo 'Ok';
                }else{
                   //echo 'error1';
                }
            }
            echo 'error';
    }
//Agregar planilla*********************************************************************    
     if($_POST['action'] == 'addPlanilla'){
         //echo 'consultar';
         if (!empty($_POST['planilla']) || !empty($_POST['empresa']) ){
             

             $id_no_planilla =$_POST['planilla'];
             $id_empresa =$_POST['empresa'];
 
             $f_inicial = $_POST['f_inicial'];
             $f_final = $_POST['f_final'];

             $usuario =$_SESSION['id_usuario'];
             
             $insert = ("INSERT INTO orders (order_id,customer_id,order_date ,order_date_delivery,order_status) VALUES 
                      ( $id_no_planilla, $id_empresa, '$f_inicial', '$f_final', 'open')");
             
             $sql_insert = mysqli_query($con, $insert);
             
             if($sql_insert){
                 
                 $consulta = mysqli_query($con, "SELECT o.order_id, o.customer_id, o.order_date, o.order_total, o.order_date_delivery, o.order_status, c.customer_name FROM orders o
                    INNER JOIN customers c ON c.customer_id = o.customer_id
                    WHERE o.order_id = $id_no_planilla");
                    
                    
                 $fila = mysqli_num_rows($consulta);
                 
                            if ($fila > 0){
                            $data = mysqli_fetch_assoc($consulta);
                            echo json_encode($data, JSON_UNESCAPED_UNICODE);
                            
                            exit(); }
                            
             } else {
                 echo 'error';
             }
             
            mysqli_close($con); 
         } else {
             echo 'error';
         }  
     }
     
 //Agregar Detalle PLanilla pasajero *************************************************************    
     if($_POST['action'] == 'addDetallePlanilla'){    
         //echo 'consultar';
        if (!empty($_POST['cliente']) || !empty($_POST['origen']) ){
            
            $total;
            $pasajero=$_POST['cliente'];
            $origen=$_POST['origen'];
           
            $id_planilla=$_POST['id_planilla'];

            $usuario =$_SESSION['id_usuario'];
            
            $insertarPasajero = "INSERT INTO order_details (order_id,product_id) VALUES ($pasajero,$origen)";
            
            $sql_insertar = mysqli_query($con, $insertarPasajero);
            
            //Consulto el total 
            $consulta = mysqli_query($con, "SELECT SUM(p.product_value) as TOTAL
                                            FROM order_details od 
                                            INNER JOIN products p ON p.product_id = od.product_id
                                            INNER JOIN orders o ON o.order_id = od.order_id
                                            WHERE o.order_id = $id_planilla");
	    while ($valores = mysqli_fetch_row($consulta)){            
	                        
                                    $total = $valores[0];
                                    
	                        
	                        }
                                
            $act_orden = "UPDATE orders SET order_total = $total WHERE order_id = $id_planilla";
            
            $sql_act_ord = mysqli_query($con, $act_orden);

        }
     }
     
 //Agregar Detalle PLanilla Carga *************************************************************    
     if($_POST['action'] == 'addDetalleCarga'){    
         //echo 'consultar';
        if (!empty($_POST['carga']) ||  !empty($_POST['origen']) || !empty($_POST['destino']) || !empty($_POST['id_planilla'])){
         
            $carga=$_POST['carga'];
            $origen=$_POST['origen'];
            $destino=$_POST['destino'];
            $id_planilla=$_POST['id_planilla'];

            $usuario =$_SESSION['id_usuario'];
            
            $insertarPasajero = "INSERT INTO detalle_planilla_carga(ID_NO_PLANILLA,HORA_INICIO,HORA_FINAL,ID_CARGA,ID_RUTA_ORIGEN,ID_RUTA_DESTINO,ID_USUARIO) "
                    . "VALUES($id_planilla,NOW(), NOW(), $carga, $origen, $destino, $usuario)";
            
            $sql_insertar = mysqli_query($con, $insertarPasajero);
            
            
        }
     }

 //Agregar Detalle PLanilla Carga *************************************************************    
     if($_POST['action'] == 'addDetalleFamiliar'){    
         //echo 'consultar';
         //print_r($_POST);
        if (!empty($_POST['familiar']) ||  !empty($_POST['origen']) || !empty($_POST['destino']) || !empty($_POST['id_planilla'])){
         
            $familiar=$_POST['familiar'];
            $temperatura=$_POST['temp'];
            $origen=$_POST['origen'];
            $destino=$_POST['destino'];
            $id_planilla=$_POST['id_planilla'];

            $usuario =$_SESSION['id_usuario'];
            
            $insertarPasajero = "INSERT INTO detalle_planilla_pasajeros_familiar (ID_NO_PLANILLA,HORA_INICIO,HORA_FINAL,ID_FAMILIAR,ID_RUTA_ORIGEN,ID_RUTA_DESTINO,ID_USUARIO, TEMPERATURA) "
                    . "VALUES($id_planilla,NOW(), NOW(), $familiar, $origen, $destino, $usuario, $temperatura)";
            
            $sql_insertar = mysqli_query($con, $insertarPasajero);
            
            
        }
     }     
  
}//Cierre Post Inicial
//print_r($_POST);
  exit();