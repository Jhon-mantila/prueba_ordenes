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

   
    /*INICIO CONUSLTA PARA EL CRUD*/
    $registro=$conexion->query("SELECT p.product_id, p.product_descripcion, p.product_amount, p.product_value, p.product_status FROM products p ORDER BY p.product_id DESC LIMIT 30")->fetchAll(PDO::FETCH_OBJ);
    
?>
        <!--******************************Encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h1 class="h2">Registrar Productos</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
         <!--******************************Fin Encabezado*****************************-->
        <div class="container overflow-hidden">
           
            <form action="insert/insertarProducto.php" method="post">
                <div class="row">
    
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Producto:</label>
                        <input type="text" class="form-control" id="emp" name="emp" placeholder="" required="">
                        <div id="" class="form-text">Ingrese Producto.</div>
                    </div>
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Amount:</label>
                        <input type="number" class="form-control" id="am" name="am" placeholder="" step=".01" required="">
                        <div id="" class="form-text">Ingrese precio.</div>
                    </div>
                </div><!-- cierre row -->
                
                <div class="row">
    
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Valor:</label>
                        <input type="number" class="form-control" id="valor" name="valor" placeholder="" step=".01" required="">
                        <div id="" class="form-text">Ingrese Precio.</div>
                    </div>
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Estado:</label>
                        <input type="text" class="form-control" id="estado" name="estado" placeholder=""  required="">
                        <div id="" class="form-text">Ingrese estado.</div>
                    </div>
                </div><!-- cierre row -->
 
                
                    <input class="btn btn-success" type="submit" name="enviando" value="Ingresar">
                    <input class="btn btn-success" type="reset" name="enviando" value="Borrar">
                
                </form>           
          
        </div><!<!-- Cierre container -->
        
                <!--******************************Lista de Botes encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h1 class="h2">Lista de Empresas</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
                
 <div class="container">
      <div class="row">           
      <table class="table table-striped table-hover" id="example">
          <thead>
              <tr>
                <th>id:</th>
                <th>Producto</th>
                <th>Amount</th>
                <th>Valor</th>
                <th>Estado</th>
                <th>Actualizar</th> 
             
              </tr>
          </thead> 
          <tbody>
              <?php 
              foreach ($registro as $producto):
              ?>
              <tr class="row<?php echo $producto->product_id?>">
                  <td class="id_prod"><?php echo $producto->product_id?></td>
                  <td class="name_prod"><?php echo $producto->product_descripcion?></td>
                  <td class="am__prod"><?php echo $producto->product_amount ?></td>
                  <td class="val_prod"><?php echo $producto->product_value ?></td>
                  <td class="estado_prod"><?php echo $producto->product_status ?></td>
                                                                               
                <td>
                   <a class="add_productos btn btn-outline-success" product="<?php echo $producto->product_id?>" href="#">
                   <i class="fas fa-edit"></i></a>
                 </td>

              </tr>
              <?php endforeach; ?>
          </tbody>    
      </table>
       </div><!-- cierre row -->
 </div><!<!-- Cierre container -->
                
    </main>
  </div>
</div>
<?php include 'footer.php'?>

