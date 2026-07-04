<?php
$pageTitle = 'Quem Somos — CCN | Igreja no Jd. Umarizal';
$pageDescription = 'Conheça a história, a missão e os valores da Comunidade Cristo para as Nações — família de fé há mais de 10 anos no Jardim Umarizal.';
require __DIR__ . '/includes/header.php';
?>
<section class="page-hero">
  <div class="container-app grid-2" style="align-items:center">
    <div>
      <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Quem Somos</p>
      <h1>Uma família de fé, há mais de <em style="font-style:normal;color:var(--primary)">dez anos</em> caminhando junta.</h1>
      <p>A Comunidade Cristo para as Nações (CCN) nasceu do desejo de ver vidas transformadas pelo amor de Deus. Localizada no Jardim Umarizal, em São Paulo, somos uma família de fé que caminha unida para propagar as boas novas de salvação em Cristo Jesus a toda criatura. Você é bem-vindo aqui, seja qual for a sua história.</p>
    </div>
    <div class="frame" style="overflow:hidden;border-radius:1.5rem;border:1px solid var(--border);box-shadow:var(--shadow-lift)"><img src="assets/img/community-1.jpg" alt="Comunidade CCN" loading="lazy" style="width:100%;height:420px;object-fit:cover"></div>
  </div>
</section>

<section class="section container-app">
  <div class="grid-2 mx-auto max-w-5xl">
    <div>
      <p class="eyebrow">Nossa missão</p>
      <h2 class="section-title mt-3">Discernimento, verdade e Reino</h2>
      <p class="mt-4" style="color:rgb(52 58 64/.8)">Nossa missão é ajudar pessoas a alcançarem discernimento emocional e espiritual, voltando suas mentes para a verdade do evangelho, buscando o Reino de Deus e ajudando a definir a realidade da nossa geração — e das que ainda estão por vir.</p>
      <p class="mt-3" style="color:rgb(52 58 64/.8)">Acreditamos em um ministério atual e expressivo na sociedade, capaz de apresentar respostas às grandes questões do nosso tempo, sempre se atualizando para continuar propondo um futuro melhor.</p>
    </div>
    <div>
      <p class="eyebrow">Nossos valores</p>
      <h2 class="section-title mt-3">A cultura do Reino</h2>
      <ul class="mt-4" style="display:flex;flex-direction:column;gap:.75rem">
        <?php foreach ([
          ['Esforço coletivo','Cremos que o Reino se constrói em comunidade, não em individualismo.'],
          ['Esperança e alegria','Uma visão positiva do futuro e da obra de Deus entre nós.'],
          ['Liberdade','Verdade que liberta corações, mentes e famílias.'],
          ['Bonança, caridade e sublimidade','Marcas de um povo que serve a Deus de corpo, alma e espírito.'],
        ] as $v): ?>
          <li style="display:flex;gap:.75rem"><span style="color:var(--primary);flex-shrink:0;margin-top:.15rem;font-weight:700">✦</span><span><strong style="color:var(--primary-deep)"><?= e($v[0]) ?>.</strong> <span style="color:rgb(52 58 64/.75)"><?= e($v[1]) ?></span></span></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>

<section class="bg-surface">
  <div class="section container-app">
    <p class="eyebrow" style="justify-content:center;text-align:center;display:flex">Liderança</p>
    <h2 class="section-title center mt-3">Pastores e ministros</h2>
    <div class="grid-3 mt-10">
      <?php foreach ([
        ['Pr. Ricardo Alves','Ministério de Ensino'],
        ['Pra. Débora Souza','Ministério Feminino'],
        ['Pr. Marcos Lima','Nova Geração'],
        ['Ev. Cláudia Barros','Evangelismo'],
        ['Ev. Rafael Prado','Missões'],
        ['Pr. Anderson Reis','Ministério de Louvor'],
      ] as $p): ?>
        <div class="card-soft tile">
          <h3><?= e($p[0]) ?></h3>
          <p><?= e($p[1]) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
