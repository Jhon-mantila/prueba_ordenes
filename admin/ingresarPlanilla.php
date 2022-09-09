<?php 
include 'header.php';
include 'nabvar-menu.php';
?>  

<!--*******************************************************SideBar***************************************************************-->
<div class="container-fluid">
  <div class="row">
      
<?php 
include 'sidebar.php';
?> 
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
<?php
include ('../config/conexion.php');

$id_usuarioP = $_SESSION['id_usuario'];
$estado='open';
      
/*INICIO CONUSLTA PARA EL CRUD PARA PLANILLA*/

$consulta = "SELECT o.order_id, o.customer_id, o.order_date, o.order_total, o.order_date_delivery, o.order_status, c.customer_name FROM orders o
INNER JOIN customers c ON c.customer_id = o.customer_id
WHERE o.order_status = :estado 
ORDER BY o.order_id DESC LIMIT 1";

$registro=$conexion->prepare($consulta);

$registro->execute(array(":estado"=>$estado));

$cuenta = $registro->rowCount();
   
?>

         
<!-- comment ******************************MODAL PARA INSERTAR PLANILLA***************************************** -->

<!-- comment **************************FIN MODAL PARA INSERT*******************************-->
       
    
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
         <h2 class="h2">ORDEN</h2>
         <div class="d-grid gap-3 d-md-flex justify-content-md-end">
             <a href="insertarPlanilla.php" class="btn btn-outline-success">INGRESAR ORDEN | <i class="fas fa-pencil-alt"></i></a>
        </div>
      </div>
         <!--******************************Fin Encabezado*****************************-->
            <!--******************************mOSTRAR DATOS DE FACTURA*****************************-->
        <div class="container">
            <table class="table table-striped table-hover">
              <?php 
              if($cuenta){
              while ($fila=$registro->fetch(PDO::FETCH_ASSOC)){
                 $id_planilla = $fila['order_id'];
              ?>

                <tr>
                    <th colspan="2">ORDEN No.</th>
                    <td><?php echo $fila['order_id']?></td>
                </tr>
                
                <tr>
                    <th colspan="2">CLIENTE.</th>
                    <td><?php echo $fila['customer_name']?></td>
                </tr>
                <tr>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Fecha Entrega</th>
                </tr>
                <tr>
                    <td><?php echo $fila['order_date']?></td>
                    <td><?php echo $fila['order_total']?></td>
                    <td><?php echo $fila['order_date_delivery'] ?></td>
                </tr>
                <tr>
                    <th colspan="3">ESTADO</th>
                </tr>
                <tr>
                    <td colspan="2"><?php echo $fila['order_status']?></td>
                    <td style="text-align:right">
                        <a href="#" class="add_Dpa btn btn-outline-success" product="<?php echo $fila['order_id']?>"><i class="fas fa-save"></i></a>


                    </td>
                    
                </tr>
       
              <?php }} ?>    
            </table>
          
        </div><!<!-- Cierre container -->
        
                <!--******************************Lista de Botes encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        
        <div class= "d-grid gap-3 d-md-flex justify-content-md-start">
            <h4 class="">Ingrese Por Favor:</h4>
            <?php    
            if ($cuenta>0){
                $id= $id_planilla;
                //echo $id;
            ?>
            <a class="add_detalle_pasajero btn btn-outline-success" href="insertarDetalleOrden.php?id=<?php echo $id?>">PRODUCTOS</a>
            <?php }?>
        </div>
     </div>
                
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">  
        <h4 class="">Detalles Productos</h4>
        <div class= "d-grid gap-3 d-md-flex justify-content-md-end">
        </div>
     </div>
    <!-- *************** INICIO RESULTADO PRODUCTOS *********************************************************** -->           
   <div class="container">
      <div class="row">           
      <table class="table table-striped table-hover">
          <thead>
              <tr>
                <th>Id producto</th>
                <th>Producto</th>
                <th>Amount</th>                      
                <th>Valor</th> 
                <th>Estado</th> 
            
                <th>Eliminar</th> 
              </tr>
          </thead> 
          <tbody>
              <?php 
               if($cuenta>0){
//echo $id_planilla;
    
$consulta2 = "SELECT p.product_id, p.product_descripcion, p.product_amount,  p.product_value, p.product_status
FROM order_details od 
INNER JOIN products p ON p.product_id = od.product_id
INNER JOIN orders o ON o.order_id = od.order_id
WHERE o.order_id = :id_pla";  

$registro2=$conexion->prepare($consulta2);

$registro2->execute(array(":id_pla"=>$id_planilla));

$registro2->execute(array(":id_pla"=>$id_planilla));

$consulta3 = "SELECT od.detail_id FROM order_details od WHERE od.order_id = :id_pla AND od.product_id = :id_prod ORDER BY od.detail_id LIMIT 1 ";  

$registro3=$conexion->prepare($consulta3);



while ($fila=$registro2->fetch(PDO::FETCH_ASSOC)){
 
    $registro3->execute(array(":id_pla"=>$id_planilla, ":id_prod"=>$fila['product_id'])); 
        
              ?>
              <tr class="row<?php echo $fila['product_id']?>">
                  <td class="celCel"><?php echo $fila['product_id']?></td>
                  <td class="celTipo"><?php echo $fila['product_descripcion']?></td>
                  <td class="celcc"><?php echo $fila['product_amount'] ?></td>
                  <td class="celNom"><?php echo $fila['product_value'] ?></td>                                                              
                  <td class="celApe"><?php echo $fila['product_status'] ?></td> 


                    <td>
                        <?php while ($fila2=$registro3->fetch(PDO::FETCH_ASSOC)){ //echo $fila2['detail_id'] ?>
                        <a class="del_detalle_pasajeros btn btn-outline-danger" product="<?php echo $fila2['detail_id'] ?>" href="#">
                        <?php } ?>
                        <i class="fas fa-trash-alt"></i></a>
                    </td>
<?php } 
} else {
    echo 'Falta ingresar planilla';
}?>
          </tbody>    
      </table>
       </div><!-- cierre row -->
 </div><!<!-- Cierre container RESULTADO PASAJEROS ***************************** -->



                
 
 
                
    </main>
  </div>
</div>
 

<?php include 'footer.php'?>

