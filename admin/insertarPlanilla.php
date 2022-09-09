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
     
     <form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataPlanilla();">
                 <h3>REGISTRAR ORDEN</h3><br> 
                 <div class="row">
                    
                 <div class="col-sm">   
                 <label for="exampleFormControlInput1" class="form-label">ORDEN:</label>
                 <?php
                 include ('../config/conexion1.php');
                 $sql= mysqli_query($con, "SELECT order_id FROM orders ORDER BY order_id DESC LIMIT 1");
                 while ($fila = mysqli_fetch_row($sql)){
                   
                 ?>
                 <input type="text" name="planilla" id="planilla" class="form-control" placeholder=""value="    <?php echo $fila[0]+1 ?>"/><br> 
                 <?php } ?>
                  </div>
                     <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">CLIENTE:</label>
                         <select  class="form-select" name="empresa" id="empresa">
	                    <?php 
	                      include ('../config/conexion1.php');
	                      $consulta = mysqli_query($con, "SELECT customer_id, customer_name FROM customers");
	                        while ($valores = mysqli_fetch_row($consulta)){            
	                       
                                echo '<option  value="'.$valores[0].'" >'.$valores[1].'</option>';
	                        
	                        }?>
                         </select>
                    </div>

                 </div><!<!-- row cierre -->  

                
                <div class="row">                    
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">FECHA :</label>
                        <input type="date" name="f_inicial" id="f_inicial" class="form-control" >
                    </div>
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">FECHA ENTREGA:</label>
                        <input type="date" name="f_final" id="f_ifinal" class="form-control" >
                    </div>
                </div>
                     

                   <br> 

                 <input type="hidden" name="idC" id="id_c" />
                 <input type="hidden" name="action" value="addPlanilla"/>
                 <div class="alertAddProduct"></div>
                 <br>
                 <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button type="submit" class="btn btn-outline-success">Ingresar</button>
                 <a href="ingresarPlanilla.php  " class="closeModal btn btn-outline-success" >Regresar</a>
                 </div>
</form>
     
     
    </main>
  </div>
</div>

<?php include 'footer.php'?>