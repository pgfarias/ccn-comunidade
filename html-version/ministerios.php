<?php
$pageTitle = 'Ministérios — CCN';
$pageDescription = 'Conheça os 13 ministérios da CCN: louvor, ensino, crianças, jovens, famílias, mulheres, homens, missões e mais.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app">
    <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Ministérios</p>
    <h1>Servir com alegria, crescer em comunidade.</h1>
    <p>Cada ministério é uma porta de entrada para você usar seus dons, formar amizades e caminhar com Deus. Encontre o seu lugar entre nós.</p>
  </div>
</section>

<section class="section container-app">
  <div class="grid-3">
    <?php foreach ([
      ['Louvor & Adoração','Banda, coral e equipe técnica que conduzem os cultos em espírito e verdade.'],
      ['Ensino & Discipulado','Classes bíblicas, EBD e trilhas de crescimento para todas as idades.'],
      ['Kids','Um espaço seguro e alegre onde as crianças conhecem Jesus na linguagem delas.'],
      ['Nova Geração','Adolescentes e jovens vivendo a fé com autenticidade e propósito.'],
      ['Famílias','Encontros, aconselhamento e retiros para casais e famílias.'],
      ['Ministério Feminino','Mulheres que se apoiam, oram juntas e servem lado a lado.'],
      ['Ministério Masculino','Homens em busca de integridade, propósito e maturidade em Cristo.'],
      ['Missões','Levar o evangelho para perto e para longe, com estratégia e paixão.'],
      ['Evangelismo','Ações práticas no bairro e na cidade — servir é anunciar.'],
      ['Intercessão','Uma comunidade de oração que sustenta cada área do ministério.'],
      ['Recepção','Acolher com sorriso e cuidado quem chega em nossa casa.'],
      ['Diaconia','Servir à mesa do Senhor, aos irmãos e à casa de Deus.'],
      ['Ação Social','Cuidar de vulneráveis com dignidade e amor prático.'],
    ] as $m): ?>
      <div class="card-soft tile">
        <?php include __DIR__.'/includes/fish-svg.php'; ?>
        <h3><?= e($m[0]) ?></h3>
        <p><?= e($m[1]) ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
