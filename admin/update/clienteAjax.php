<?php
session_start();
include '../../config/conexion1.php';


if(!empty($_POST)){
    //extraer datos
    if($_POST['action']=='infoEstudiante'){
       //echo 'consultar';
        $id_estudiante = $_POST['id_estudiante'];
        
        $resultado = mysqli_query($con, "SELECT c.customer_id, c.customer_id_number, c.customer_name, c.customer_birth_date, c.customer_address, c.customer_phone, c.city_id
                                FROM customers c WHERE c.customer_id = $id_estudiante");

        

        mysqli_close($con);
        
        $fila = mysqli_num_rows($resultado);
        
        if ($fila > 0){
            $data = mysqli_fetch_assoc($resultado);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            exit();
        }


               
        exit();





    }
  //Actualizar datos curso
 if($_POST['action'] == 'addEstudiante'){
                
    if (!empty($_POST['nombre']) || !empty($_POST['documento']) )
    {  
      
            $documento = $_POST['documento'];  
            $nombre = $_POST['nombre'];
            $fecha = $_POST['fecha'];

            $dir= $_POST['dir'];
            $cel =  $_POST['cel'];
            
            $city = $_POST['city'];
          
            $id_estudiante = $_POST["id_estudiante"];
            
            $usuario = $_SESSION["id_usuario"];
            
            $sql = mysqli_query($con, "UPDATE customers SET customer_id_number='$documento', customer_name='$nombre', customer_birth_date='$fecha', customer_address='$dir', customer_phone='$cel', city_id=$city WHERE customer_id=$id_estudiante");
           
            if($sql)
                    {
                $resultado = mysqli_query($con, "SELECT c.customer_id, c.customer_id_number, c.customer_name, c.customer_birth_date, c.customer_address, c.customer_phone, ci.city_name
                                FROM customers c 
                                INNER JOIN cities ci ON ci.city_id = c.city_id
                WHERE customer_id =$id_estudiante");
                
                
                    $fila = mysqli_num_rows($resultado);
        
                if ($fila > 0)
                        {
                    $data = mysqli_fetch_assoc($resultado);
                    
                    echo json_encode($data, JSON_UNESCAPED_UNICODE);

                    exit();
                        }
                    } else {
                        echo 'error';    
                    }                  

                    mysqli_close($con);
            
        } else {
            
        echo 'error';
    }        

           
    }//if de la accion


    exit();
}//post
// primer if
//print_r($_POST);
exit();

