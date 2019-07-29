export const htmlFirst = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/e83af1d552.js"></script>
  
  <link rel="stylesheet" href="./styles/imc.css">

  <style>
    html, body {
      height: 100%;
    }
  </style>

  <title>InfoMeter</title>
</head>
<body>
  <article class="h-100 d-flex flex-column justify-content-between">
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">InfoMeter</a>
        <ul class="navbar-nav flex-row">
          <li class="nav-item mr-3">
            <a class="nav-link text-info" target="blank" href="https://twitter.com/AntonCodes" title="@AntonCodes">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info" target="blank" href="https://github.com/toxa16/infometer" title="toxa16/infometer">
              <i class="fab fa-github fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="container py-3">
      <div class="row text-center">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">`;


export const htmlLast = `</div>
</div>
</main>

<section class="clearfix"></section>

<footer class="container d-flex flex-wrap justify-content-between pb-2">
<a class="text-info text-nowrap pr-3" href="/terms-of-service">Terms of Service</a>
<span class="text-secondary text-nowrap">© 2019 Anton Bahurinsky</span>
</footer>
</article>

<script src="./index.js"></script>
</body>
</html>`;
