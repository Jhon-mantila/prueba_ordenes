<?php
session_start();
include '../../config/conexion1.php';

if(!empty($_POST)){
    //extraer datos
    if($_POST['action']=='infoProducto'){
       //echo 'consultar';
        $city_id = $_POST['producto'];
        
        $resultado = mysqli_query($con, "SELECT city_id, city_name FROM cities WHERE city_id =$city_id");
        
        mysqli_close($con);
        
        $fila = mysqli_num_rows($resultado);
        
        if ($fila > 0){
            $data = mysqli_fetch_assoc($resultado);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            exit();
        }
        
        exit();
    }
    //Actualizar
 if($_POST['action'] == 'addProduct'){
                
    if (!empty($_POST['idE']) || !empty($_POST['emp']))
    {  
      
            $id = $_POST['idE'];
     
            $emp =    $_POST['emp'];
       
          
            
            $sql = mysqli_query($con, "UPDATE cities SET  city_name='$emp' WHERE city_id=$id");
           
            if($sql)
                    {
                $resultado = mysqli_query($con, "SELECT city_id, city_name FROM cities WHERE city_id =$id");
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