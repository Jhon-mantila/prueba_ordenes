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
     
     <form  action="" method="post" name="form_add_product" id="form_add_producto" onsubmit="event.preventDefault(); sendDataDetallePasajero();">
                 <h3>REGISTRAR PRODUCTO</h3><br> 
                 <div class="row">
               
                        
                        <?php 
                            $id_orden = $_GET['id'];
                            ?>
                        <input type="hidden" class="form-control" name="cliente" id="busqueda" value="<?php echo $id_orden ?>"> 
	                    
                         
                   

                     <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">PRODUCTO:</label>
                        <select  class="form-select" name="origen" id="origen">
	                    <?php 
	                      include ('../config/conexion1.php');
	                      $consulta = mysqli_query($con, "SELECT product_id,product_descripcion FROM products");
	                        while ($valores = mysqli_fetch_row($consulta)){            
	                        echo '<option  value="'.$valores[0].'" >'.$valores[1].'</option>';
	                        
	                        }?>
                         </select>   
                    </div>

                 </div><!<!-- row cierre -->  

                   <?php
                   $id=$_GET["id"];
                   ?>
                    <input type="hidden" name="id_planilla" id="id_planilla" value="<?php echo $id;?>"/>
                 <input type="hidden" name="action" value="addDetallePlanilla"/>
                 <div class="alertAddProduct"></div>
                 <br>
                 <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button type="submit" class="btn btn-outline-success">Ingresar</button>
                 <a href="ingresarPlanilla.php " class="closeModal btn btn-outline-success" >Regresar</a>
                 </div>
</form>
		<section id="tabla_resultado">
		<!-- AQUI SE DESPLEGARA NUESTRA TABLA DE CONSULTA -->
		</section     
     
    </main>
  </div>
</div>
<?php include 'footer.php'?>