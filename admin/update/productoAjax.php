<?php
session_start();
include '../../config/conexion1.php';

if(!empty($_POST)){
    //extraer datos
    if($_POST['action']=='infoProducto'){
       //echo 'consultar';
        $id = $_POST['producto'];
        
        $resultado = mysqli_query($con, "SELECT p.product_id, p.product_descripcion, p.product_amount, p.product_value, p.product_status FROM products p WHERE p.product_id = $id");
        
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
                
    if (!empty($_POST['estado']) || !empty($_POST['emp']))
    {  
      
            $id = $_POST['idE'];
            $producto= $_POST['emp'];
            $am=       $_POST['am'];
            $valor=    $_POST['val'];
            $estado=   $_POST['estado'];
       
          
            
            $sql = mysqli_query($con, "UPDATE products SET  product_descripcion='$producto', product_amount = $am, product_value = $valor,  product_status = '$estado' WHERE product_id=$id");
           
            if($sql)
                    {
                $resultado = mysqli_query($con, "SELECT p.product_id, p.product_descripcion, p.product_amount, p.product_value, p.product_status FROM products p WHERE p.product_id = $id");
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