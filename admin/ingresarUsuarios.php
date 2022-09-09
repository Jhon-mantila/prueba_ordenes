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
    $registro=$conexion->query("SELECT u.ID_USU, u.NAME, u.CC FROM usuarios u")->fetchAll(PDO::FETCH_OBJ);
    
?>     
<!--************************************************************************Encabezado***************************************************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h1 class="h2">Registrar Usuario</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
         <!--******************************Fin Encabezado*****************************-->
        <div class="container overflow-hidden">
           
            <form action="insert/insertarUsuarios.php" method="post" id="formUsuario">
                <div class="row">
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Cédula:</label>
                        <input type="number" class="form-control" id="cc" name="cc" placeholder="Ingrese Solo Números" required="">
                        <div id="" class="form-text">Número de Identificación del Usuario.</div>
                    </div>  
                    <div class="col-sm">
                         <label for="exampleFormControlInput1" class="form-label">Nombre del Usuario:</label>
                        <input type="text" class="form-control" id="nom" name="nom" placeholder="">
                        <div id="" class="form-text">Ingrese Nombre de Usuario.</div>
                    </div>
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Contraseña:</label>
                        <input type="password" class="form-control" id="clave" name="clave" placeholder="">
                        <div id="" class="form-text">Ingrese Contraseña.</div>
                    </div>
                </div><!-- cierre row -->

                
                
                    <input class="btn btn-success" type="submit" name="enviando" value="Ingresar">
                    <input class="btn btn-success" type="reset" name="enviando" value="Borrar">
                   
                </form>           
          
        </div><!<!-- Cierre container -->
        
                <!--******************************Lista de Botes encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h1 class="h2">Lista de Usuarios</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
                
 <div class="container">
      <div class="row">           
      <table class="table table-striped table-hover">
          <thead>
              <tr>
                <th>id</th>
                <th>Nombres</th>                      
                <th>Cédula</th> 

              </tr>
          </thead> 
          <tbody>
              <?php 

              foreach ($registro as $data):

              ?>
              <tr class="row<?php echo $data->ID_USU ?>">
                  <td class="celcc"><?php echo $data->ID_USU ?></td>
                  <td class="celNom"><?php echo $data->NAME ?></td>                                                              
                  <td class="celNom"><?php echo $data->CC ?></td> 

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

