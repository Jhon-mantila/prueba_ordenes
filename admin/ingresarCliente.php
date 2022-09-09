<?php ob_start(); ?>
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
    $registro=$conexion->query("SELECT c.customer_id, c.customer_id_number, c.customer_name, c.customer_birth_date, c.customer_address, c.customer_phone, ci.city_name
                                FROM customers c 
                                INNER JOIN cities ci ON ci.city_id = c.city_id
                                ORDER by c.customer_id DESC LIMIT 30")->fetchAll(PDO::FETCH_OBJ);
    
?>
<div class="modal Modal">
      <div class="modal-dialog">
        <div class="modal-content ">
          <div class="modal-header">
            <div class="bodyModal ">  
<form  action="" method="post" name="form_add_product" id="form_add_product" onsubmit="event.preventDefault(); sendDataEstudiantes();">
                                                <div class="iconoAct text-success"><i class="fas fa-edit"></i></div>
                                                <h3>ACTUALIZAR DATOS DEl CLIENTE</h3><br>
                                                <div class="row">

                                                <div class="col-sm">
                                                <label for="exampleFormControlInput1" class="form-label">NÚMERO DE DOCUMENTO:</label>
                                                <input type="number" name="documento" id="documento" class="form-control" value=""/><br> 
                                                </div>
                                                </div>
                                                <label for="exampleFormControlInput1" class="form-label">NOMBRES:</label>
                                                <input type="text" name="nombre" id="nombre" class="form-control" value="" /><br> 
                                                
                                                <label for="exampleFormControlInput1" class="form-label">FECHA:</label>
                                                <input type="date" name="fecha" id="fecha" class="form-control" value="" /><br> 
                                                
                                                <label for="exampleFormControlInput1" class="form-label">DIRECCIÓN:</label>
                                                <input type="text" name="dir" id="dir" class="form-control" value="" /><br> 
                                                

                                                <label for="exampleFormControlInput1" class="form-label">CELULAR:</label> 
                                                <input type="text" name="cel" id="cel" class="form-control" value="" /><br> 

                                                <label for="exampleFormControlInput1" class="form-label">CIUDAD:</label>
                                                <select class="form-select" id="city" name="city">
                                                         <?php 

                                                         $sql = 'SELECT city_id,city_name FROM cities';
                                                         foreach ($conexion->query($sql) as $row) {

                                                             echo '<option  value="'.$row['city_id'].'" >'.$row['city_name'].'</option>';

                                                         }
                                                         ?>


                                                 </select>
                                                
                                                <input type="hidden" name="id_estudiante" id="id_estudiante" value=""/>
                                                <input type="hidden" name="action" value="addEstudiante"/>
                                                <div class="alertAddProduct"></div>
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button type="submit" class="btn btn-outline-success">Actualizar</button>
                                                <a href="#" class="closeModal btn btn-outline-success" onclick="closeModal1();">Cerrar</a>
                                                </div>
                                          </form> 

                                          </div>
          </div>
       </div>
    </div>
  </div>
        <!--******************************Encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
         <h2 class="h2">Registrar Cliente</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
         <!--******************************Fin Encabezado*****************************-->
        <div class="container overflow-hidden">
           
            <form action="insert/insertarCliente.php" method="post">
                <div class="row">
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Documento No.</label>
                        <input type="text" class="form-control" id="documento" name="nit" placeholder="Ingrese Documento" required="">
                        <div id="" class="form-text">Documento de Identidad.</div>
                    </div>
                    <div class="col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Nombre.</label>
                        <input type="text" class="form-control" id="emp" name="emp" placeholder="Ingrese Documento" required="">
                        <div id="" class="form-text">Nombre.</div>
                    </div>
                </div><!-- cierre row -->
               <div class="row gy-5">
                    <div class="col col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Fecha Cumpleaños</label>
                        <input type="date" class="form-control" id="fecha" name="fecha" placeholder="" required="">
                        <div id="" class="form-text">Fecha.</div>
                    </div>
                    <div class="col col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="dir" name="dir" placeholder="" required="">
                        <div id="" class="form-text">Ingrese Dirección.</div>
                    </div>
                </div><!-- cierre row -->   
                
                <div class="row gy-5">
                    <div class="col col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Contacto</label>
                        <input type="number" class="form-control" id="tel" name="tel" placeholder="" required="">
                        <div id="" class="form-text">Ingrese Número de Celular.</div>
                    </div>
                    <div class="col col-sm">
                        <label for="exampleFormControlInput1" class="form-label">Ciudad</label>
                     <select class="form-select" id="sede" name="sede">
                    <?php 
	          
                    $sql = 'SELECT city_id,city_name FROM cities';
                    foreach ($conexion->query($sql) as $row) {
                        
                        echo '<option  value="'.$row['city_id'].'" >'.$row['city_name'].'</option>';
                   
                    }
                    ?>
                
                
            </select>
                        <div id="" class="form-text">Ciudad</div>
                    </div>
                </div><!-- cierre row -->  
                 
                <p></p>
                    <input class="btn btn-primary" type="submit" name="enviando" value="Ingresar">
                    <input class="btn btn-primary" type="reset" name="enviando" value="Borrar">
                   
                </form>           
          
        </div><!<!-- Cierre container -->
        
                <!--******************************Lista de Botes encabezado*****************************-->
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h2 class="h2">Lista de Últimos 15 Estudiantes Registrados</h2>
        <div class="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
                
 <div class="container">
      <div class="row">           
      <table class="table table-striped table-hover" id="example">
          <thead>
              <tr>
                
                <th>Documento</th>
                <th>Nombre</th>
                <th>Fecha Cumpleaños</th> 
                <th>Dirección</th>
                <th>Celular</th>
                <th>Ciudad</th>
                <th>Actualizar</th> 
            
              </tr>
          </thead> 
          <tbody>
              <?php 
              foreach ($registro as $data):
              ?>
              <tr class="row<?php echo $data->customer_id?>">
                  <td class="doc"><?php echo $data->customer_id_number?></td>
                  <td class="name"><?php echo $data->customer_name?></td>
                  <td class="fecha"><?php echo $data->customer_birth_date?></td>
                  <td class="dir"><?php echo $data->customer_address?></td>
                  <td class="tel"><?php echo $data->customer_phone?></td>
                  <td class="city"><?php echo $data->city_name?></td>
                  
                 
                    <td>
                        <a class="add_estudiantes btn btn-outline-primary" id_estudiante="<?php echo $data->customer_id ?>" href="#">
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
<?php ob_end_flush(); ?>