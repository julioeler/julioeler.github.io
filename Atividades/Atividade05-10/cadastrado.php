<?php
 $nome = $_POST["nome"];
 $email = $_POST["email"];
$senha = $_POST["pass"]
$endereco = $_POST["endereco"]
$bairro = $_POST["bairro"]
$cidade = $_POST["cidade"]
echo $nome.$email.$pass.$endereco.$bairro.$cidade;  
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-
MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <title>Cadastrado com sucesso</title>
</head>

<body>
    <div class="container mt-5">
      <h2 class="text-danger">Cadastro para entrega</h2>
      <form>
        <div class="row mt-2">
          <div class="col">
          <div class="alert" role="alert">
          <?php echo .$nome?>
        </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <input type="text" name="email" class="form-control" placeholder="Email">
          </div>
          <div class="col">
            <input type="text" name="pass" class="form-control" placeholder="Senha">
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <input type="text" name="endereco" class="form-control" placeholder="Endereço">
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <input type="text" name="bairro" class="form-control" placeholder="Bairro">
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <input type="text" name="cidade" class="form-control" placeholder="Cidade">
          </div>
          <div class="col">
            <select class="form-control"> 
              <option value="" selected >Selecionar Estado</option>
              <option value="" selected >MG</option>
              <option value="" selected >SP</option>
              <option value="" selected >ES</option>
            </select>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="CEP">
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-md mt-2">Enviar</button>
      </form>
    </div>
</body>