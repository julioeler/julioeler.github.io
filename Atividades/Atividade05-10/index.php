< !DOCTYPE html>
  <html lang="pt-br">

  <head>
    < !-- Meta tags Obrigatórias -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      < !-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-
MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Login</title>
  </head>

  <body>
    < !--Usando um grid para desenhar o layout-->
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm"></div>
          < !--Utilizando espaçamento-->
            <div class="col-sm mt-5">
              <h1>Faça o seu login</h1>
              <form method="POST" action="login.php">
                <div class="form-group"><input type="text" name="txt_usuario" class="form-control" id="usuario"
                    ariadescribedby="ajudausuario" placeholder="Seu nome de usuário"><small id="ajudausuario"
                    class="form-text text-muted">Não iremos compartilhar seu nome de usuário com ninguém.</small></div>
                <div class="form-group"><input type="password" name="psw_senha" class="form-control" id="senha"
                    placeholder="Senha"><small id="ajudausuario" class="form-text text-muted">Use uma senha
                    segura.</small></div><button type="submit" class="btn btn-primary">Enviar</button>
              </form>
            </div>
            <div class="col-sm"></div>
        </div>
      </div>
      < !-- JavaScript (Opcional) -->
        < !-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-
q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
          </script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
          </script>
  </body>

  </html>