


<script src="../js/jquery-3.6.0.min.js" type="text/javascript"></script>
<script src="../js/funtionCiudad.js" type="text/javascript"></script>
<script src="../js/funtionCliente.js" type="text/javascript"></script>
<script src="../js/funtionUsuario.js" type="text/javascript"></script>
<script src="../js/funtionProducto.js" type="text/javascript"></script>
<script src="../js/funcions.js" type="text/javascript"></script>

<script src="../js/jquery.validate.js" type="text/javascript"></script>

<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js" type="text/javascript"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="../js/bootstrap.min.js" type="text/javascript"></script>
        <script>
 $(document).ready(function(){
     $("#leftside-navigation .sub-menu > a").click(function(e) {
  $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()
})

$(document).ready(function () {
    $('#example').DataTable();
});
                   
                   
                   
                    
                });//cierre llave de la funcion ready
        
        </script>
</body>
</html>

