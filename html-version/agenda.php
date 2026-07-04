<?php
$pageTitle = 'Agenda — CCN';
$pageDescription = 'Confira a agenda de cultos, eventos e encontros da Comunidade Cristo para as Nações.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Agenda</p>
    <h1>O que está por vir na nossa comunidade.</h1>
    <p>Reserve na sua agenda e venha viver essas experiências com a gente.</p>
  </div>
</section>

<section class="section container-app">
  <div class="grid-3">
    <?php foreach ([
      ['12 Out 2025','18h30','Culto de Ação de Graças pelos 11 anos da CCN','Templo — R. Itamanduaba, 36'],
      ['19 Out 2025','15h','Encontro de Famílias','Salão social'],
      ['25 Out 2025','20h','Vigília de Oração','Templo'],
      ['02 Nov 2025','9h30','Batismos','Templo'],
      ['09 Nov 2025','18h30','Culto de Missões','Templo'],
      ['22 Nov 2025','8h','Ação Social no Bairro','Praça do Umarizal'],
    ] as $e): ?>
      <div class="card-soft tile">
        <p class="eyebrow"><?= e($e[0]) ?> • <?= e($e[1]) ?></p>
        <h3 class="mt-3"><?= e($e[2]) ?></h3>
        <p><?= e($e[3]) ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
