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
    $registro=$conexion->query("SELECT city_id, city_name FROM cities ORDER BY city_id DESC LIMIT 30")->fetchAll(PDO::FETCH_OBJ);
    
?>
        <!--******************************Encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h1 class="h2">Registrar Ciudades</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
         <!--******************************Fin Encabezado*****************************-->
        <div class="container overflow-hidden">
           
            <form action="insert/insertarCiudad.php" method="post">
                <div class="row">
    
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Ciudad:</label>
                        <input type="text" class="form-control" id="emp" name="emp" placeholder="" required="">
                        <div id="" class="form-text">Ingrese Nombre de la Ciudad.</div>
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
                <th>Ciudad</th>
           
                <th>Actualizar</th> 
             
              </tr>
          </thead> 
          <tbody>
              <?php 
              foreach ($registro as $ciudad):
              ?>
              <tr class="row<?php echo $ciudad->city_id?>">
                  <td class="id"><?php echo $ciudad->city_id?></td>
                  <td class="name"><?php echo $ciudad->city_name ?></td>
                                                                               
                <td>
                   <a class="add_ciudad btn btn-outline-success" product="<?php echo $ciudad->city_id?>" href="#">
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

