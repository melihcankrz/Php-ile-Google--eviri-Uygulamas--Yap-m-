<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">  
    <title>Php ile Google Çeviri Uygulaması</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </head>
  <body>
    <div class="container">
		<div class="wrapper">
			<div class="text-input">
				<textarea spellcheck="false" class="from-text" placeholder="Çevrilecek Metin"></textarea>
				<textarea spellcheck="false" id="cevirme_sonucu" readonly disabled class="to-text" placeholder="Çeviri"></textarea>
			</div>
			<ul class="controls">
				<li class="row from">
					<div class="icons">
						<i id="from" class="fas fa-volume-up"></i>
					</div>
					<select></select>
				</li>
				<li class="exchange"><i class="fas fa-exchange-alt"></i></li>
				<li class="row to">
					<select></select>
					<div class="icons">
						<i id="to" class="fas fa-volume-up"></i>
					</div>
				</li>
			</ul>
		</div>
		<button>Metni Çevir</button>
    </div>
    <script src="js/ulkeler.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>