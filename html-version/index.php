<?php
$pageTitle = 'CCN — Comunidade Cristo para as Nações | Igreja no Jd. Umarizal, SP';
$pageDescription = 'Bem-vindo à CCN — família de fé no Jd. Umarizal, São Paulo. Cultos sexta 20h (presencial e online), domingo 9h30 (presencial e online) e 18h30 (online).';

// ==========================================
// LÓGICA INTELIGENTE DO PRÓXIMO CULTO
// ==========================================
date_default_timezone_set('America/Sao_Paulo');
$dia_atual = (int)date('N'); // 1 (Segunda) a 7 (Domingo)
$hora_atual = date('H:i');

if ($dia_atual == 5) { // SEXTA-FEIRA
    if ($hora_atual < '20:00') {
        $proximo_dia = "Sexta"; $proxima_hora = "20h"; $proximo_nome = "Culto de Ensino";
    } else {
        $proximo_dia = "Domingo"; $proxima_hora = "09h30"; $proximo_nome = "Escola Bíblica";
    }
} elseif ($dia_atual == 6) { // SÁBADO
    $proximo_dia = "Domingo"; $proxima_hora = "09h30"; $proximo_nome = "Escola Bíblica";
} elseif ($dia_atual == 7) { // DOMINGO
    if ($hora_atual < '09:30') {
        $proximo_dia = "Domingo"; $proxima_hora = "09h30"; $proximo_nome = "Escola Bíblica";
    } elseif ($hora_atual < '18:30') {
        $proximo_dia = "Domingo"; $proxima_hora = "18h30"; $proximo_nome = "Culto da Família";
    } else {
        $proximo_dia = "Sexta"; $proxima_hora = "20h"; $proximo_nome = "Culto de Ensino";
    }
} else { // SEGUNDA, TERÇA, QUARTA OU QUINTA
    $proximo_dia = "Sexta"; $proxima_hora = "20h"; $proximo_nome = "Culto de Ensino";
}
// ==========================================

require __DIR__ . '/includes/header.php';
?>

<section class="hero">
  <div class="container-app hero-grid">
    <div>
      <p class="eyebrow"><?php include __DIR__.'/includes/fish-svg.php'; ?> Jardim Umarizal • São Paulo</p>
      <h1>Uma família de fé para <em>você</em> chamar de casa.</h1>
      <p class="lede">Há mais de dez anos caminhamos juntos, propagando as boas novas de Cristo Jesus a toda criatura. Seja qual for a sua história, você é bem-vindo aqui.</p>
      <div class="hero-actions">
        <a href="sobre.php" class="btn-primary">Conheça a CCN →</a>
        <a href="https://www.youtube.com/@comunidadeccn" class="btn-live"><span class="live-dot"></span> Assista ao vivo</a>
      </div>
      <dl class="hero-stats">
        <div><dt>Fundada em</dt><dd>2014</dd></div>
        <div><dt>Anos de comunidade</dt><dd>12+</dd></div>
        <div><dt>Ministérios</dt><dd>13</dd></div>
      </dl>
    </div>
    <div class="hero-img-wrap">
      <div class="frame">
        <img src="assets/img/hero-worship.jpg" alt="Congregação da CCN em momento de adoração" width="1600" height="1100">
      </div>
      <div class="hero-badge">
        <p class="lbl">Próximo culto</p>
        <p class="h"><?= $proximo_dia ?> • <?= $proxima_hora ?></p>
        <p class="s"><?= $proximo_nome ?></p>
      </div>
    </div>
  </div>
</section>

<section class="section container-app">
  <div class="center mx-auto max-w-3xl">
    <p class="eyebrow" style="justify-content:center">Nossa missão</p>
    <h2 class="section-title mt-3">Vidas transformadas pelo amor de Deus, servindo a uma geração inteira.</h2>
    <p class="lede-lg mt-5">Cremos em um ministério atual e expressivo, capaz de apresentar respostas às grandes questões do nosso tempo — vivendo a cultura do Reino em effort coletivo, esperança, alegria e liberdade.</p>
  </div>
  <div class="grid-3 mt-12">
    <?php foreach ([
      ['Discernimento','Ajudar pessoas a alcançarem discernimento emocional e espiritual, voltando a mente para a verdade do evangelho.'],
      ['Reino de Deus','Buscar o Reino em primeiro lugar e ajudar a definir a realidade da nossa geração — e das que estão por vir.'],
      ['Comunidade viva','Cada geração ensina e aprende com a outra. Bonança, caridade e sublimidade como marcas do povo de Deus.'],
    ] as $v): ?>
      <div class="card-soft value-card">
        <?php include __DIR__.'/includes/fish-svg.php'; ?>
        <h3><?= e($v[0]) ?></h3>
        <p><?= e($v[1]) ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<section class="bg-primary-deep">
  <div class="container-app event-block">
    <div>
      <p class="lbl">Próximo evento em destaque</p>
      <h2>Culto de Ação de Graças<br>pelos 11 anos da CCN</h2>
      <p>Uma noite de celebração e testemunhos. Traga sua família e um amigo para agradecer com a gente tudo o que Deus tem feito nesta caminhada.</p>
      <div class="event-meta">
        <span>📅 12 Out 2025</span>
        <span>🕒 18h30</span>
        <span>📍 R. Itamanduaba, 36</span>
      </div>
      <a href="agenda.php" class="btn-primary">Ver agenda completa →</a>
    </div>
    <div class="frame">
      <img src="assets/img/community-1.jpg" alt="Comunhão da CCN" loading="lazy">
    </div>
  </div>
</section>

<section class="section container-app">
  <div class="flex items-center justify-between flex-wrap gap-3">
    <div>
      <p class="eyebrow">Conteúdo</p>
      <h2 class="section-title mt-3">Mensagens e devocionais recentes</h2>
    </div>
    <a href="conteudo.php" class="btn-outline">Ver todos</a>
  </div>
  <div class="grid-3 mt-10">
    <?php foreach ([
      ['Mensagem','28 Set 2025','A cultura do Reino em tempos de incerteza','O evangelho responde às grandes questões da nossa geração com esperança e liberdade.','preaching.jpg'],
      ['Devocional','24 Set 2025','Discernimento espiritual no cotidiano','Voltar a mente para a verdade do evangelho é um exercício diário — e possível.','worship-band.jpg'],
      ['Esboço','18 Set 2025','Famílias que servem juntas','Cada geração ensina e aprende com a outra. O legado da fé atravessa o tempo.','family.jpg'],
    ] as $m): ?>
      <article class="card-soft article-card">
        <div class="thumb"><img src="assets/img/<?= e($m[4]) ?>" alt="" loading="lazy"></div>
        <div class="body">
          <div class="tag-row"><span class="tag"><?= e($m[0]) ?></span><span class="date"><?= e($m[1]) ?></span></div>
          <h3><?= e($m[2]) ?></h3>
          <p><?= e($m[3]) ?></p>
          <a href="conteudo.php" class="link-arrow">Ler mais →</a>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<section class="verse bg-surface">
  <div class="container-app">
    <?php include __DIR__.'/includes/fish-svg.php'; ?>
    <blockquote>"Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo."</blockquote>
    <cite>Salmos 23:4</cite>
  </div>
</section>

<section class="section container-app">
  <div class="flex items-center justify-between flex-wrap gap-3">
    <div>
      <p class="eyebrow">Redes sociais</p>
      <h2 class="section-title mt-3">Acompanhe no Instagram</h2>
    </div>
    <a href="https://instagram.com/<?= e($SITE['instagram']) ?>" target="_blank" rel="noreferrer" class="btn-outline">Ver perfil completo →</a>
  </div>
  <div class="ig-grid">
    <?php for ($i = 1; $i <= 6; $i++): ?>
      <a href="https://www.instagram.com/comunidadeccn/" target="_blank" rel="noreferrer" class="ig-item" aria-label="Ver publicação no Instagram da CCN">
        <img src="/img/insta-<?= $i ?>.jpg" alt="Publicação do Instagram da CCN" loading="lazy">
        <span class="ig-overlay">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>Ver no Instagram</span>
        </span>
      </a>
    <?php endfor; ?>
  </div>
</section>

<section class="container-app" style="padding-bottom:5rem">
  <div class="grid-3">
    <div class="card-soft info-block">
      <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      <h3>Onde estamos</h3>
      <p>R. Itamanduaba, 36<br>Jd. Umarizal — São Paulo/SP<br>CEP 05755-140</p>
      <a href="https://maps.google.com/?q=R.+Itamanduaba,+36+-+Jardim+Umarizal,+São+Paulo" target="_blank" rel="noreferrer" class="link-arrow">Ver no mapa →</a>
    </div>
    <div class="card-soft info-block">
      <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
      <h3>Horários dos cultos</h3>
      <ul>
        <li><strong>Sexta:</strong> 20h — Culto de Ensino (presencial e online)</li>
        <li><strong>Domingo:</strong> 9h30 — Escola Bíblica (presencial e online)</li>
        <li><strong>Domingo:</strong> 18h30 — Culto da Família (online)</li>
      </ul>
    </div>
    <div class="card-soft info-block">
      <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      <h3>Fale conosco</h3>
      <p>Tem alguma dúvida ou pedido de oração? Envie uma mensagem, respondemos com carinho.</p>
      <a href="https://wa.me/<?= e($SITE['whatsapp']) ?>" target="_blank" rel="noreferrer" class="btn-primary mt-4" style="font-size:.875rem">Chamar no WhatsApp</a>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
